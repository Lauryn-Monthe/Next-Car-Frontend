import { Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
    { path: 'customer', component: CustomerComponent},
    { path: '', redirectTo: '/customer', pathMatch: 'full'}
];
