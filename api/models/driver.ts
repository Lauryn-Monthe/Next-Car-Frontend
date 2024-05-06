/* tslint:disable */
/* eslint-disable */
import { DriverRequest } from '../models/driver-request';
import { Status } from '../models/status';
export type Driver = DriverRequest & {
'id'?: string;
'status'?: Status;
};
