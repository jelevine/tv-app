// import stuff
import { LitElement, html, css } from 'lit';

export class TvChannel extends LitElement {
  // defaults
  constructor() {
    super();
    this.title = '';
    this.presenter = '';
  }
  // convention I enjoy using to define the tag's name
  static get tag() {
    return 'tv-channel';
  }
  // LitElement convention so we update render() when values change
  static get properties() {
    return {
      title: { type: String },
      presenter: { type: String },
    };
  }
  // LitElement convention for applying styles JUST to our element
  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      .wrapper {
        background-color: #eeeeee;
        width: 100%;
        margin-bottom: 8px;
        border-radius: 10px;
        box-shadow: 1px 1px 5px grey;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 3px;
      }

      h3 {
        font-size: 20px;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 10px;
      }

      h4 {
        font-size: 12px;
        justify-content: center;
        margin-left: 10px;
        margin-bottom: 5px;
        margin-top: 5px;
      }

      @media (min-width: 800px) {
        /* h3{
          font-size: 18px;
        }

        h4 {
          font-size: 15px;
        } */

      /* .wrapper{
        max-width: auto;
        max-height: auto;
      } */
      }
    `;
  }
  // LitElement rendering template of your element
  render() {
    return html`
      <div class="wrapper">
        <h3>${this.title}</h3>
        <h4>${this.presenter}</h4>
        <slot></slot>
      </div>  
      `;
  }
}
// tell the browser about our tag and class it should run when it sees it
customElements.define(TvChannel.tag, TvChannel);
