import CSSTimingFunction from '../../@damienmortini/core/css/CSSTimingFunction.js';

/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-animatedtext></bea-website-animatedtext>
 */
window.customElements.define('bea-website-animatedtext', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          display: inline-block;
          position: relative;
        }

        slot {
          display: none;
        }

        #content {
          display: contents;
        }

        #content span {
          will-change: transform, opacity;
          margin-right: -4px;
          display: inline-block;
        }
      </style>
      <slot></slot>
      <div id="content"></div>
    `;

    this._spans = [];

    this._content = this.shadowRoot.querySelector('#content');
  }

  connectedCallback() {
    this._compute();
  }

  async show() {
    return this._changeVisibility(false);
  }

  async hide() {
    return this._changeVisibility(true);
  }

  async _changeVisibility(hidden) {
    if (hidden === this.hidden) {
      return;
    }
    this.hidden = hidden;
    this.style.pointerEvents = !this.hidden ? '' : 'none';

    const promises = [];

    for (const [i, span] of this._spans.entries()) {
      span.style.transformOrigin = '50% 75%';

      const duration = this.hidden ? 600 : 800;
      const animation = span.animate([
        {
          transform: `translateY(0) scaleX(1) scaleY(${!this.hidden ? 0 : 1})`,
          opacity: this.hidden ? 1 : 0,
        },
        {
          transform: `translateY(-5px) scaleX(.7) scaleY(1.3)`,
          opacity: this.hidden ? .6 : 1,
          offset: this.hidden ? .4 : .65,
        },
        {
          transform: `translateY(0) scaleX(1) scaleY(${!this.hidden ? 1 : 0}`,
          opacity: this.hidden ? 0 : 1,
        },
      ], {
        fill: 'both',
        duration,
        delay: duration / 16 * i,
        easing: this.hidden ? 'cubic-bezier(.6,0,.3,-0.4)' : 'cubic-bezier(.6,1.45,.6,1)',
      });

      promises.push(animation.finished);
    }

    await Promise.all(promises);
  }

  _compute() {
    this._spans = [];

    this._content.innerHTML = '';

    for (const child of this.childNodes) {
      if (child.nodeType !== Node.TEXT_NODE) {
        this._content.appendChild(child.cloneNode());
        continue;
      }

      for (const letter of child.textContent) {
        const span = document.createElement('span');
        span.innerHTML = letter === ' ' ? '&nbsp;' : letter;
        this._spans.push(span);
        this._content.appendChild(span);
      }
    }
  }

  get textContent() {
    return super.textContent;
  }

  set textContent(value) {
    super.textContent = value;
    this._compute();
  }

  get innerHTML() {
    return super.innerHTML;
  }

  set innerHTML(value) {
    super.innerHTML = value;
    this._compute();
  }
});

