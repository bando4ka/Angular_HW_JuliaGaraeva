import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{name}}</h1>
  <gallery-component (onClicked)="onClicked($event)"></gallery-component>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallery';
  name = 'Gallery Professional';

  public someClick:number = 0;
  onClicked(clickOn:any){
    if(clickOn==true) this.someClick++;
    if(this.someClick === 4) {
      alert('The button was clicked 4 times (Var.2)');
      this.someClick = 0;
    }
}
}
