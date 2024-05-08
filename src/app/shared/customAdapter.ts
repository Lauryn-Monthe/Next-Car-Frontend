import { Injectable } from "@angular/core";
import { NgbDateAdapter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { dateFormat } from "./customDateParserFormatter";

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