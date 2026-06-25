import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config'; // 👈 Si tu app.config está dentro de la carpeta app

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
