/* interactive-check.js — self-marking answer reveal for the course.
   <reveal-answer answer="the correct answer">The question text</reveal-answer>
   Optional running score: place one <quiz-score></quiz-score> on the page.
   Plain web components; load via <script src="./interactive-check.js"></script>. */
(function () {
  if (window.customElements && customElements.get('reveal-answer')) return;

  var NAVY = '#14243d', TEAL = '#0f7d76', GREEN = '#2f8f57', AMBER = '#b07a1e';

  var RSTYLE =
    ':host{display:block;font-family:"Source Serif 4",Georgia,serif;margin:0 0 12px;}' +
    '.card{background:#fff;border:1px solid #e7decd;border-radius:14px;padding:16px 20px;}' +
    '.q{font-size:17px;line-height:1.45;color:#1a1713;}' +
    '.q b{font-family:Archivo,sans-serif;color:' + TEAL + ';margin-right:6px;}' +
    '.btnrow{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;}' +
    'button{font-family:Archivo,sans-serif;font-size:14px;font-weight:600;border:0;border-radius:999px;padding:9px 18px;cursor:pointer;}' +
    '.show{background:' + TEAL + ';color:#fff;}' +
    '.ans{margin-top:12px;background:#eef6f0;border:1px solid #cfe6d6;border-left:5px solid ' + GREEN + ';border-radius:10px;padding:12px 16px;font-size:16px;line-height:1.5;color:#1a1713;display:none;}' +
    '.ans.on{display:block;}' +
    '.mark{display:none;gap:10px;margin-top:12px;}' +
    '.mark.on{display:flex;}' +
    '.got{background:#e7f3ec;color:' + GREEN + ';border:1px solid #bfe0cb;}' +
    '.miss{background:#fbeee9;color:#b0402a;border:1px solid #f0d2c7;}' +
    '.got[aria-pressed="true"]{background:' + GREEN + ';color:#fff;}' +
    '.miss[aria-pressed="true"]{background:#b0402a;color:#fff;}' +
    '.tag{font-family:Archivo,sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a8478;align-self:center;}';

  var Reveal = class extends HTMLElement {
    connectedCallback() {
      if (this._b) return; this._b = true;
      // Defer: when the script is in <head>, the element upgrades before its
      // child text has been parsed, so read innerHTML on the next frame.
      requestAnimationFrame(() => this._build());
    }
    _build() {
      var q = this.innerHTML.trim();
      var a = this.getAttribute('answer') || '';
      this._counted = null;
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML =
        '<style>' + RSTYLE + '</style><div class="card">' +
        '<div class="q">' + q + '</div>' +
        '<div class="btnrow"><button class="show" id="show">Show answer</button></div>' +
        '<div class="ans" id="ans"><b>Answer:</b> ' + a + '</div>' +
        '<div class="mark" id="mark"><span class="tag">Mark yourself:</span>' +
        '<button class="got" id="got" aria-pressed="false">✓ I got it</button>' +
        '<button class="miss" id="miss" aria-pressed="false">✗ Review</button></div>';
      var $ = (id) => this.shadowRoot.getElementById(id);
      $('show').addEventListener('click', () => { $('ans').classList.add('on'); $('mark').classList.add('on'); });
      $('got').addEventListener('click', () => this.mark('got', $));
      $('miss').addEventListener('click', () => this.mark('miss', $));
    }
    mark(kind, $) {
      $('got').setAttribute('aria-pressed', kind === 'got');
      $('miss').setAttribute('aria-pressed', kind === 'miss');
      if (this._counted === kind) return;
      document.dispatchEvent(new CustomEvent('quiz-mark', { detail: { was: this._counted, now: kind } }));
      this._counted = kind;
    }
  };
  customElements.define('reveal-answer', Reveal);

  var SSTYLE =
    ':host{position:sticky;top:12px;z-index:5;display:block;font-family:Archivo,sans-serif;}' +
    '.b{background:' + NAVY + ';color:#f4efe6;border-radius:999px;padding:10px 20px;display:inline-flex;gap:14px;align-items:center;font-size:15px;font-weight:600;box-shadow:0 6px 18px rgba(20,36,61,.18);}' +
    '.n{color:#e8b56a;}' +
    '.reset{font-family:inherit;font-size:12px;font-weight:600;background:rgba(255,255,255,.14);color:#f4efe6;border:0;border-radius:999px;padding:5px 12px;cursor:pointer;}';

  var Score = class extends HTMLElement {
    connectedCallback() {
      if (this._b) return; this._b = true;
      this.got = 0; this.miss = 0;
      this.attachShadow({ mode: 'open' });
      this.render();
      document.addEventListener('quiz-mark', (e) => {
        var d = e.detail;
        if (d.was === 'got') this.got--; if (d.was === 'miss') this.miss--;
        if (d.now === 'got') this.got++; if (d.now === 'miss') this.miss++;
        this.render();
      });
    }
    render() {
      var total = this.got + this.miss;
      this.shadowRoot.innerHTML =
        '<style>' + SSTYLE + '</style><div class="b">' +
        '<span>Score <span class="n">' + this.got + '</span> / ' + total + '</span>' +
        (this.miss ? '<span style="color:#f2c9b8;">' + this.miss + ' to review</span>' : '') +
        '<button class="reset" id="r">Reset</button></div>';
      var self = this;
      this.shadowRoot.getElementById('r').addEventListener('click', function () {
        self.got = 0; self.miss = 0; self.render();
        document.querySelectorAll('reveal-answer').forEach(function (el) {
          if (el.shadowRoot) {
            var g = el.shadowRoot.getElementById('got'), m = el.shadowRoot.getElementById('miss'), a = el.shadowRoot.getElementById('ans'), mk = el.shadowRoot.getElementById('mark');
            if (g) g.setAttribute('aria-pressed', 'false');
            if (m) m.setAttribute('aria-pressed', 'false');
            if (a) a.classList.remove('on');
            if (mk) mk.classList.remove('on');
          }
          el._counted = null;
        });
      });
    }
  };
  customElements.define('quiz-score', Score);
})();
