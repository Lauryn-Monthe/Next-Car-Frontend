/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createCustomer } from '../fn/customer/create-customer';
import { CreateCustomer$Params } from '../fn/customer/create-customer';
import { Customer } from '../models/customer';
import { CustomerId } from '../models/customer-id';
import { deleteCustomer } from '../fn/customer/delete-customer';
import { DeleteCustomer$Params } from '../fn/customer/delete-customer';
import { getCustomerByEmail } from '../fn/customer/get-customer-by-email';
import { GetCustomerByEmail$Params } from '../fn/customer/get-customer-by-email';
import { getCustomerById } from '../fn/customer/get-customer-by-id';
import { GetCustomerById$Params } from '../fn/customer/get-customer-by-id';
import { getCustomers } from '../fn/customer/get-customers';
import { GetCustomers$Params } from '../fn/customer/get-customers';
import { searchCustomers } from '../fn/customer/search-customers';
import { SearchCustomers$Params } from '../fn/customer/search-customers';
import { updateCustomer } from '../fn/customer/update-customer';
import { UpdateCustomer$Params } from '../fn/customer/update-customer';


/**
 * Manage Customers
 */
@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCustomers()` */
  static readonly GetCustomersPath = '/api/customer';

  /**
   * Returns a list of customers.
   *
   * Get list of customers
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomers$Response(params?: GetCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
    return getCustomers(this.http, this.rootUrl, params, context);
  }

  /**
   * Returns a list of customers.
   *
   * Get list of customers
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomers(params?: GetCustomers$Params, context?: HttpContext): Observable<Array<Customer>> {
    return this.getCustomers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Customer>>): Array<Customer> => r.body)
    );
  }

  /** Path part for operation `createCustomer()` */
  static readonly CreateCustomerPath = '/api/customer';

  /**
   * Creating a new customer account.
   *
   * Create a new customer account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCustomer$Response(params: CreateCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerId>> {
    return createCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * Creating a new customer account.
   *
   * Create a new customer account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCustomer(params: CreateCustomer$Params, context?: HttpContext): Observable<CustomerId> {
    return this.createCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<CustomerId>): CustomerId => r.body)
    );
  }

  /** Path part for operation `getCustomerById()` */
  static readonly GetCustomerByIdPath = '/api/customers/{id}';

  /**
   * Retrieve customer.
   *
   * Retrieve information about a Customer using its ID.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomerById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerById$Response(params: GetCustomerById$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return getCustomerById(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve customer.
   *
   * Retrieve information about a Customer using its ID.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomerById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerById(params: GetCustomerById$Params, context?: HttpContext): Observable<Customer> {
    return this.getCustomerById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `updateCustomer()` */
  static readonly UpdateCustomerPath = '/api/customers/{id}';

  /**
   * Updating a customer's account.
   *
   * Update a customer's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCustomer$Response(params: UpdateCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating a customer's account.
   *
   * Update a customer's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCustomer(params: UpdateCustomer$Params, context?: HttpContext): Observable<void> {
    return this.updateCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteCustomer()` */
  static readonly DeleteCustomerPath = '/api/customers/{id}';

  /**
   * Deleting a customer's account.
   *
   * delete a customer's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCustomer$Response(params: DeleteCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * Deleting a customer's account.
   *
   * delete a customer's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCustomer(params: DeleteCustomer$Params, context?: HttpContext): Observable<void> {
    return this.deleteCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getCustomerByEmail()` */
  static readonly GetCustomerByEmailPath = '/api/customers/findByEmail';

  /**
   * Retrieve customer.
   *
   * Retrieve information about a customer using its email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCustomerByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerByEmail$Response(params: GetCustomerByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return getCustomerByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve customer.
   *
   * Retrieve information about a customer using its email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCustomerByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCustomerByEmail(params: GetCustomerByEmail$Params, context?: HttpContext): Observable<Customer> {
    return this.getCustomerByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `searchCustomers()` */
  static readonly SearchCustomersPath = '/api/customers/search-customers';

  /**
   * Retrieve customers.
   *
   * Get list of customers using its lastname or city.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchCustomers()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCustomers$Response(params: SearchCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
    return searchCustomers(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve customers.
   *
   * Get list of customers using its lastname or city.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchCustomers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchCustomers(params: SearchCustomers$Params, context?: HttpContext): Observable<Array<Customer>> {
    return this.searchCustomers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Customer>>): Array<Customer> => r.body)
    );
  }

}
