/* tslint:disable */
/* eslint-disable */
import { Address } from '../models/address';
import { Gender } from '../models/gender';
export interface CustomerRequest {
  address: Address;
  birthday: string;
  email: string;
  firstname: string;
  gender: Gender;
  lastname: string;
  password: string;
  phoneNumber: string;
}
