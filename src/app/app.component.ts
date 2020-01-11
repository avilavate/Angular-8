import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:'<div><h4>ACME Product Managment</h4><pm-poducts></pm-poducts></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 pageTitle:string='APM Product Managment';
}
