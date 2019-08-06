import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-selected-picture',
  templateUrl: './selected.picture.component.html',
  styleUrls: ['./selected.picture.component.scss']
})

export class SelectedPictureComponent implements OnInit {
  public urlImgClick: string = '';

  ngOnInit() {
    const imgEventlistener = fromEvent(document.querySelector('.gridBlock'), 'click');
    imgEventlistener.subscribe(
      (event: any) => {
        this.urlImgClick = event.path[0].currentSrc;
      })
  }

}
