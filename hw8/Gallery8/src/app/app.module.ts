import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadImageComponent } from './upload-image/upload.image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PicComponent } from './upload-link/pic.component'
import { Service } from './service'

@NgModule({
  declarations: [
    AppComponent,
    UploadImageComponent,
    GalleryComponent,
    PicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ Service ],
  bootstrap: [AppComponent]
})
export class AppModule { }
