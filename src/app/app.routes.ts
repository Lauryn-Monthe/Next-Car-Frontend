import { Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { DriverComponent } from './components/driver/driver.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'customer', component: CustomerComponent},
    { path: 'driver', component: DriverComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
