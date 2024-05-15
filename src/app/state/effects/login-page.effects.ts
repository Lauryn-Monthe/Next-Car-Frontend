import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, mergeMap, map} from "rxjs";
import {CountryActions} from '../actions/login-page.actions'
import { CountryService } from "../../components/services/country-service";
import { Country } from "../../model/country";

@Injectable()
export class LoginEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(CountryActions.fetchCountries),
      mergeMap(action => this.countryService.getCountry()
      .pipe(map((countryList: Country[]) => CountryActions.fetchCountriesSuccess({countryList}))
    ))
    )
  );

  constructor(private actions$: Actions, private countryService: CountryService) {}
}
