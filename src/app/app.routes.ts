import { Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { DriverComponent } from './components/driver/driver.component';
import { DriverSignUpComponent } from './components/driver-sign-up/driver-sign-up.component';
import { CustomerSignUpComponent } from './components/customer-sign-up/customer-sign-up.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'customerSignUp', component: CustomerSignUpComponent},
    { path: 'driver', component: DriverComponent},
    { path: 'driverSignUp', component: DriverSignUpComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
