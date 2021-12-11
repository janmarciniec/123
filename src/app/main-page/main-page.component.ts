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
    {value: 'realEstate', viewValue: 'Nieruchomości'},
    {value: 'homeAndGarden', viewValue: 'Dom i ogród'},
    {value: 'musicAndEntertainment', viewValue: 'Muzyka i rozrywka'},
  ];

  locations: Map[] = [
    {value: 'poland', viewValue: 'Polska'},
    {value: 'lubelskie', viewValue: 'lubelskie'},
    {value: 'podlaskie', viewValue: 'podlaskie'},
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
