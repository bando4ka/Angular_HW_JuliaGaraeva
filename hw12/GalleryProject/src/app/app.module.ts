import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload.image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PicComponent } from './upload-link/pic.component';
import { Service } from './service';
import { DateComponent } from './date.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    GalleryComponent,
    PicComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
