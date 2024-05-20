import { Action, createReducer, on } from "@ngrx/store";
import { AppState } from "../appState";
import {CountryActions, CustomerActions, DriverActions} from "../actions/login-page.actions";
import { Customer, Driver } from "../../../../api/models";

const initialState: AppState = {
  countryList: [],
  customerId: null,
  driverId: null,
  driver: {} as Driver,
  customer: {} as Customer
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
    }),

    on(CustomerActions.getCustomerByEmail, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(CustomerActions.getCustomerByEmailSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        customer: props.customer
      }
    }),

    on(DriverActions.getDriverByEmail, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(DriverActions.getDriverByEmailSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        driver: props.driver
      }
    }),

    on(CustomerActions.getCustomerById, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(CustomerActions.getCustomerByIdSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        customer: props.customer
      }
    }),

    on(DriverActions.getDriverById, (state) => {
      return {
        ...state,
        loaded: false
      }
    }),
    on(DriverActions.getDriverByIdSuccess, (state, props) => {
      return {
        ...state,
        loaded: true,
        driver: props.driver
      }
    }),
  );
