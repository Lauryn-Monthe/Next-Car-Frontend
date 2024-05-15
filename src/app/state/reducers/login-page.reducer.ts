import { Action, createReducer, on } from "@ngrx/store";
import { AppState } from "../appState";
import {CountryActions} from "../actions/login-page.actions";

const initialState: AppState = {
  countryList: []
};

export const countryListReducer = createReducer<AppState, Action>(
initialState,
  on(CountryActions.fetchCountries, (state) => {
    return {
      ...state,
      loaded: false
    }
  }),
  on(CountryActions.fetchCountriesSuccess, (state, props) => {
    return {
      ...state,
      countryList: props.countryList,
      loaded: true
    }
  })
);
