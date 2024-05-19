import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { LoginEffects } from './state/effects/login-page.effects';
import { apiReducer, countryListReducer } from './state/reducers/login-page.reducer';
import { DriverEffects } from './state/effects/driver.effects';
import { CustomerEffects } from './state/effects/customer.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideStore(),
    provideState(
      {name: 'CountryState', reducer: countryListReducer},
    ),
    provideState(
      {name: 'Appstate', reducer: apiReducer},
    ),
    provideEffects([LoginEffects, DriverEffects, CustomerEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
