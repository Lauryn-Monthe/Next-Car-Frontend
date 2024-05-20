import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { DriverActions } from "../actions/login-page.actions";
import { DriverService } from "../../../../api/services";
import { Driver, DriverId } from "../../../../api/models";

@Injectable()
export class DriverEffects {
  createDriver$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(DriverActions.createDriver),
      mergeMap(action => this.driverService.createDriver({body: action.driver})
      .pipe(map((id: DriverId) => DriverActions.createDriverSuccess({id}))
    ))
    )
  );

  getDriverByEmail$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(DriverActions.getDriverByEmail),
      mergeMap(action => this.driverService.getDriverByEmail({email: action.email})
      .pipe(map((driver: Driver) => DriverActions.getDriverByEmailSuccess({driver}))
    ))
    )
  );

  getDriverById$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(DriverActions.getDriverById),
      mergeMap(action => this.driverService.getDriverById({driverId: action.id})
      .pipe(map((driver: Driver) => DriverActions.getDriverByIdSuccess({driver}))
    ))
    )
  );

  constructor(private actions$: Actions, readonly driverService: DriverService) {}
}
