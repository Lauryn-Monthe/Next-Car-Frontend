import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpclient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Contentt-type': 'application/json',
      'X-CSCAPI-KEY': 'MGZMRlZLbkZ0SmNiOGkxQzBlREFLYjBKdlZZU1BnRmlRbGI3N2lvVg=='
    })
  }

  getCountry(): Observable<Country[]> {
    return this.httpclient.get<Country[]>('https://api.countrystatecity.in/v1/countries',
           {headers: this.httpOptions.headers})
  }
}
