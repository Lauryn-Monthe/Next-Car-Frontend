import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../appState';

const selectCountryList = createFeatureSelector<AppState>('CountryState');

export const getCountryList = createSelector(selectCountryList, (state: AppState) => state.countryList);
export const getIsLoaded = createSelector(selectCountryList, (state: AppState) => state.loaded);
