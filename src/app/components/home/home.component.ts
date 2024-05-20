import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppState } from '../../state/appState';
import { Store, select } from '@ngrx/store';
import { CustomerActions, DriverActions } from '../../state/actions/login-page.actions';
import { Observable } from 'rxjs';
import { getCustomer, getDriver, getIsLoaded } from '../../state/selectors/login-page.selector';
import { Customer, Driver } from '../../../../api/models';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  isLoaded$: Observable<boolean>;
  driver$: Observable<Driver>;
  customer$: Observable<Customer>;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router) {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }
  ngOnInit(): void {
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  loginAsCustomer() {
    this.store.dispatch(CustomerActions.getCustomerByEmail({email: this.loginForm.controls['email'].value}));
    this.isLoaded$ = this.store.pipe(select((getIsLoaded)));
    this.isLoaded$.subscribe(value => {
      console.log(getValueInRange);

      if (value === true) {
        this.customer$ = this.store.pipe(select(getCustomer));
        this.customer$.subscribe(customer => {
          console.log(this.loginForm.controls['password'].value);
          console.log(customer.password);

          if (customer.password === this.loginForm.controls['password'].value) {
            this.router.navigate(['/customer', customer.id]);
          }
          else throw new Error('Password is wrong');
        });
      }
    });
  }

  loginAsDriver() {
    this.store.dispatch(DriverActions.getDriverByEmail({email: this.loginForm.controls['email'].value}));
    this.isLoaded$ = this.store.pipe(select((getIsLoaded)));
    this.isLoaded$.subscribe(value => {
      if (value === true) {
        this.store.pipe(select(getDriver)).subscribe(driver => {
          if (driver.password === this.loginForm.controls['password'].value) {
            this.router.navigate(['/driver', driver.id]);
          }
          else throw new Error('Password is wrong');
        });
      }
    });
  }

}
