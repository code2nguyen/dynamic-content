import { LitElement } from 'lit';
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
export declare class DynamicContent extends LitElement {
    config?: IConfig;
    displayContent?: DisplayContent;
    render(): import("lit-html").TemplateResult<1>;
    renderDefaultSlot(): import("lit-html").TemplateResult<1>;
    renderContent(): import("lit-html").TemplateResult<1>;
    loadContent(): void;
}
//# sourceMappingURL=dynamic-content.d.ts.map