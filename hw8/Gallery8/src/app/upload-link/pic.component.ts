import { Component, Input, Output, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

export class Picture{
    constructor(public title: string
)
    { }
}
@Component({
  selector: 'pic-component',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']

})
export class PicComponent implements OnInit {
    public SelectedPicture3: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

@Input()

@Output()

picture: Picture = new Picture('');
    pictures: Picture[] = [];

    addPicture(){
        this.pictures.push(new Picture(this.picture.title,));
    }

    ngOnInit(): void {
         const SelectedPictureEventlistener3 = fromEvent(document.querySelector(".galleryGridBlock3"), 'click');

      SelectedPictureEventlistener3.subscribe(
        (event: any) => {
          if (event.path[0].currentSrc) {
            this.SelectedPicture3 = event.path[0].currentSrc;
          } else {
            this.SelectedPicture3 = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"
          }
        })

    }

}
