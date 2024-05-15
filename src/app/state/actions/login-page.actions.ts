import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Country } from "../../model/country";
import { HttpErrorResponse } from "@angular/common/http";

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
