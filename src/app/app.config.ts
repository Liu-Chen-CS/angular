import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app-routing.module';
import {LiuchenDirective} from "./liuchen.directive";

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideZoneChangeDetection({eventCoalescing: true}),
      provideRouter(routes),
    ]
};
