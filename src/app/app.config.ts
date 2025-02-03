import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "ngmradi-malakisi", appId: "1:512827716021:web:9e9e66779a96357288e9fc", storageBucket: "ngmradi-malakisi.firebasestorage.app", apiKey: "AIzaSyCXKtMR7Fioo4G9PpEUGP55xE4ZuD0IJvU", authDomain: "ngmradi-malakisi.firebaseapp.com", messagingSenderId: "512827716021" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
