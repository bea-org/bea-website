/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-backgroundcircle></bea-website-backgroundcircle>
 */
window.customElements.define('bea-website-backgroundcircle', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  :host {
    display: grid;
    position: relative;
    overflow: hidden;
    contain: content;
    width: 100px;
    height: 100px;
    color: #C9DAFF;
    align-items: center;
    justify-items: center;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    --animation-scale: .04;
    --size: 100%;
  }

  svg {
    width: var(--size);
    height: var(--size);
    will-change: transform;
    animation-duration: 10s;
    animation-name: breath;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }

  circle {
    fill: currentColor;
  }

  @keyframes breath {
    0% {
      transform: scale(calc(1 - var(--animation-scale)));
    }

    100% {
      transform: scale(1);
    }
  }
</style>
<svg id="bubble" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>`;
  }
});
