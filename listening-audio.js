/* listening-audio.js — in-browser exam listening player.
   Two engines, one element:
   • REAL AUDIO (preferred): set src="…mp3" to play a real recording (e.g. an
     ElevenLabs track from the listening-audio bucket). Full controls + speed.
   • SPEECH (fallback): with no src, reads the `script` aloud via the browser's
     Web Speech engine (synthetic, device-dependent) — for drafts only.

   Usage (plain HTML):
     <script src="./listening-audio.js"></script>
     <listening-audio label="Track 1 · Mary Celeste"
                      src="https://…/listening-audio/diagnostic/xxx.mp3"></listening-audio>
     <!-- fallback, no recording yet -->
     <listening-audio label="Track 2" script="First line.&#10;Second line."></listening-audio>

   In a Design Component, mount via:
     <x-import component-from-global-scope="listening-audio" from="./listening-audio.js"
       label="…" src="…" hint-size="100%,150px"></x-import>
*/
(function () {
  if (window.customElements && customElements.get('listening-audio')) return;

  var HAS_SPEECH = typeof window !== 'undefined' && 'speechSynthesis' in window;

  function pickVoice() {
    if (!HAS_SPEECH) return null;
    var voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    var prefs = [
      function (v) { return /en[-_]GB/i.test(v.lang) && /female|Google UK English Female|Serena|Kate|Sonia/i.test(v.name); },
      function (v) { return /en[-_]GB/i.test(v.lang); },
      function (v) { return /Google US English/i.test(v.name); },
      function (v) { return /en[-_]US/i.test(v.lang); },
      function (v) { return /^en/i.test(v.lang); }
    ];
    for (var i = 0; i < prefs.length; i++) { var hit = voices.filter(prefs[i])[0]; if (hit) return hit; }
    return voices[0];
  }

  var STYLE = [
    ':host{display:block;font-family:Archivo,system-ui,sans-serif;}',
    '.wrap{background:#14243d;color:#f4efe6;border-radius:16px;padding:20px 24px;box-sizing:border-box;}',
    '.top{display:flex;align-items:center;gap:14px;margin-bottom:14px;}',
    '.badge{font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8b56a;}',
    '.label{font-size:18px;font-weight:600;color:#f4efe6;line-height:1.3;}',
    '.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}',
    '.btn{font-family:inherit;font-size:16px;font-weight:600;border:0;border-radius:999px;padding:12px 22px;cursor:pointer;display:inline-flex;align-items:center;gap:9px;transition:transform .06s ease,background .15s ease;}',
    '.btn:active{transform:translateY(1px);}',
    '.play{background:#e0a13c;color:#241a06;}',
    '.play:hover{background:#eab04e;}',
    '.ghost{background:rgba(255,255,255,.1);color:#f4efe6;border:1px solid rgba(255,255,255,.22);}',
    '.ghost:hover{background:rgba(255,255,255,.18);}',
    '.ghost[disabled]{opacity:.4;cursor:default;}',
    '.speed{margin-left:auto;display:flex;align-items:center;gap:8px;font-size:14px;color:#a9c0bd;}',
    '.chip{font-family:inherit;font-size:14px;font-weight:600;border:1px solid rgba(255,255,255,.22);background:transparent;color:#cfd6e2;border-radius:999px;padding:6px 13px;cursor:pointer;}',
    '.chip[aria-pressed="true"]{background:#f4efe6;color:#14243d;border-color:#f4efe6;}',
    '.status{margin-top:14px;display:flex;align-items:center;gap:12px;font-size:15px;color:#cfd6e2;min-height:22px;}',
    '.dot{width:11px;height:11px;border-radius:50%;background:#5a6b82;flex:none;}',
    '.dot.live{background:#8fbf9f;animation:pulse 1.1s ease-in-out infinite;}',
    '.dot.paused{background:#e8b56a;}',
    '.bar{flex:1;height:6px;border-radius:4px;background:rgba(255,255,255,.14);overflow:hidden;cursor:pointer;}',
    '.fill{height:100%;width:0;background:#8fbf9f;transition:width .2s linear;}',
    '.time{font-variant-numeric:tabular-nums;font-size:13px;color:#a9c0bd;min-width:88px;text-align:right;}',
    '.note{margin-top:11px;font-size:12.5px;line-height:1.4;color:#8a9bb0;font-family:"Source Serif 4",Georgia,serif;font-style:italic;}',
    '.err{background:#3a2016;color:#f2c9b8;border:1px solid #6b3a28;border-radius:12px;padding:16px 20px;font-size:15px;line-height:1.45;}',
    '.trow{margin-top:14px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;}',
    '.tbtn{font-family:inherit;font-size:14px;font-weight:600;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.06);color:#f4efe6;border-radius:999px;padding:9px 16px;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background .15s ease;}',
    '.tbtn:hover{background:rgba(255,255,255,.16);}',
    '.tbtn .car{transition:transform .15s ease;font-size:12px;}',
    '.tbtn[aria-expanded="true"] .car{transform:rotate(90deg);}',
    '.thint{font-size:12.5px;line-height:1.4;color:#8a9bb0;font-style:italic;font-family:"Source Serif 4",Georgia,serif;}',
    '.panel{margin-top:12px;background:#0f1b2e;border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:16px 20px;max-height:340px;overflow:auto;font-family:"Source Serif 4",Georgia,serif;font-size:15px;line-height:1.65;color:#e7ecf3;white-space:pre-wrap;}',
    '.panel[hidden]{display:none;}',
    '@keyframes pulse{0%,100%{opacity:1;}50%{opacity:.4;}}'
  ].join('');

  function icon(kind) {
    if (kind === 'play') return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
    if (kind === 'pause') return '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>';
    if (kind === 'replay') return '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z"/></svg>';
    if (kind === 'stop') return '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 6h12v12H6z"/></svg>';
    return '';
  }

  function fmt(t) {
    if (!isFinite(t) || t < 0) t = 0;
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  var Player = class extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      this.src = this.getAttribute('src') || '';
      this.mode = this.src ? 'clip' : 'speech';
      this.rate = parseFloat(this.getAttribute('rate') || (this.mode === 'clip' ? '1' : '0.95')) || 1;
      this.plays = Math.max(1, parseInt(this.getAttribute('plays') || '2', 10));
      this.gap = Math.max(0, parseFloat(this.getAttribute('gap') || '5'));
      this._state = 'idle';
      this._playIndex = 0;
      this._voice = null;
      this.attachShadow({ mode: 'open' });
      this.render();
      if (this.mode === 'speech' && HAS_SPEECH) {
        this._voice = pickVoice();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = () => { this._voice = pickVoice(); };
        }
        window.addEventListener('beforeunload', () => { try { window.speechSynthesis.cancel(); } catch (e) {} });
      }
    }

    disconnectedCallback() { this.stop(); }

    escape(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

    render() {
      var label = this.getAttribute('label') || 'Listening track';
      if (this.mode === 'speech' && !HAS_SPEECH) {
        if (this.hasTranscript()) {
          this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><div class="wrap">' +
            '<div class="top"><span class="badge">Listen</span><span class="label">' + this.escape(label) + '</span></div>' +
            '<div class="note">No audio engine in this browser — read the transcript below, or open the page in Chrome, Edge or Safari to hear it.</div>' +
            '<div class="panel" role="region" aria-label="Transcript">' + this.transcriptHtml() + '</div>' +
          '</div>';
          return;
        }
        this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><div class="err"><strong>Audio player unavailable.</strong> This browser has no speech engine and no recording is attached. Open the page in Chrome, Edge or Safari.</div>';
        return;
      }
      var hasT = this.hasTranscript();
      var noteText = this.mode === 'clip'
        ? (hasT ? 'Recording plays as in the exam. Reveal the transcript below once you have answered, to check what you missed.'
                : 'Recording plays as in the exam.')
        : (hasT ? 'Synthetic voice for classroom practice — quality varies by device. Reveal the transcript below once you have answered.'
                : 'Synthetic voice for classroom practice — quality varies by device.');
      var statusInit = this.mode === 'clip'
        ? 'Ready · this recording plays the exam pattern'
        : 'Ready · plays ' + this.plays + '× with a pause between';
      this.shadowRoot.innerHTML =
        '<style>' + STYLE + '</style>' +
        '<div class="wrap">' +
          '<div class="top"><span class="badge">Listen</span><span class="label">' + this.escape(label) + '</span></div>' +
          '<div class="row">' +
            '<button class="btn play" id="pp">' + icon('play') + '<span id="pplabel">Play</span></button>' +
            '<button class="btn ghost" id="replay" disabled>' + icon('replay') + 'Replay</button>' +
            '<button class="btn ghost" id="stop" disabled>' + icon('stop') + 'Stop</button>' +
            '<span class="speed">Speed' +
              '<button class="chip" id="s75" aria-pressed="false">0.75×</button>' +
              '<button class="chip" id="s1" aria-pressed="true">1×</button>' +
            '</span>' +
          '</div>' +
          '<div class="status"><span class="dot" id="dot"></span><span id="msg">' + statusInit + '</span><span class="time" id="time"></span></div>' +
          '<div class="status"><div class="bar" id="bar"><div class="fill" id="fill"></div></div></div>' +
          '<div class="note">' + noteText + '</div>' +
          (hasT
            ? '<div class="trow">' +
                '<button class="tbtn" id="tt" aria-expanded="false" aria-controls="panel"><span class="car">&#9654;</span><span id="ttl">Show transcript</span></button>' +
                '<span class="thint">Open it after you have answered — read it back to spot what tricked you.</span>' +
              '</div>' +
              '<div class="panel" id="panel" role="region" aria-label="Transcript" hidden>' + this.transcriptHtml() + '</div>'
            : '') +
        '</div>';
      var $ = (id) => this.shadowRoot.getElementById(id);
      this._els = { pp: $('pp'), pplabel: $('pplabel'), replay: $('replay'), stop: $('stop'), dot: $('dot'), msg: $('msg'), time: $('time'), fill: $('fill'), bar: $('bar'), s75: $('s75'), s1: $('s1'), tt: $('tt'), ttl: $('ttl'), panel: $('panel') };
      this._els.pp.addEventListener('click', () => this.toggle());
      this._els.replay.addEventListener('click', () => this.start());
      this._els.stop.addEventListener('click', () => this.stop());
      this._els.s75.addEventListener('click', () => this.setRate(0.75));
      this._els.s1.addEventListener('click', () => this.setRate(1));
      if (this._els.tt) this._els.tt.addEventListener('click', () => this.toggleTranscript());
      if (this.mode === 'clip') this.initClip();
    }

    setRate(r) {
      this.rate = r;
      if (this._audio) this._audio.playbackRate = r;
      this._els.s75.setAttribute('aria-pressed', r === 0.75 ? 'true' : 'false');
      this._els.s1.setAttribute('aria-pressed', r !== 0.75 ? 'true' : 'false');
    }

    setStatus(msg, dot) {
      if (this._els) { this._els.msg.textContent = msg; this._els.dot.className = 'dot' + (dot ? ' ' + dot : ''); }
    }

    toggle() {
      if (this._state === 'speaking') { this.pause(); }
      else if (this._state === 'paused') { this.resume(); }
      else { this.start(); }
    }

    setButton(playing) {
      this._els.pp.innerHTML = (playing ? icon('pause') : icon('play')) + '<span id="pplabel">' + (playing ? 'Pause' : 'Play') + '</span>';
    }

    /* ── Real-recording engine ─────────────────────────────────────────── */
    initClip() {
      var self = this;
      var a = new Audio();
      a.preload = 'metadata';
      a.src = this.src;
      a.playbackRate = this.rate;
      this._audio = a;
      a.addEventListener('loadedmetadata', function () { self._els.time.textContent = '0:00 / ' + fmt(a.duration); });
      a.addEventListener('timeupdate', function () {
        if (!a.duration) return;
        self._els.fill.style.width = Math.round((a.currentTime / a.duration) * 100) + '%';
        self._els.time.textContent = fmt(a.currentTime) + ' / ' + fmt(a.duration);
      });
      a.addEventListener('ended', function () {
        self._state = 'done'; self.setButton(false);
        self.setStatus('Finished · press Replay to hear it again', '');
      });
      a.addEventListener('error', function () {
        self.setStatus('Could not load the recording — use the printed script.', '');
        self._els.pp.disabled = true;
      });
      this._els.bar.addEventListener('click', function (e) {
        if (!a.duration) return;
        var rect = self._els.bar.getBoundingClientRect();
        a.currentTime = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)) * a.duration;
      });
    }

    start() {
      if (this.mode === 'clip') {
        var a = this._audio; if (!a) return;
        if (this._state === 'done' || this._state === 'idle') { try { a.currentTime = 0; } catch (e) {} }
        this._state = 'speaking';
        this._els.replay.disabled = false; this._els.stop.disabled = false;
        this.setButton(true); this.setStatus('Playing…', 'live');
        var p = a.play(); if (p && p.catch) p.catch(() => this.setStatus('Tap Play to start the recording.', ''));
        return;
      }
      // speech engine
      if (!HAS_SPEECH) return;
      window.speechSynthesis.cancel();
      this._sentences = this.sentences();
      if (!this._sentences.length) { this.setStatus('No script provided.', ''); return; }
      this._playIndex = 1; this._state = 'speaking';
      this._els.replay.disabled = false; this._els.stop.disabled = false;
      this.setButton(true); this.speakReading();
    }

    pause() {
      if (this._state !== 'speaking') return;
      this._state = 'paused';
      if (this.mode === 'clip') { if (this._audio) this._audio.pause(); }
      else { try { window.speechSynthesis.pause(); } catch (e) {} if (this._gapTimer) { clearTimeout(this._gapTimer); this._gapTimer = null; } }
      this.setButton(false); this.setStatus('Paused', 'paused');
    }

    resume() {
      if (this._state !== 'paused') return;
      this._state = 'speaking';
      if (this.mode === 'clip') { if (this._audio) this._audio.play(); this.setStatus('Playing…', 'live'); }
      else { try { window.speechSynthesis.resume(); } catch (e) {} this.setStatus('Reading ' + this._playIndex + ' of ' + this.plays + '…', 'live'); }
      this.setButton(true);
    }

    stop() {
      this._state = 'idle';
      if (this.mode === 'clip') {
        if (this._audio) { try { this._audio.pause(); this._audio.currentTime = 0; } catch (e) {} }
      } else {
        if (this._gapTimer) { clearTimeout(this._gapTimer); this._gapTimer = null; }
        try { window.speechSynthesis.cancel(); } catch (e) {}
      }
      if (this._els) {
        this.setButton(false);
        this._els.fill.style.width = '0%';
        this._els.replay.disabled = true; this._els.stop.disabled = true;
        this.setStatus(this.mode === 'clip' ? 'Ready · this recording plays the exam pattern' : ('Ready · plays ' + this.plays + '× with a pause between'), '');
        if (this.mode === 'clip' && this._audio && this._audio.duration) this._els.time.textContent = '0:00 / ' + fmt(this._audio.duration);
      }
    }

    /* ── Transcript (student-revealable) ───────────────────────────────── */
    hasTranscript() {
      var s = this.getAttribute('script');
      return !!(s && s.trim());
    }

    transcriptHtml() {
      // Reuse the sentence split (handles "/"-separated items) so the transcript
      // reads one line per turn; escape, then join with newlines (panel is pre-wrap).
      var self = this;
      return this.sentences().map(function (s) { return self.escape(s); }).join('\n');
    }

    toggleTranscript() {
      if (!this._els.panel) return;
      var open = this._els.panel.hasAttribute('hidden');
      if (open) this._els.panel.removeAttribute('hidden'); else this._els.panel.setAttribute('hidden', '');
      this._els.tt.setAttribute('aria-expanded', open ? 'true' : 'false');
      this._els.ttl.textContent = open ? 'Hide transcript' : 'Show transcript';
    }

    /* ── Speech engine (fallback) ──────────────────────────────────────── */
    sentences() {
      var raw = (this.getAttribute('script') || '').replace(/\s*\/\s*/g, '\n');
      return raw.split(/\n+/).map(function (s) { return s.trim(); }).filter(Boolean);
    }

    speakReading() {
      var self = this;
      var total = this._sentences.length;
      this.setStatus('Reading ' + this._playIndex + ' of ' + this.plays + '…', 'live');
      var i = 0;
      function next() {
        if (self._state !== 'speaking') return;
        if (i >= total) { self.afterReading(); return; }
        self._els.fill.style.width = Math.round((i / total) * 100) + '%';
        var u = new SpeechSynthesisUtterance(self._sentences[i]);
        if (self._voice) u.voice = self._voice;
        u.rate = self.rate; u.pitch = 1; u.lang = (self._voice && self._voice.lang) || 'en-GB';
        u.onend = function () { i++; next(); };
        u.onerror = function () { i++; next(); };
        window.speechSynthesis.speak(u);
      }
      next();
    }

    afterReading() {
      this._els.fill.style.width = '100%';
      if (this._playIndex < this.plays) {
        var self = this;
        this.setStatus('Pause before reading ' + (this._playIndex + 1) + '… (' + Math.round(this.gap) + 's)', 'paused');
        this._gapTimer = setTimeout(function () {
          if (self._state !== 'speaking') return;
          self._playIndex++; self._els.fill.style.width = '0%'; self.speakReading();
        }, this.gap * 1000);
      } else {
        this._state = 'done'; this.setButton(false);
        this.setStatus('Finished · press Replay to hear it again', '');
      }
    }
  };

  customElements.define('listening-audio', Player);
})();
