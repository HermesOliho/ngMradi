import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { APP_NAME, IS_MEDIUM } from '../../app.constants';
import { WindowsObserverService } from '../../core/services/utilities/windows-observer.service';
import {
  ThemeMode,
  ThemeService,
} from '../../core/services/utilities/theme.service';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    MatDividerModule,
  ],
  template: `
    <mat-toolbar>
      <div class="left-container">
        @if (viewport() < mediumScreen) {
        <button mat-icon-button matTooltip="Menu">
          <mat-icon>menu</mat-icon>
        </button>
        }
        <h2>
          <b>{{ appName }}</b>
        </h2>
      </div>
      <div class="right-container avatar-container">
        <button mat-icon-button matTooltip="Notifications">
          <mat-icon>notifications</mat-icon>
        </button>
        <img
          src="/assets/avatar.png"
          alt=""
          width="32"
          height="32"
          matTooltip="Profil"
          [mat-menu-trigger-for]="profileMenu"
        />
        <!-- Menu du profil -->
        <mat-menu #profileMenu="matMenu">
          <button mat-menu-item [mat-menu-trigger-for]="themeMenu">
            <mat-icon>dark_mode</mat-icon>
            <span>Thème</span>
          </button>
          <mat-divider />
          <button mat-menu-item>
            <mat-icon>logout</mat-icon>
            <span>Se déconnecter</span>
          </button>
        </mat-menu>
        <!-- Sous-menu des thèmes -->
        <mat-menu #themeMenu="matMenu">
          <button mat-menu-item (click)="switchTheme('device-theme')">
            Appareil
          </button>
          <button mat-menu-item (click)="switchTheme('light-theme')">
            Clair
          </button>
          <button mat-menu-item (click)="switchTheme('dark-theme')">
            Sombre
          </button>
        </mat-menu>
      </div>
    </mat-toolbar>
    <mat-divider />
  `,
  styles: `
  mat-toolbar {
    display: flex; 
    justify-content: space-between;
    align-items: center;

    .left-container, .avatar-container {
      display: flex;
      align-items: center;
      gap:0.5rem
    }

    img {
      border-radius: 50%;
      background: lightgray;
      cursor: pointer;
      transition: 250ms;

      &:hover {
        transform: scale(0.98);
      }
    }
  }
  `,
})
export class ToolbarComponent {
  appName = APP_NAME;
  theme = inject(ThemeService);

  viewport = inject(WindowsObserverService).width;
  mediumScreen = IS_MEDIUM;

  switchTheme = (theme: ThemeMode) => this.theme.setTheme(theme);
}
