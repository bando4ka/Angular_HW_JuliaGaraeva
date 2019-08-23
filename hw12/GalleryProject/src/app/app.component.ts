import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title: string = "Gallery - Homework #10"
  public srcHeaderImg: string = "assets/images/header-gallery.png"

  ngOnInit(): void {}
}
