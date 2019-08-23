import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './component/counter.component';
import { IncrementComponent } from './component/increment.component';
import { DecrementComponent } from './component/decrement.component';
import { ResetCountComponent } from './component/resetCount.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncrementComponent,
    DecrementComponent,
    ResetCountComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
