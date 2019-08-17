import { Component } from '@angular/core'
import { Service } from '../service';

@Component ({
    selector: 'upload-image-component',
    templateUrl: './upload.image.component.html',
    styleUrls: ['./upload.image.component.scss']
})

export class UploadImageComponent{

    public SelectedPicture: string = "https://orbitzen.com/wp-content/uploads/2016/05/the-gallery-logo.jpg"

    constructor(private service: Service) { }

    public urlPic: any;
    public cardPic = [];

    public file() {
        const file = (<HTMLInputElement>document.querySelector('input[type=file]')).files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.urlPic = reader.result;
            console.log(this.urlPic);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    public addImage(): void {

        const objectPic = {
            urlPic: this.urlPic
        };
        this.cardPic.push(objectPic);
        this.service.Data = this.cardPic;
    }
}
