import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
