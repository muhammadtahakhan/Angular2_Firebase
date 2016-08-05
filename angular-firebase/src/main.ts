import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyCmz1skv-G7B70UYvYOiFPhVUQUbEVjWiU",
    authDomain: "angularfirebase-deeef.firebaseapp.com",
    databaseURL: "https://angularfirebase-deeef.firebaseio.com",
    storageBucket: "angularfirebase-deeef.appspot.com",

  })
]);
