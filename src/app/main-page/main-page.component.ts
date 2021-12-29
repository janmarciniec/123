import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {AppComponent} from "../app.component";
import { Output, EventEmitter } from '@angular/core';
import {GlobalVariableService} from "../GlobalVariableService";
import {Subscription} from "rxjs";

interface Map {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;
  selectedLocation = 'poland';

  constructor(public globalVariableService: GlobalVariableService) {
  }
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;
  // @ts-ignore
  @ViewChild('fontChange2', { static: true }) fontChange2: ElementRef;


  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
        (this.fontChange2.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
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

 // fontSize = 20;
/*
  changeFont(operator: string){
    if((this.fontSize>12 || operator==='+') && (this.fontSize <40 || operator==='-')) {
      operator === '+' ? this.fontSize+=4 : this.fontSize-=4;
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
      console.log(operator);
    }
  }
*/
}
