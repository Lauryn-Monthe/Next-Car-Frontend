/* tslint:disable */
/* eslint-disable */
import { CustomerRequest } from '../models/customer-request';
import { Status } from '../models/status';
export type Customer = CustomerRequest & {
'id'?: string;
'status'?: Status;
};
