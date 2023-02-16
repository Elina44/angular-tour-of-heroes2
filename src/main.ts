import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//Import de cette ligne pour WCS + appel ligne 10 => avant : npm install wcs-core wcs-angular
import { defineCustomElements } from 'wcs-core/loader';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
defineCustomElements();
