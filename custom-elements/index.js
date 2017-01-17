'use strict';

class CustomTextarea extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.innerHTML = `
      <style>
        .root {
          position: relative;
        }
        .textarea,
        .length {
          font-size: 14px;
          font-family: Menlo, monospace;
        }
        .textarea {
          box-sizing: border-box;
          display: block;
          margin: initial;
          padding: initial;
          padding: 5px;
          width: 100%;
          resize: none;
          outline: 0;
        }
        .length {
          position: absolute;
          bottom: 5px;
          right: 6px;
        }
      </style>
      <div class="root">
        <div class="length">0</div>
        <textarea class="textarea"></textarea>
      </div>
    `;

    this.length = shadowRoot.querySelector('.length');
    this.textarea = shadowRoot.querySelector('.textarea');
    this.change = this.change.bind(this);
    this.autosize = this.autosize.bind(this);
  }

  static get observedAttributes() {
    return [
      'autofocus',
      'placeholder'
    ];
  }

  connectedCallback() {
    this.textarea.addEventListener('keyup', this.change, false);
    this.textarea.addEventListener('keydown', this.autosize, false);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.textarea.setAttribute(name, newValue);
  }

  disconnectedCallback() {
    this.textarea.removeEventListener('keyup', this.change, false);
    this.textarea.removeEventListener('keydown', this.autosize, false);
  }

  get value() {
    return this.textarea.value;
  }

  set value(value) {
    this.textarea.value = value;
    this.length.textContent = value.length;
  }

  change() {
    this.length.textContent = this.textarea.value.length;
  }

  autosize() {
    setTimeout(() => {
      this.textarea.style.cssText = 'height: auto;';
      this.textarea.style.cssText = `height: ${this.textarea.scrollHeight + 2}px`;
    }, 0);
  }
}

customElements.define('custom-textarea', CustomTextarea);
