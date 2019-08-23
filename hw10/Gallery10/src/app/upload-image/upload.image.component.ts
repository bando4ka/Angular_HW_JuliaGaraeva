import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Service } from '../service';


@Component ({
    selector: 'upload-image-component',
    templateUrl: './upload.image.component.html',
    styleUrls: ['./upload.image.component.scss']
})

export class UploadImageComponent implements OnInit{

    public SelectedPicture: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

    constructor(private service: Service) { }


    public pathPic: any;
    public cardPic = [];
    public date;

    @Output() event = new EventEmitter();

    public file() {
        const file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.pathPic = reader.result;
            console.log(this.pathPic);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    public addImage(): void {
        const objectPic = {
            pathPic: this.pathPic,
            date: this.date
        };
        if(this.pathPic){
            this.cardPic.push(objectPic);
            this.service.Data = this.cardPic;
        }
    }


    ngOnInit(): void {
        this.service.dateImg.subscribe(
            (val) => {
              this.date = val;
            }
          )
    }
}
