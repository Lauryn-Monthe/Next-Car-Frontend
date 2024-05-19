import { Action, combineReducers, createReducer, on } from "@ngrx/store";
import { AppState } from "../appState";
import {CountryActions, CustomerActions, DriverActions} from "../actions/login-page.actions";

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


export const apiReducer = createReducer<AppState, Action>(
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
        driverId: props.id
      }
    }),
    on(CustomerActions.createCustomer, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(CustomerActions.createCustomerSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        customerId: props.id
      }
    })
  );
