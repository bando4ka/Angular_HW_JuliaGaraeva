import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{name}}</h1>
  <gallery-component></gallery-component>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallery';
  name = 'Gallery Professional';
}
