import { Component } from "@angular/core";
import { ToolbarComponent } from "./toolbar.component";

@Component({
    selector: "app-home",
    imports: [ToolbarComponent],
    template: `
        <app-toolbar />
        <p>home works!</p>
    `,
    styles: ``,
})
export default class HomeComponent {}
