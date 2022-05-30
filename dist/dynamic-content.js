var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let DynamicContent = class DynamicContent extends LitElement {
    render() {
        return html `
      ${!this.displayContent ? this.renderDefaultSlot() : this.renderContent()}
    `;
    }
    renderDefaultSlot() {
        return html `<slot></slot>`;
    }
    renderContent() {
        return html `<fds-app-card application='{"name":"Business Economics", "author":"Finastra", "flag":"COMING_SOON", "icon":"https://www.finastra.com/themes/custom/themekit/dist/logo.svg", "description":"Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."}'>
  </fds-app-card>`;
    }
    loadContent() {
        // const content = ???
    }
};
__decorate([
    property()
], DynamicContent.prototype, "config", void 0);
__decorate([
    property()
], DynamicContent.prototype, "displayContent", void 0);
DynamicContent = __decorate([
    customElement('fds-dynamic-content')
], DynamicContent);
export { DynamicContent };
//# sourceMappingURL=dynamic-content.js.map