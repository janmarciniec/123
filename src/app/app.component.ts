import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';

interface Map {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AnnouncementsApp';

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


  fontSize = 20;
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  changeFont(operator: string) {
    if((this.fontSize>12 || operator==='+') && (this.fontSize <40 || operator==='-')) {
      operator === '+' ? this.fontSize+=4 : this.fontSize-=4;
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
    }
  }
}
