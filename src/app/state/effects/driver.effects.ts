import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { DriverActions } from "../actions/login-page.actions";
import { DriverService } from "../../../../api/services";
import { DriverId } from "../../../../api/models";

@Injectable()
export class DriverEffects {
  createDrivers$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(DriverActions.createDriver),
      mergeMap(action => this.driverService.createDriver({body: action.driver})
      .pipe(map((id: DriverId) => DriverActions.createDriverSuccess({id}))
    ))
    )
  );

  constructor(private actions$: Actions, readonly driverService: DriverService) {}
}
