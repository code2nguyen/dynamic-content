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
    return;
  }

  loadContent() {}
}
