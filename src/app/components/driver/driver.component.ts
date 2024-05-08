import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { DriverService } from '../../../../api/services';
import { stringToDate } from '../../shared/customDateParserFormatter';

@Component({
  selector: 'driver',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule, NgbDatepickerModule, RouterLink],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent {
  driverForm: FormGroup;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"

  constructor(private fb: FormBuilder, readonly driverService: DriverService) {
    this.driverForm = this.fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      birthday: [null, Validators.required],
      email: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
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
