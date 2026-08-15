/* <lesson-timer seconds="30" label="Think"> — a click-to-start countdown pill for timed classroom tasks.
   Self-contained web component; load once via <script src="./lesson-timer.js"> in <helmet>. */
(function () {
  if (customElements.get('lesson-timer')) return;
  const fmt = (s) => {
    const m = Math.floor(s / 60), r = s % 60;
    return m > 0 ? m + ':' + String(r).padStart(2, '0') : String(r) + 's';
  };
  class LessonTimer extends HTMLElement {
    connectedCallback() {
      if (this._built) return; this._built = true;
      this.total = parseInt(this.getAttribute('seconds') || '30', 10);
      this.left = this.total;
      this.label = this.getAttribute('label') || 'Timer';
      this.running = false; this._id = null;
      this.style.cssText = 'display:inline-flex;align-items:center;gap:12px;font-family:Archivo,sans-serif;cursor:pointer;user-select:none;background:#f4efe6;color:#14243d;border-radius:999px;padding:12px 22px;border:2px solid transparent;transition:background .2s,border-color .2s;';
      this._render();
      this.addEventListener('click', () => this.toggle());
    }
    _render() {
      const done = this.left <= 0;
      this.style.background = done ? '#8fbf9f' : (this.running ? '#e8b56a' : '#f4efe6');
      this.style.borderColor = this.running ? '#c98a3a' : 'transparent';
      this.innerHTML =
        '<span style="font-size:26px;font-weight:700;">' + (done ? '✓' : (this.running ? '❚❚' : '▶')) + '</span>' +
        '<span style="font-size:26px;font-weight:600;">' + this.label + '</span>' +
        '<span style="font-size:26px;font-weight:700;font-variant-numeric:tabular-nums;min-width:64px;text-align:right;">' +
        (done ? "time's up" : fmt(this.left)) + '</span>';
    }
    toggle() {
      if (this.left <= 0) { this.left = this.total; this.running = false; this._render(); return; }
      this.running = !this.running;
      if (this.running) {
        this._id = setInterval(() => {
          this.left--; if (this.left <= 0) { this.left = 0; this.running = false; clearInterval(this._id); }
          this._render();
        }, 1000);
      } else { clearInterval(this._id); }
      this._render();
    }
    disconnectedCallback() { if (this._id) clearInterval(this._id); }
  }
  customElements.define('lesson-timer', LessonTimer);
})();
