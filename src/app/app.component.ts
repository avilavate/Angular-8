import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:'<pm-poducts></pm-poducts>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pageTitle:string='APM Product Managment';
}
