import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

export interface ContentRegistry {
  url: string;
  name?: string;
}

export interface IConfig {
  services: ContentRegistry[];
}

export interface DisplayContent {
  service: ContentRegistry | string;
  contentId: string;
}

@customElement('fds-dynamic-content')
export class DynamicContent extends LitElement {
  @property()
  config?: IConfig;

  @property()
  displayContent?: DisplayContent;

  override render() {
    return html`
      ${!this.displayContent ? this.renderDefaultSlot() : this.renderContent()}
    `;
  }

  renderDefaultSlot() {
    return html`<slot></slot>`;
  }

  renderContent() {
    return html`<fds-app-card application='{"name":"Business Economics", "author":"Finastra", "flag":"COMING_SOON", "icon":"https://www.finastra.com/themes/custom/themekit/dist/logo.svg", "description":"Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."}'>
  </fds-app-card>`;
  }

  loadContent() {
    // const content = ???
  }
}
