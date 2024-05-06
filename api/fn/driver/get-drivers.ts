/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Driver } from '../../models/driver';
import { Status } from '../../models/status';

export interface GetDrivers$Params {

/**
 * Status of the driver
 */
  status?: Status;
}

export function getDrivers(http: HttpClient, rootUrl: string, params?: GetDrivers$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Driver>>> {
  const rb = new RequestBuilder(rootUrl, getDrivers.PATH, 'get');
  if (params) {
    rb.query('status', params.status, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Driver>>;
    })
  );
}

getDrivers.PATH = '/api/drivers';
