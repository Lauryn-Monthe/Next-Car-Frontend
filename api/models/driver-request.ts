/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { Gender } from '../models/gender';
export interface DriverRequest {
  address: Address;
  birthday: string;
  carName: string;
  email: string;
  firstname: string;
  gender: Gender;
  lastname: string;
  password: string;
  phoneNumber: string;
}
