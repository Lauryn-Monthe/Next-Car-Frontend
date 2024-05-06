/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';
import { Status } from '../../models/status';

export interface GetCustomers$Params {

/**
 * Status of the customer
 */
  status?: Status;
}

export function getCustomers(http: HttpClient, rootUrl: string, params?: GetCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
  const rb = new RequestBuilder(rootUrl, getCustomers.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Customer>>;
    })
  );
}

getCustomers.PATH = '/api/customer';
