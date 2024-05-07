import { Component, Injectable, OnInit } from '@angular/core';
import { CustomerService } from '../../../../api/services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {
	readonly DELIMITER = '/';

	fromModel(value: string | null){
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	toModel(date: NgbDateStruct | null): string | null {
    return date ? dateFormat(date.day) + this.DELIMITER + dateFormat(date.month) + this.DELIMITER + date.year : null;
	}
}

export function dateFormat(value: number){
  if (value.toString().length === 1) {
    return '0'+value;
  }
  else return value;
}

/**
 * This Service handles how the date is rendered and parsed from keyboard i.e. in the bound input field.
 */
@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
	readonly DELIMITER = '/';

	parse(value: string): NgbDateStruct | null {
		if (value) {
			const date = value.split(this.DELIMITER);
			return {
				day: parseInt(date[0], 10),
				month: parseInt(date[1], 10),
				year: parseInt(date[2], 10),
			};
		}
		return null;
	}

	format(date: NgbDateStruct | null): string {
		return date ? dateFormat(date.day) + this.DELIMITER + dateFormat(date.month) + this.DELIMITER + date.year : '';
	}
}

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
    const split = this.customerForm.value.birthday.split('/');
    let birthday = split ? new Date(parseInt(split[2]), parseInt(split[1])-1, parseInt(split[0])) : null;
    
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
