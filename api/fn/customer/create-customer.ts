/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CustomerId } from '../../models/customer-id';
import { CustomerRequest } from '../../models/customer-request';

export interface CreateCustomer$Params {
      body: CustomerRequest
}

export function createCustomer(http: HttpClient, rootUrl: string, params: CreateCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<CustomerId>> {
  const rb = new RequestBuilder(rootUrl, createCustomer.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CustomerId>;
    })
  );
}

createCustomer.PATH = '/api/customer';
