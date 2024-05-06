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
import { deleteClient } from '../fn/customer/delete-client';
import { DeleteClient$Params } from '../fn/customer/delete-client';
import { getClientByEmail } from '../fn/customer/get-client-by-email';
import { GetClientByEmail$Params } from '../fn/customer/get-client-by-email';
import { getCustomerById } from '../fn/customer/get-customer-by-id';
import { GetCustomerById$Params } from '../fn/customer/get-customer-by-id';
import { getCustomers } from '../fn/customer/get-customers';
import { GetCustomers$Params } from '../fn/customer/get-customers';
import { searchClients } from '../fn/customer/search-clients';
import { SearchClients$Params } from '../fn/customer/search-clients';
import { updateClient } from '../fn/customer/update-client';
import { UpdateClient$Params } from '../fn/customer/update-client';
import { updateClientStatus } from '../fn/customer/update-client-status';
import { UpdateClientStatus$Params } from '../fn/customer/update-client-status';


/**
 * Manage Clients
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

  /** Path part for operation `updateClient()` */
  static readonly UpdateClientPath = '/api/customers/{id}';

  /**
   * Updating a customer's account.
   *
   * Update a customer's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClient()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient$Response(params: UpdateClient$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating a customer's account.
   *
   * Update a customer's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClient$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClient(params: UpdateClient$Params, context?: HttpContext): Observable<void> {
    return this.updateClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `deleteClient()` */
  static readonly DeleteClientPath = '/api/customers/{id}';

  /**
   * Deleting a customer's account.
   *
   * delete a customer's account via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteClient()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClient$Response(params: DeleteClient$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteClient(this.http, this.rootUrl, params, context);
  }

  /**
   * Deleting a customer's account.
   *
   * delete a customer's account via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteClient$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteClient(params: DeleteClient$Params, context?: HttpContext): Observable<void> {
    return this.deleteClient$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getClientByEmail()` */
  static readonly GetClientByEmailPath = '/api/customers/findByEmail';

  /**
   * Retrieve customer.
   *
   * Retrieve information about a customer using its email.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getClientByEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientByEmail$Response(params: GetClientByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
    return getClientByEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve customer.
   *
   * Retrieve information about a customer using its email.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getClientByEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getClientByEmail(params: GetClientByEmail$Params, context?: HttpContext): Observable<Customer> {
    return this.getClientByEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Customer>): Customer => r.body)
    );
  }

  /** Path part for operation `updateClientStatus()` */
  static readonly UpdateClientStatusPath = '/api/customers/{id}/update-status';

  /**
   * Updating a customer's status.
   *
   * Update a customer's status via the API.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateClientStatus()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClientStatus$Response(params: UpdateClientStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updateClientStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * Updating a customer's status.
   *
   * Update a customer's status via the API.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateClientStatus$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateClientStatus(params: UpdateClientStatus$Params, context?: HttpContext): Observable<void> {
    return this.updateClientStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `searchClients()` */
  static readonly SearchClientsPath = '/api/customers/search-customers';

  /**
   * Retrieve customers.
   *
   * Get list of customers using its lastname or city.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchClients()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchClients$Response(params: SearchClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
    return searchClients(this.http, this.rootUrl, params, context);
  }

  /**
   * Retrieve customers.
   *
   * Get list of customers using its lastname or city.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchClients$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchClients(params: SearchClients$Params, context?: HttpContext): Observable<Array<Customer>> {
    return this.searchClients$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Customer>>): Array<Customer> => r.body)
    );
  }

}
