import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent } from 'rxjs'

@Component({
  selector: 'gallery-component',
  template: `
<img src='https://fbcoverstreet.com/content/dNXkv4SeuOPlmTP3RPEsBOvT6zKlFFuJC4lQr7RVXPOwA6vSuWg8jOqOaEn6tpYp.jpg' width="100%" height="130"/>
<article>
<h1 style="color:#4169E0">Фото-центр "Professional"</h1>
<img width="500" src='https://realybiz.ru/wp-content/uploads/2014/11/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BD%D0%B0-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D1%81%D0%B2%D0%BE%D0%B5%D0%B9-%D1%84%D0%BE%D1%82%D0%BE%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B7%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0.png'/>
<p>Добро пожаловать на официальный веб-сайт фотоателье "Professional". Профессиональный фотограф - студийная, портретная, семейная, предметная фотография. Фото на паспорт, ВИЗУ и другие документы всех возможных форматов. Услуги редактирования изображения (реставрация, ретушь) и любого другого текстового документа (набор текста, исправление). Распечатка фотографий любого формата до А0. Сканирование, копирование документов, а также ламинация до формата А3 (30см на 40см.) Разработка персонального дизайна, фирменного знака для визиток, сайта.</p>
<p>У нас на сайте вы сможете узнать все, что может заинтересовать вас в фотографии, как художника в картинах. Секреты настройки света и профессиональные уроки съёмки, цифровой обработки изображений. Также вы можете посмотреть портфолио - личные работы и проекты.</p>
<h2>Преимущества нашего фотосалона</h2>
<ul>
<li>Фото на все виды документов</li>
<li>Ретушь изображений</li>
<li>Высокое качество печати</li>
<li>Печать любого формата</li>
<li>Максимально быстро</li>
</ul>
<h2>Наши работы</h2>
<img width="500" src='https://rusb.atservers.net:8443/sitebuilder/sites/53/53274a876a52647b76ad2956c95b53d2/attachments/Image/Hudozhestvennaya-fotografiya.jpg?1550138093271'/><br/>
<img width="500" src='http://www.fototet.ru/attachments/Image/Hudozhestvennaya-fotografiya-Detskiy-kollazh_1.jpg?template=generic'/><br/>
<img width="500" src='http://www.fototet.ru/attachments/Image/Raskrashivanie.jpg?template=generic'/><br/>

</article>
<p>
<button type='button' id='btn'>Click me (Var.1)</button>
</p>
<p>
<button type='button' (click)="clicked(true)">Click me too (Var.2)</button>
</p>
  `

})
export class GalleryComponent implements OnInit {
  title = 'Gallery';
  constructor() {}
  public someClick:number = 0;
public ngOnInit(): void {
  const elementBtn = document.getElementById('btn');
  const clickMouse = fromEvent(elementBtn, 'click');
  clickMouse.subscribe((e: MouseEvent) => {
      this.someClick++;
      if(this.someClick === 4) {
        alert('The button was clicked 4 times (Var.1)');
        this.someClick = 0;
      }
  });
  }

  @Output()
  onClicked = new EventEmitter<boolean>();
  clicked(clickOn:any) {
      this.onClicked.emit(clickOn);
  }
}
