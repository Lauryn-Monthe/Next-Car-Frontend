import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { DriverService } from '../../../../api/services';
import { stringToDate } from '../../shared/customDateParserFormatter';
import { Country } from '../../model/country';
import { CountryService } from '../services/country-service';

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
  listCountry!: Country[];
  countrySelected!: string;

  constructor(private fb: FormBuilder, readonly driverService: DriverService,
              private countryService: CountryService) {
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
    this.fetchCountry();
    this.driverForm.controls['phonecode'].setValue("49");
    this.driverForm.controls['phoneNumber'].setValue('+49');
    this.driverForm.valueChanges.subscribe(value => {
      if (value.phonecode !== null) {
         this.driverForm.controls['phoneNumber'].setValue('+'+value.phonecode);
      }
    }).unsubscribe;
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  private fetchCountry(){
    this.countryService.getCountry().subscribe(data=>{
    this.listCountry = data
    console.log('Countries fetched', this.listCountry)
    })
  
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
