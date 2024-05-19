import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Country } from "../../model/country";
import { HttpErrorResponse } from "@angular/common/http";
import { Customer, Driver, DriverId } from "../../../../api/models";

/* export const fetchCountry = createAction('[Login Page] Fetch country');

export const fetchCountrySuccess = createAction(
  '[Login Page] Fetch country success', props<{countryList: Country[]}>()
); */

export const CountryActions = createActionGroup({
  source: 'COUNTRY',
  events: {
    'Fetch countries': emptyProps(),
    'Fetch countries success': props<{countryList: Country[]}>(),
    'Fetch countries failure': props<{error: HttpErrorResponse | Error}>()
  }
});

export const CustomerActions = createActionGroup({
  source: 'CUSTOMER',
  events: {
    'Get customer by id': emptyProps(),
    'Get customer by id success': props<{customer: Customer}>(),
    'Get customer by id failure': props<{error: HttpErrorResponse | Error}>(),
    'Get customers': emptyProps(),
    'Get customers success': props<{customerList: Customer[]}>(),
    'Get customers failure': props<{error: HttpErrorResponse | Error}>()
  }
});

export const DriverActions = createActionGroup({
  source: 'DRIVER',
  events: {
    'Get driver by id': emptyProps(),
    'Get driver by id success': props<{driver: Driver}>(),
    'Get driver by id failure': props<{error: HttpErrorResponse | Error}>(),
    'Get drivers': emptyProps(),
    'Get drivers success': props<{driverList: Driver[]}>(),
    'Get drivers failure': props<{error: HttpErrorResponse | Error}>(),
    'Create driver': props<{driver: Driver}>(),
    'Create driver success': props<{id: DriverId}>(),
    'Create driver failure': props<{error: HttpErrorResponse | Error}>()
  }
});
