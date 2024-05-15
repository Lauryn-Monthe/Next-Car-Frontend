import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppState } from '../../state/appState';
import { Store, select } from '@ngrx/store';
import { CountryActions } from '../../state/actions/login-page.actions';
import { getCountryList, getIsLoaded } from '../../state/selectors/login-page.selector';
import { Observable } from 'rxjs';
import { Country } from '../../model/country';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.dispatch(CountryActions.fetchCountries());
  }

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

}
