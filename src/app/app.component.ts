import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, RouterLink, CustomerComponent]
})
export class AppComponent {
  title = 'NextCar-Frontend';
}
