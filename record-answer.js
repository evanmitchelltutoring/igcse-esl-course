/* record-answer.js — record-your-answer for Speaking practice.
   <record-answer label="Part 2 · your long turn" max="120"></record-answer>
   Records from the mic (with permission), lets students play it back and
   download it. Plain web component; load via <script src="./record-answer.js"></script>.
   Mic access only works in the live preview after the user allows it. */
(function () {
  if (window.customElements && customElements.get('record-answer')) return;
  var NAVY = '#14243d', TEAL = '#0f7d76', AMBER = '#e0a13c', RED = '#c0503a';
  var SUPPORTED = typeof navigator !== 'undefined' && navigator.mediaDevices && window.MediaRecorder;

  var STYLE =
    ':host{display:block;font-family:Archivo,system-ui,sans-serif;margin:0 0 12px;}' +
    '.wrap{background:' + NAVY + ';color:#f4efe6;border-radius:16px;padding:20px 24px;}' +
    '.top{display:flex;align-items:center;gap:12px;margin-bottom:14px;}' +
    '.badge{font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#e8b56a;}' +
    '.label{font-size:18px;font-weight:600;}' +
    '.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}' +
    'button{font-family:inherit;font-size:16px;font-weight:600;border:0;border-radius:999px;padding:12px 22px;cursor:pointer;display:inline-flex;align-items:center;gap:9px;}' +
    'button[disabled]{opacity:.4;cursor:default;}' +
    '.rec{background:' + RED + ';color:#fff;}' +
    '.ghost{background:rgba(255,255,255,.1);color:#f4efe6;border:1px solid rgba(255,255,255,.22);}' +
    '.time{margin-left:auto;font-variant-numeric:tabular-nums;font-size:22px;font-weight:700;color:#e8b56a;}' +
    '.status{margin-top:14px;display:flex;align-items:center;gap:10px;font-size:15px;color:#cfd6e2;min-height:20px;}' +
    '.dot{width:11px;height:11px;border-radius:50%;background:#5a6b82;}' +
    '.dot.live{background:' + RED + ';animation:p 1s infinite;}' +
    'audio{width:100%;margin-top:14px;display:none;}' +
    'audio.on{display:block;}' +
    '.note{margin-top:11px;font-size:12.5px;line-height:1.4;color:#8a9bb0;font-family:"Source Serif 4",Georgia,serif;font-style:italic;}' +
    '.err{background:#3a2016;color:#f2c9b8;border:1px solid #6b3a28;border-radius:12px;padding:16px 20px;font-size:15px;line-height:1.45;}' +
    '@keyframes p{50%{opacity:.35;}}';

  function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' + r : r); }

  var Rec = class extends HTMLElement {
    connectedCallback() {
      if (this._b) return; this._b = true;
      this.max = parseInt(this.getAttribute('max') || '120', 10);
      this.attachShadow({ mode: 'open' });
      var label = this.getAttribute('label') || 'Record your answer';
      if (!SUPPORTED) {
        this.shadowRoot.innerHTML = '<style>' + STYLE + '</style><div class="err"><strong>Recording unavailable.</strong> This browser can\u2019t record audio. Open the page in Chrome, Edge or Safari and allow microphone access.</div>';
        return;
      }
      this.shadowRoot.innerHTML =
        '<style>' + STYLE + '</style><div class="wrap">' +
        '<div class="top"><span class="badge">Record</span><span class="label">' + label + '</span></div>' +
        '<div class="row">' +
        '<button class="rec" id="rec"><span>\u25CF</span> Record</button>' +
        '<button class="ghost" id="stop" disabled>\u25A0 Stop</button>' +
        '<button class="ghost" id="dl" disabled>\u2193 Save</button>' +
        '<span class="time" id="time">0:00</span></div>' +
        '<div class="status"><span class="dot" id="dot"></span><span id="msg">Ready \u00b7 up to ' + fmt(this.max) + '</span></div>' +
        '<audio id="audio" controls></audio>' +
        '<div class="note">Recorded on your device only \u2014 nothing is uploaded. Use Save to keep the file.</div></div>';
      var $ = (id) => this.shadowRoot.getElementById(id);
      this._els = { rec: $('rec'), stop: $('stop'), dl: $('dl'), time: $('time'), dot: $('dot'), msg: $('msg'), audio: $('audio') };
      this._els.rec.addEventListener('click', () => this.startRec());
      this._els.stop.addEventListener('click', () => this.stopRec());
      this._els.dl.addEventListener('click', () => this.download());
    }
    disconnectedCallback() { this.cleanup(); }
    cleanup() {
      if (this._timer) clearInterval(this._timer);
      if (this._stream) this._stream.getTracks().forEach(function (t) { t.stop(); });
    }
    startRec() {
      var self = this;
      this._els.msg.textContent = 'Requesting microphone\u2026';
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        self._stream = stream;
        self._chunks = [];
        self._mr = new MediaRecorder(stream);
        self._mr.ondataavailable = function (e) { if (e.data.size) self._chunks.push(e.data); };
        self._mr.onstop = function () {
          self._blob = new Blob(self._chunks, { type: self._chunks[0] ? self._chunks[0].type : 'audio/webm' });
          self._els.audio.src = URL.createObjectURL(self._blob);
          self._els.audio.classList.add('on');
          self._els.dl.disabled = false;
          self._els.msg.textContent = 'Recorded \u2014 play it back, or record again';
          self._els.dot.className = 'dot';
        };
        self._mr.start();
        self._sec = 0; self._els.time.textContent = '0:00';
        self._els.rec.disabled = true; self._els.stop.disabled = false; self._els.dl.disabled = true;
        self._els.audio.classList.remove('on');
        self._els.dot.className = 'dot live';
        self._els.msg.textContent = 'Recording\u2026 speak now';
        self._timer = setInterval(function () {
          self._sec++; self._els.time.textContent = fmt(self._sec);
          if (self._sec >= self.max) self.stopRec();
        }, 1000);
      }).catch(function () {
        self._els.msg.textContent = 'Microphone blocked \u2014 allow access in your browser and try again.';
      });
    }
    stopRec() {
      if (this._timer) clearInterval(this._timer);
      if (this._mr && this._mr.state !== 'inactive') this._mr.stop();
      if (this._stream) this._stream.getTracks().forEach(function (t) { t.stop(); });
      this._els.rec.disabled = false; this._els.stop.disabled = true;
    }
    download() {
      if (!this._blob) return;
      var a = document.createElement('a');
      a.href = URL.createObjectURL(this._blob);
      a.download = (this.getAttribute('label') || 'my-answer').replace(/[^a-z0-9]+/gi, '-').toLowerCase() + '.webm';
      a.click();
    }
  };
  customElements.define('record-answer', Rec);
})();
