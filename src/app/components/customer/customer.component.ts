import { Component, Injectable, OnInit } from '@angular/core';
import { CustomerService } from '../../../../api/services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { CustomDateParserFormatter, stringToDate } from '../../shared/customDateParserFormatter';
import { CustomAdapter } from '../../shared/customAdapter';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule, NgbDatepickerModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  providers: [
		{ provide: NgbDateAdapter, useClass: CustomAdapter },
		{ provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
	],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, readonly customerService: CustomerService, public datepipe: DatePipe) {
    this. customerForm = this.fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
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
      address: value.address
    };
    this.customerService.createCustomer({body: body}).subscribe(value => {
      console.log(value);
      
    });
  }

}
