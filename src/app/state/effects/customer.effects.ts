import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { CustomerActions } from "../actions/login-page.actions";
import { CustomerService } from "../../../../api/services";
import { CustomerId } from "../../../../api/models";

@Injectable()
export class CustomerEffects {
  createCustomer$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(CustomerActions.createCustomer),
      mergeMap(action => this.customerService.createCustomer({body: action.customer})
      .pipe(map((id: CustomerId) => CustomerActions.createCustomerSuccess({id}))
    ))
    )
  );

  constructor(private actions$: Actions, readonly customerService: CustomerService) {}
}
