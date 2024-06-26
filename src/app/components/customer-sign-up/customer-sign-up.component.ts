import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter, stringToDate } from '../../shared/customDateParserFormatter';
import { CustomAdapter } from '../../shared/customAdapter';
import { RouterLink } from '@angular/router';
import { AppState } from '../../state/appState';
import { Store, select } from '@ngrx/store';
import { CountryActions, CustomerActions } from '../../state/actions/login-page.actions';
import { getCountryList, getIsLoaded } from '../../state/selectors/login-page.selector';
import { Country } from '../../model/country';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbDatepickerModule, RouterLink],
  templateUrl: './customer-sign-up.component.html',
  styleUrl: './customer-sign-up.component.scss',
  providers: [
		{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})
export class CustomerSignUpComponent implements OnInit{
  customerForm: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  countryList$: Observable<Country[]>;
  isLoaded$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.customerForm = this.fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      phonecode: [null, Validators.required],
      password: [null, Validators.required],
      address: this.fb.group({
        streetAndNumber: [],
        postalCode: [],
        country: [null, Validators.required],
        city: [null, Validators.required]
      })
    })
  }
  ngOnInit(): void {
    this.store.dispatch(CountryActions.fetchCountries());
    this.countryList$ = this.store.pipe(select((getCountryList)));
    this.isLoaded$ = this.store.pipe(select((getIsLoaded)));
    this.customerForm.get('address.country').setValue('Germany');
    this.customerForm.controls['phonecode'].setValue(49);
    this.customerForm.controls['gender'].setValue('MR');
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  createCustomer() {
    const value = this.customerForm.value;
    let birthday = stringToDate(value.birthday);
    const body = {
      lastname: value.lastname,
      firstname: value.firstname,
      email: value.email,
      birthday: birthday!.toISOString(),
      gender: value.gender,
      phoneNumber: value.phonecode + value.phoneNumber,
      address: value.address,
      password: value.password
    };
    this.store.dispatch(CustomerActions.createCustomer({customer: body}));
  }
}
