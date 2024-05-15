import { Country } from "../model/country";

export interface AppState {
  countryList: Country[];
  loaded?: boolean;
}
