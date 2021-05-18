import '../bea-website-backgroundcircle/index.js';
import '../bea-website-button/index.js';
import '../bea-website-mailchimpform/index.js';
import '../bea-website-animatedtext/index.js';
import '../bea-icon/index.js';

/**
 * Entry point element
 * @hideconstructor
 * @example
 * <bea-website-home></bea-website-home>
 */
window.customElements.define('bea-website-home', class extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' }).innerHTML = `<style>
  :host {
    display: grid;
    position: relative;
    line-height: 1;
    grid-auto-columns: minmax(0, 1fr);
    font-family: Pangram;
    justify-items: center;
    align-items: center;
  }

  bea-website-backgroundcircle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #media {
    grid-area: media;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #phone {
    width: 100%;
    height: 100%;
    filter: drop-shadow(40px 30px 30px #6B7F9933);
  }

  #phone video {
    width: 100%;
    height: 100%;
    -webkit-mask-image: url(node_modules/@bea-org/bea-website-home/video-mask.svg);
    mask-image: url(node_modules/@bea-org/bea-website-home/video-mask.svg);
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  #text {
    grid-area: text;
    color: var(--bea-color-blue);
    display: grid;
    max-width: calc(100% - 100px);
  }

  h2 {
    position: relative;
    font-weight: 700;
    white-space: nowrap;
    margin: 0;
  }

  h2 span:nth-of-type(2),
  h2 span:nth-of-type(3) {
    display: block;
  }

  h2 span:nth-of-type(2) {
    color: var(--bea-color-darkblue);
  }

  p {
    color: var(--bea-color-darkblue);
    margin: 0;
    font-style: normal;
    font-weight: bold;
    line-height: 1.2;
  }

  #emailformpopin {
    display: grid;
    background-color: var(--bea-color-ivory);
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 560px;
    max-width: calc(100% - 32px);
    box-sizing: border-box;
    box-shadow: 40px 30px 30px #6b7f9933;
    will-change: transform, opacity, visibility;
    transition-property: transform, opacity, visibility;
    transition-duration: .5s;
    transition-timing-function: cubic-bezier(0.43, 1.84, 0.48, 0.99);
    transform: translate(-50%, -50%)
  }

  :host(:not([emailformopen])) #emailformpopin {
    transform: translateY(-50px) translate(-50%, -50%);
    opacity: 0;
    transition-duration: .3s;
    visibility: hidden;
    transition-timing-function: ease-in-out;
  }

  #emailformtitle {
    font-size: 32px;
    color: #001A70;
    font-weight: 700;
  }

  #emailformclosebutton,
  #asterisk {
    position: absolute;
    cursor: pointer;
    transition-property: transform;
    transition-duration: .4s;
  }

  #emailformclosebutton:hover,
  #asterisk:hover {
    transform: rotate(90deg);
  }

  #emailformclosebutton {
    background: none;
    border: none;
    padding: 0;
  }

  #emailformclosebutton bea-icon {
    background-color: var(--bea-color-ivory);
    color: var(--bea-color-darkblue);
    --size: 50px;
    --icon-size: 12px;
  }

  #asterisk {
    --size: 0.57em;
    background-color: var(--bea-color-blue);
    left: 1.95em;
  }

  #emailformbutton {
    grid-area: emailbutton;
    font-size: 22px;
  }

  #overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bea-color-darkblue);
    opacity: 0.6;
    transition-property: opacity;
    transition-duration: .6s;
  }

  :host(:not([emailformopen])) #overlay {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 1024px) {
    :host {
      grid-template-areas: "text media"
        "emailbutton emailbutton";
      grid-template-rows: minmax(0, 1fr) 0;
    }

    #phone {
      max-width: 80vw;
      max-height: 80vh;
      animation-duration: 3s;
      animation-name: float;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }

    #emailformbutton {
      margin-top: -120px;
    }

    #emailformpopin {
      padding: 50px 45px;
      gap: 45px;
    }

    #emailformclosebutton {
      top: 0;
      left: calc(100% + 24px);
    }

    #text {
      width: 520px;
      gap: 30px;
    }

    h2 {
      font-size: 88px;
    }

    p {
      font-size: 24px;
      max-width: 380px;
    }

    bea-website-backgroundcircle {
      left: -10%;
      width: 120%;
      justify-items: start;
      --size-ratio: 2;
    }
  }

  @media (max-width: 1024px) {
    :host {
      grid-template-areas: "emailbutton""text""media";
      grid-template-rows: 84px auto auto;
      gap: 32px;
    }

    #emailformbutton {
      font-size: 16px;
      padding: 20px 24px;
      justify-self: right;
      margin-right: 16px;
    }

    #emailformclosebutton {
      bottom: calc(100% + 24px);
      right: 0;
    }

    #emailformpopin {
      padding: 30px 24px;
      gap: 24px;
    }

    bea-website-mailchimpform {
      grid-template-columns: 1fr;
    }

    #text {
      width: 320px;
      gap: 26px;
      margin-top: -16px;
    }

    #media {
      padding-bottom: 32px;
    }

    #phone {
      width: calc(100% - 140px);
      max-width: 280px;
    }

    h2 {
      font-size: 56px;
    }

    p {
      font-size: 18px;
      max-width: 300px;
    }

    bea-website-backgroundcircle {
      top: 96px;
      height: calc(100% - 96px);
      --size-ratio: 2;
      align-items: start;
    }
  }

  @keyframes float {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
</style>
<div id="text">
  <h2>
    <!-- <bea-icon id="asterisk" icon="asterisk" type="fill"></bea-icon> -->
    <span>Béa</span>
    <span>le don</span>
    <bea-website-animatedtext></bea-website-animatedtext>
  </h2>
  <p>L’application mobile bénévole qui simplifie le don aux associations</p>
</div>
<div id="media">
  <bea-website-backgroundcircle></bea-website-backgroundcircle>
  <div id="phone">
    <video id="phone" poster="node_modules/@bea-org/bea-website-home/poster.png" autoplay loop muted playsinline>
      <source src="node_modules/@bea-org/bea-website-home/userflow.webm" type="video/webm">
      <source src="node_modules/@bea-org/bea-website-home/userflow.mp4" type="video/mp4">
    </video>
  </div>
  </damo-animation-lottie>
</div>
<bea-website-button id="emailformbutton">Ça m’intéresse</bea-website-button>
<div id="overlay"></div>
<section id="emailformpopin" hidden>
  <div id="emailformtitle">On vous en dit plus bientôt !</div>
  <bea-website-mailchimpform></bea-website-mailchimpform>
  <button id="emailformclosebutton">
    <bea-icon icon="close" type="fill"></bea-icon>
  </button>
</section>`;

    const emailFormPopIn = this.shadowRoot.querySelector('#emailformpopin');

    const emailFormButton = this.shadowRoot.querySelector('#emailformbutton');
    emailFormButton.addEventListener('click', () => {
      this.toggleAttribute('emailformopen', true);
    });

    const closeButton = this.shadowRoot.querySelector('#emailformclosebutton');
    closeButton.addEventListener('click', () => this.toggleAttribute('emailformopen', false));

    const overlay = this.shadowRoot.querySelector('#overlay');
    overlay.addEventListener('click', () => this.toggleAttribute('emailformopen', false));

    emailFormPopIn.addEventListener('submit', () => this.toggleAttribute('emailformopen', false));

    const animatedText = this.shadowRoot.querySelector('bea-website-animatedtext');
    const delay = 3000;
    const words = ['facile', 'sécurisé', 'sur-<wbr>mesure'];
    const colors = ['var(--bea-color-green)', 'var(--bea-color-blue)', 'var(--bea-color-coral)'];
    let index = -1;
    const changeText = async () => {
      await animatedText.hide();
      index = (index + 1) % words.length;
      animatedText.innerHTML = words[index];
      animatedText.style.color = colors[index];
      await animatedText.show();
      setTimeout(changeText, delay);
    };
    changeText();
  }
});
