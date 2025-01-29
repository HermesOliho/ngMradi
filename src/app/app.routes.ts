import { Routes } from '@angular/router';
import { APP_NAME } from './app.constants';

export const routes: Routes = [
  {
    path: '',
    title: `${APP_NAME}`,
    loadComponent: () => import('./pages/home/home.component'),
    children: [
      {
        path: 'projects',
        title: `Projets - ${APP_NAME}`,
        loadComponent: () => import('./pages/home/projects/projects.component'),
      },
      {
        path: 'contributors',
        title: `Contributeurs - ${APP_NAME}`,
        loadComponent: () =>
          import('./pages/home/contributors/contributors.component'),
        children: [
          {
            path: 'actives',
            title: `Contributeurs actifs - ${APP_NAME}`,
            loadComponent: () =>
              import('./pages/home/contributors/actives/actives.component'),
          },
          {
            path: 'archived',
            title: `Contributeurs archivés - ${APP_NAME}`,
            loadComponent: () =>
              import('./pages/home/contributors/archived/archived.component'),
          },
          {
            path: '',
            redirectTo: 'actives',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    title: `Connexion - ${APP_NAME}`,
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: 'project/:id',
    title: `Chargement du projet... - ${APP_NAME}`,
    loadComponent: () => import('./pages/project/project.component'),
  },
  {
    path: '**',
    redirectTo: 'actives',
    pathMatch: 'full',
  },
];
