import { Component } from '@angular/core';
import { nextTick } from 'q';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
      public title = 'HOMEWORK #7';
      public text: string;
  }
