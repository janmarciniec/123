import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalVariableService} from "../GlobalVariableService";
import {Router} from '@angular/router';

interface Map {
  value: string;
  viewValue: string;
}

export interface Announcement {
  id: number;
  title: string;
  image: string;
  location: string;
  date: string;
  price: string;
  favourite: boolean;
}

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})

export class CategoryPageComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;
  // @ts-ignore
  subscription2: Subscription;
  contrast=false;

  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  selectedCategory = 'homeAndGarden';
  selectedLocation = 'poland';
  selectedSortBy = 'newest';
  itemsPerPage: number = 5;
  page: number = 1;

  constructor(public globalVariableService: GlobalVariableService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });

    this.subscription2=this.globalVariableService.fixedContrast$
      .subscribe(fixed=>{
        this.contrast=fixed;
      });
  }

  redirect(pageName: string) {
    this.router.navigate(['/' + pageName]);
  }

  onSelect(announcement: Announcement) {
    this.router.navigate(['/announcement', announcement.id]);
  }

  categories: Map[] = [
    { value: 'homeAndGarden', viewValue: 'Dom i ogród' },
    { value: 'electronics', viewValue: 'Elektronika' },
    { value: 'antiquesAndCollections', viewValue: 'Antyki i kolekcje' },
    { value: 'forBaby', viewValue: 'Dla dziecka' },
    { value: 'realEstate', viewValue: 'Nieruchomości' },
    { value: 'services', viewValue: 'Usługi' },
    { value: 'musicAndEntertainment', viewValue: 'Muzyka i rozrywka' },
    { value: 'boatsAndWaterVehicles', viewValue: 'Łodzie i pojazdy wodne' },
    { value: 'lookingForJob', viewValue: 'Szukający zatrudnienia' },
    { value: 'automotive', viewValue: 'Motoryzacja' },
    { value: 'community', viewValue: 'Społeczność' },
    { value: 'sportAndFitness', viewValue: 'Sport i fitness' },
    { value: 'healthAndBeauty', viewValue: 'Zdrowie i uroda' },
    { value: 'pets', viewValue: 'Zwierzaki' },
    { value: 'fashion', viewValue: 'Moda' },
    { value: 'jobOffers', viewValue: 'Oferty pracy' },
    { value: 'exchange', viewValue: 'Wymiana/zamiana' },
    { value: 'donate', viewValue: 'Oddam za darmo' }
  ];

  locations: Map[] = [
    {value: 'poland', viewValue: 'Polska'},
    {value: 'dolnoslaskie', viewValue: 'dolnośląskie'},
    {value: 'kujawsko-pomorskie', viewValue: 'kujawsko-pomorskie'},
    {value: 'lubelskie', viewValue: 'lubelskie'},
    {value: 'lubuskie', viewValue: 'lubuskie'},
    {value: 'lodzkie', viewValue: 'łódzkie'},
    {value: 'malopolskie', viewValue: 'małopolskie'},
    {value: 'mazowieckie', viewValue: 'mazowieckie'},
    {value: 'opolskie', viewValue: 'opolskie'},
    {value: 'podkarpackie', viewValue: 'podkarpackie'},
    {value: 'podlaskie', viewValue: 'podlaskie'},
    {value: 'pomorskie', viewValue: 'pomorskie'},
    {value: 'slaskie', viewValue: 'śląskie'},
    {value: 'swietokrzyskie', viewValue: 'świętokrzyskie'},
    {value: 'warminsko-mazurskie', viewValue: 'warmińsko-mazurskie'},
    {value: 'wielkopolskie', viewValue: 'wielkopolskie'},
    {value: 'zachodniopomorskie', viewValue: 'zachodniopomorskie'}
  ];

  types: Map[] = [
    {value: 'sell', viewValue: 'Sprzedaż'},
    {value: 'free', viewValue: 'Za darmo'},
    {value: 'contact', viewValue: 'Proszę o kontakt'},
    {value: 'trade', viewValue: 'Wymiana/zamiana'}
  ];

  announcements: Announcement[] = [
    {id: 1, title: 'Kanapa narożna kolor szary, duża', image: 'assets/img/announcementImages/image.jpg', location: 'Wrocław', date: '19 listopada', price: '950', favourite: false},
    {id: 2, title: 'Fotel w stylu skandynawskim, kolor Magenta', image: 'assets/img/announcementImages/image1.jpg', location: 'Warszawa', date: '19 listopada', price: '459', favourite: false},
    {id: 3, title: 'Sofa rozkładana', image: 'assets/img/announcementImages/image2.jpg', location: 'Poznań', date: '18 listopada', price: '550', favourite: false},
    {id: 4, title: 'Szafa przesuwna 150x200x58 połysk', image: 'assets/img/announcementImages/image3.jpg', location: 'Warszawa', date: '18 listopada', price: '990', favourite: false},
    {id: 5, title: 'Stół rozkładany do jadalni 120 - 160 cm', image: 'assets/img/announcementImages/image4.jpg', location: 'Lublin', date: '18 listopada', price: '630', favourite: false},
    {id: 6, title: 'Krzesła barowe', image: 'assets/img/announcementImages/image5.jpg', location: 'Poznań', date: '17 listopada', price: '450', favourite: false},
    {id: 7, title: 'Stół szklany, jak nowy', image: 'assets/img/announcementImages/image6.jpg', location: 'Łódź', date: '17 listopada', price: '250', favourite: false},
    {id: 8, title: 'Stolik drewniany 60x100cm (jasny dąb)', image: 'assets/img/announcementImages/image7.jpg', location: 'Zamość', date: '16 listopada', price: '300', favourite: false},
  ];

}
