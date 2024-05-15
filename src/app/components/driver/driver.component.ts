import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { DriverService } from '../../../../api/services';
import { stringToDate } from '../../shared/customDateParserFormatter';
import { Country } from '../../model/country';
import { Store, select } from '@ngrx/store';
import { CountryActions } from '../../state/actions/login-page.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../state/appState';
import { CommonModule } from '@angular/common';
import { getCountryList, getIsLoaded } from '../../state/selectors/login-page.selector';

@Component({
  selector: 'driver',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbDatepickerModule, RouterLink],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent implements OnInit{
  driverForm: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  countryList$: Observable<Country[]>;
  countrySelected: string;
  isLoaded$: Observable<boolean>;

  constructor(private fb: FormBuilder, readonly driverService: DriverService, private store: Store<AppState>) {
    this.driverForm = this.fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      phonecode: [null, Validators.required],
      password: [null, Validators.required],
      carName: [null, Validators.required],
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
    this.countryList$?.subscribe(val => {
      console.log('++++++++',val);
    });
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  createDriver() {
    const value = this.driverForm.value;
    let birthday = stringToDate(value.birthday);
    const body = {
      lastname: value.lastname,
      firstname: value.firstname,
      email: value.email,
      birthday: birthday!.toISOString(),
      gender: value.gender,
      phoneNumber: value.phoneNumber,
      address: value.address,
      password: value.password,
      carName: value.carName
    };
    this.driverService.createDriver({body: body}).subscribe(value => {
      console.log(value);
    });
  }
}
