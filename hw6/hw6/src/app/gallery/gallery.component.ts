import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    public SelectedPicture: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

  ngOnInit() {
    const SelectedPictureEventlistener = fromEvent(document.querySelector(".galleryGridBlock"), 'click');

    SelectedPictureEventlistener.subscribe(
      (event: any) => {
        if (event.path[0].currentSrc) {
          this.SelectedPicture = event.path[0].currentSrc;
        } else {
          this.SelectedPicture = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"
        }
      })
  }

}
