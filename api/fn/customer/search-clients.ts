/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Customer } from '../../models/customer';
import { SearchRequest } from '../../models/search-request';

export interface SearchClients$Params {
  filter: SearchRequest;
}

export function searchClients(http: HttpClient, rootUrl: string, params: SearchClients$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Customer>>> {
  const rb = new RequestBuilder(rootUrl, searchClients.PATH, 'get');
  if (params) {
    rb.query('filter', params.filter, {});
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

searchClients.PATH = '/api/customers/search-customers';
