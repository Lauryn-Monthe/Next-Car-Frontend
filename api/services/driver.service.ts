/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createDriver } from '../fn/driver/create-driver';
import { CreateDriver$Params } from '../fn/driver/create-driver';
import { deleteDriver } from '../fn/driver/delete-driver';
import { DeleteDriver$Params } from '../fn/driver/delete-driver';
import { Driver } from '../models/driver';
import { DriverId } from '../models/driver-id';
import { getDriverByEmail } from '../fn/driver/get-driver-by-email';
import { GetDriverByEmail$Params } from '../fn/driver/get-driver-by-email';
import { getDriverById } from '../fn/driver/get-driver-by-id';
import { GetDriverById$Params } from '../fn/driver/get-driver-by-id';
import { getDrivers } from '../fn/driver/get-drivers';
import { GetDrivers$Params } from '../fn/driver/get-drivers';
import { updateDriver } from '../fn/driver/update-driver';
import { UpdateDriver$Params } from '../fn/driver/update-driver';
import { updateDriverStatus } from '../fn/driver/update-driver-status';
import { UpdateDriverStatus$Params } from '../fn/driver/update-driver-status';


/**
 * Manage Drivers
 */
@Injectable({ providedIn: 'root' })
export class DriverService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getDrivers()` */
  static readonly GetDriversPath = '/api/drivers';

  /**
   * Returns a list of drivers.
   *
   * Get list of drivers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDrivers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDrivers$Response(params?: GetDrivers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Driver>>> {
    return getDrivers(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns a list of drivers.
   *
   * Get list of drivers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDrivers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDrivers(params?: GetDrivers$Params, context?: HttpContext): Observable<Array<Driver>> {
    return this.getDrivers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Driver>>): Array<Driver> => r.body)
    );
  }

  /** Path part for operation `createDriver()` */
  static readonly CreateDriverPath = '/api/drivers';

  /**
   * Creating a new driver account.
   *
   * Create a new driver account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createDriver()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDriver$Response(params: CreateDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<DriverId>> {
    return createDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * Creating a new driver account.
   *
   * Create a new driver account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createDriver$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createDriver(params: CreateDriver$Params, context?: HttpContext): Observable<DriverId> {
    return this.createDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<DriverId>): DriverId => r.body)
    );
  }

  /** Path part for operation `getDriverById()` */
  static readonly GetDriverByIdPath = '/api/drivers/{driverId}';

  /**
   * Retrieve driver.
   *
   * Retrieve information about a driver using its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDriverById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverById$Response(params: GetDriverById$Params, context?: HttpContext): Observable<StrictHttpResponse<Driver>> {
    return getDriverById(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve driver.
   *
   * Retrieve information about a driver using its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDriverById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverById(params: GetDriverById$Params, context?: HttpContext): Observable<Driver> {
    return this.getDriverById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Driver>): Driver => r.body)
    );
  }

  /** Path part for operation `updateDriver()` */
  static readonly UpdateDriverPath = '/api/drivers/{driverId}';

  /**
   * Updating a driver's account.
   *
   * Update a driver's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDriver()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDriver$Response(params: UpdateDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating a driver's account.
   *
   * Update a driver's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDriver$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDriver(params: UpdateDriver$Params, context?: HttpContext): Observable<void> {
    return this.updateDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteDriver()` */
  static readonly DeleteDriverPath = '/api/drivers/{driverId}';

  /**
   * Deleting a driver's account.
   *
   * delete a driver's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteDriver()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDriver$Response(params: DeleteDriver$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteDriver(this.http, this.rootUrl, params, context);
  }

  /**
   * Deleting a driver's account.
   *
   * delete a driver's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteDriver$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteDriver(params: DeleteDriver$Params, context?: HttpContext): Observable<void> {
    return this.deleteDriver$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getDriverByEmail()` */
  static readonly GetDriverByEmailPath = '/api/drivers/findByEmail';

  /**
   * Retrieve driver.
   *
   * Retrieve information about a driver using its email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDriverByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverByEmail$Response(params: GetDriverByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Driver>> {
    return getDriverByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve driver.
   *
   * Retrieve information about a driver using its email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getDriverByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDriverByEmail(params: GetDriverByEmail$Params, context?: HttpContext): Observable<Driver> {
    return this.getDriverByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Driver>): Driver => r.body)
    );
  }

  /** Path part for operation `updateDriverStatus()` */
  static readonly UpdateDriverStatusPath = '/api/drivers/{id}/update-status';

  /**
   * Updating a drriver's status.
   *
   * Update a driver's status via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateDriverStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDriverStatus$Response(params: UpdateDriverStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateDriverStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating a drriver's status.
   *
   * Update a driver's status via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateDriverStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateDriverStatus(params: UpdateDriverStatus$Params, context?: HttpContext): Observable<void> {
    return this.updateDriverStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
