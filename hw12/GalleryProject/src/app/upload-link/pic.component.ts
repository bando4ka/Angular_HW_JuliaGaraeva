import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Service } from '../service'

@Component({
  selector: 'pic-component',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss']

})
export class PicComponent implements OnInit {

    public SelectedPicture3: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

    constructor(private service: Service) { }

  public pictures = [];
  public url;
  public date;
  public imageGallary;

  @Output() event = new EventEmitter();

    addPicture(){
        if (this.url.includes('http')) {
          this.pictures.push({ url: this.url, date: this.date });
          this.url = '';
          this.event.emit(this.pictures);
        } else {
          this.url = '';
        }
      }

      like(event: any) {
        event.path[1].lastElementChild.innerText = Number(event.path[1].lastElementChild.innerText)+1;
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

        this.service.dateImg.subscribe(
          (val) => {
            this.date = val;
          }
        )
    }
}
