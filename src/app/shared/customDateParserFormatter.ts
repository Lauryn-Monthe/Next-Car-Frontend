import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

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

export function dateFormat(value: number) {
    if (value.toString().length === 1) {
      return '0'+value;
    }
    else return value;
}

export function stringToDate(value: string) {
    const split = value.split('/');
    return split ? new Date(parseInt(split[2]), parseInt(split[1])-1, parseInt(split[0])) : null;
}