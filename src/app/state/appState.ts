import { Customer, CustomerId, Driver, DriverId } from "../../../api/models";
import { Country } from "../model/country";

export interface AppState {
  countryList: Country[];
  loaded?: boolean;
  customerId?: CustomerId;
  driverId?: DriverId;
  customer: Customer;
  driver: Driver;
}
