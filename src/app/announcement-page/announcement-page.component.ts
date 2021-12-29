import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { GlobalVariableService } from "../GlobalVariableService";
import { ActivatedRoute } from '@angular/router';

export interface Announcement {
  id: number;
  title: string;
  image: string;
  location: string;
  map: string;
  date: string;
  price: string;
  seller: string;
  favourite: boolean;
}

@Component({
  selector: 'app-announcement-page',
  templateUrl: './announcement-page.component.html',
  styleUrls: ['./announcement-page.component.scss']
})
export class AnnouncementPageComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;

  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  // @ts-ignore
  public announcementId;
  
  constructor(public globalVariableService: GlobalVariableService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
    .subscribe(fixed => {
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
    });

    let tempId = this.route.snapshot.paramMap.get('id');
    let id = tempId !== null ? parseInt(tempId) : null;
    this.announcementId = id;
  }

  announcements: Announcement[] = [
    {id: 1, title: 'Kanapa narożna kolor szary, duża', image: 'assets/img/announcementImages/image.jpg', location: 'Wrocław', map: 'assets/img/maps/wroclaw.png', date: '19 listopada', price: '950', seller: 'Elżbieta', favourite: false},
    {id: 2, title: 'Fotel w stylu skandynawskim, kolor Magenta', image: 'assets/img/announcementImages/image1.jpg', location: 'Warszawa', map: 'assets/img/maps/warszawa.png', date: '19 listopada', price: '459', seller: 'Maciej', favourite: false},
    {id: 3, title: 'Sofa rozkładana', image: 'assets/img/announcementImages/image2.jpg', location: 'Poznań', map: 'assets/img/maps/poznan.png', date: '18 listopada', price: '550', seller: 'Piotr', favourite: false},
    {id: 4, title: 'Szafa przesuwna 150x200x58 połysk', image: 'assets/img/announcementImages/image3.jpg', location: 'Warszawa', map: 'assets/img/maps/warszawa.png', date: '18 listopada', price: '990', seller: 'Karolina', favourite: false},
    {id: 5, title: 'Stół rozkładany do jadalni 120 - 160 cm', image: 'assets/img/announcementImages/image4.jpg', location: 'Lublin', map: 'assets/img/maps/lublin.png', date: '18 listopada', price: '630', seller: 'Alicja', favourite: false},
    {id: 6, title: 'Krzesła barowe', image: 'assets/img/announcementImages/image5.jpg', location: 'Poznań', map: 'assets/img/maps/poznan.png', date: '17 listopada', price: '450', seller: 'Tomasz', favourite: false},
    {id: 7, title: 'Stół szklany, jak nowy', image: 'assets/img/announcementImages/image6.jpg', location: 'Łódź', map: 'assets/img/maps/lodz.png', date: '17 listopada', price: '250', seller: 'Bartłomiej', favourite: false},
    {id: 8, title: 'Stolik drewniany 60x100cm (jasny dąb)', image: 'assets/img/announcementImages/image7.jpg', location: 'Zamość', map: 'assets/img/maps/zamosc.png', date: '16 listopada', price: '300', seller: 'Aleksandra', favourite: false},
  ];
}
