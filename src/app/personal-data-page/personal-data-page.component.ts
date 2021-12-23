import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalVariableService} from "../GlobalVariableService";

interface Map {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-personal-data-page',
  templateUrl: './personal-data-page.component.html',
  styleUrls: ['./personal-data-page.component.scss']
})
export class PersonalDataPageComponent implements OnInit {

// @ts-ignore
  subscription: Subscription;
  maxLetters: number=350;
  aboutYourselfValue = '';
  interestsValue='';
  remainingTextAboutYourself: number= this.maxLetters;
  remainingTextInterests: number= this.maxLetters;



  constructor(public globalVariableService: GlobalVariableService) {
  }
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;


  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });
  }

  aboutYourselfValueChange(value: String) {
    this.remainingTextAboutYourself = this.maxLetters - value.length;
  }
  interestsValueChange(value: String) {
    this.remainingTextInterests = this.maxLetters - value.length;
  }


  phoneNumberTypes: Map[] = [
    {value: 'stacjonarny', viewValue: 'Stacjonarny'},
    {value: 'komorkowy', viewValue: 'Komórkowy'},
    {value: 'sluzbowy', viewValue: 'Służbowy'},
    {value: 'domowy', viewValue: 'Domowy'},
  ];


}
