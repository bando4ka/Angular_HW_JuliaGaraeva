import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MorseCodePipe } from './morse.pipe';
import { ClockComponent } from './clock-component/clock.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    MorseCodePipe,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
