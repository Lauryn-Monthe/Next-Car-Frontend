/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface GetClientByEmail$Params {

/**
 * Email of the customer
 */
  email: string;
}

export function getClientByEmail(http: HttpClient, rootUrl: string, params: GetClientByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
  const rb = new RequestBuilder(rootUrl, getClientByEmail.PATH, 'get');
  if (params) {
    rb.query('email', params.email, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Customer>;
    })
  );
}

getClientByEmail.PATH = '/api/customers/findByEmail';
