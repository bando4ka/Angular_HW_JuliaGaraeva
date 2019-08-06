import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <img src={{srcHeaderImg}} alt="img">
  </div>
  <div class="container">
    <h1>Homework #6 - Gallery</h1>
    <h3>#1 Create the gallery component where the URL of the picture will appear in input.</h3>
    <div class="inputImgUrl">
      <input type='text' [(ngModel)]='srcImg'/>
    </div>
    <div class="picture">
      <img src={{srcImg}} alt="img">
    </div>
    <app-selected-picture></app-selected-picture>
    <app-gallary></app-gallary>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public srcHeaderImg: string = "https://public-media.si-cdn.com/filer/f3/4d/f34dcd19-90f4-4cea-8f37-94e2baa28bcb/norway-travel-hub-banner-new.jpg"

  public srcImg: string = "https://www.fjords.com/wp-content/uploads/2018/12/DSC_6281-2000x1200.jpg"
}
