import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { fromEvent } from 'rxjs';

@Component({
    selector: 'gallery-component',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
  })

    export class GalleryComponent implements OnInit {
    public SelectedPicture: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

    public arrPictures;
    public urlImg;
    public imageGallary;

    constructor(private service: Service) { }

    closeBigImage() {
      const bigImage = document.getElementsByClassName('selectedPicture');
      if (bigImage) {
        bigImage[0].classList.toggle('disabled');
      }
    }

    like(event: any) {
      event.path[1].lastElementChild.innerText = Number(event.path[1].lastElementChild.innerText)+1;
    }

        ngOnInit(): void {

            this.service.arrayPic.subscribe((val) => {
            this.arrPictures = val;
            console.log(this.arrPictures);
            });


            const SelectedPictureEventlistener = fromEvent(document.querySelector(".galleryGridBlock"), 'click');

            SelectedPictureEventlistener.subscribe(
                (event: any) => {
                  if (event.path[0].currentSrc) {
                    this.SelectedPicture = event.path[0].currentSrc;
                    const bigImage = document.getElementsByClassName('selectedPicture');
                      if (bigImage) {
                        bigImage[0].classList.toggle('disabled');
                      }
                  } else {
                    this.SelectedPicture = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"
                  }
            })
        }
    }
