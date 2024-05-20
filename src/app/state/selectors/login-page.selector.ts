import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../appState';

const selectCountryList = createFeatureSelector<AppState>('CountryState');
const selectAppstate = createFeatureSelector<AppState>('Appstate');

export const getCountryList = createSelector(selectCountryList, (state: AppState) => state.countryList);
export const getIsLoaded = createSelector(selectCountryList, (state: AppState) => state.loaded);

export const getDriver = createSelector(selectAppstate, (state: AppState) => state.driver);
export const getCustomer = createSelector(selectAppstate, (state: AppState) => state.customer);

export const getDriverId = createSelector(selectAppstate, (state: AppState) => state.driverId);
export const getCustomerId = createSelector(selectAppstate, (state: AppState) => state.customerId);
