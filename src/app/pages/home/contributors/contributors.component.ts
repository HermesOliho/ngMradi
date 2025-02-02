import {Component, inject} from "@angular/core";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from '@angular/material/tabs';
import {Router, RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: "app-contributors",
  imports: [MatDividerModule, MatTabsModule, RouterLink, RouterOutlet],
  template: `
    <header>
      <h1 style="margin-left: 1rem">Contributeurs</h1>
      <mat-divider/>
      <!-- Onglets -->
      <nav mat-tab-nav-bar [tabPanel]="tabPanel" mat-stretch-tabs="false">
        @for (link of links; track link) {
          <a mat-tab-link
             [routerLink]="link.url"
             (click)="activeLink = link.url"
             [active]="activeLink == link.url"> {{ link.name }} </a>
        }
      </nav>
      <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
      <router-outlet/>
    </header>
  `,
  styles: ``,
})
export default class ContributorsComponent {
  links = [
    {
      name: "Actifs",
      url: "actives"
    },{
      name: "Archivés",
      url: "archived"
    },
  ]

  private router = inject(Router)
  activeLink = this.router.url.replace('/contributors/', '')
}
