import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs";
import { CustomerActions } from "../actions/login-page.actions";
import { CustomerService } from "../../../../api/services";
import { Customer, CustomerId } from "../../../../api/models";

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

  getCustomerByEmail$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(CustomerActions.getCustomerByEmail),
      mergeMap(action => this.customerService.getCustomerByEmail({email: action.email})
      .pipe(map((customer: Customer) => CustomerActions.getCustomerByEmailSuccess({customer}))
    ))
    )
  );

  getCustomerById$ = createEffect(() =>
    this.actions$.pipe(
      tap((value) => console.log(value)),
      ofType(CustomerActions.getCustomerById),
      mergeMap(action => this.customerService.getCustomerById({customerId: action.id})
      .pipe(map((customer: Customer) => CustomerActions.getCustomerByIdSuccess({customer}))
    ))
    )
  );

  constructor(private actions$: Actions, readonly customerService: CustomerService) {}
}
