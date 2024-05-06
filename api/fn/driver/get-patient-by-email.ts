/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';

export interface GetPatientByEmail$Params {

/**
 * Email of the driver
 */
  email: string;
}

export function getPatientByEmail(http: HttpClient, rootUrl: string, params: GetPatientByEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Customer>> {
  const rb = new RequestBuilder(rootUrl, getPatientByEmail.PATH, 'get');
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

getPatientByEmail.PATH = '/api/drivers/findByEmail';
