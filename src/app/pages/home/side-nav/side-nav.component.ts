import {Component, computed, inject} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {IS_MEDIUM} from '../../../app.constants';
import {WindowsObserverService} from '../../../core/services/utilities/windows-observer.service';
import {StateService} from '../../../core/services/utilities/state.service';

@Component({
  selector: 'app-side-nav',
  imports: [MatSidenavModule, RouterOutlet, RouterLink, MatIconModule, MatMenuModule, RouterLinkActive],
  template: `
    <mat-drawer-container>
      <mat-drawer
        [mode]="viewPort() >= isMedium ? 'side' : 'over'"
        [opened]="viewPort() >= isMedium || isVisible()"
      >
        <a routerLink="/projects" mat-menu-item routerLinkActive="active-link" (click)="toggleSideBar()">
          <mat-icon>dataset</mat-icon>
          Projets
        </a>
        <a routerLink="/contributors" mat-menu-item routerLinkActive="active-link" (click)="toggleSideBar()">
          <mat-icon>people</mat-icon>
          Contributeurs
        </a>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet/>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: `
    mat-drawer-container {
      height: calc(100vh - 65px);
      display: flex;
      flex-direction: column;
    }

    mat-drawer {
      width: 220px;
      border-right: 1px solid var(--mat-sys-outline);
      border-radius: 0;
    }

    .active-link {
      background: var(--mat-sys-outline-variant);
    }
  `
})
export class SideNavComponent {
  isMedium = IS_MEDIUM
  viewPort = inject(WindowsObserverService).width

  stateService = inject(StateService)

  isVisible = computed(() => this.stateService.isSidebarVisible())

  toggleSideBar() {
    this.stateService.isSidebarVisible.update(value => !value)
  }
}
