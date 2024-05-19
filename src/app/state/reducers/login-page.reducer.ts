import { Action, createReducer, on } from "@ngrx/store";
import { AppState } from "../appState";
import {CountryActions, DriverActions} from "../actions/login-page.actions";

const initialState: AppState = {
  countryList: [],
  customerId: null,
  driverId: null
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


export const driverReducer = createReducer<AppState, Action>(
  initialState,
    on(DriverActions.createDriver, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(DriverActions.createDriverSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        driver: props.id
      }
    })
  );
