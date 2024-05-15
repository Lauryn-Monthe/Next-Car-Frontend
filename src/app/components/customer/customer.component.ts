import { Component, Injectable, OnInit } from '@angular/core';
import { CustomerService } from '../../../../api/services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatter, stringToDate } from '../../shared/customDateParserFormatter';
import { CustomAdapter } from '../../shared/customAdapter';
import { RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, NgbDatepickerModule, RouterLink],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  providers: [
		{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  constructor(private fb: FormBuilder, readonly customerService: CustomerService) {
    this.customerForm = this.fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
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
      phoneNumber: value.phoneNumber,
      address: value.address,
      password: value.password
    };
    this.customerService.createCustomer({body: body}).subscribe(value => {
      console.log(value);

    });
  }

}
