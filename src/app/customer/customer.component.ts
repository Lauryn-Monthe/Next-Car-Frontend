import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../api/services';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;

  constructor(readonly customerService: CustomerService, private fb: FormBuilder) {
    this. customerForm = this.fb.group({
      lastname: [Validators.required],
      firstname: [Validators.required],
      birthday: [Validators.required],
      email: [Validators.required],
      address: this.fb.group({
        streetAndNumber: [],
        postalCode: [],
        country: [Validators.required],
        city: [Validators.required]
      })
    })
  }
  ngOnInit(): void {;
  }
 

}
