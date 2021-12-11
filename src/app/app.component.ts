import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {GlobalVariableService} from "./GlobalVariableService";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'AnnouncementsApp';


  fontSize = 20;
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

 // fsSubject = new Subject<number>();

  constructor(public globalVariableService: GlobalVariableService) {
 /*   this.fsSubject.subscribe((value:any) => {
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${value}px`;
    })*/
  }
/*
  // @ts-ignore
  fsChanged(operator: string) {
    if((this.fontSize>12 || operator==='+') && (this.fontSize <40 || operator==='-')) {
      operator === '+' ? this.fontSize+=4 : this.fontSize-=4;
    }
    this.fsSubject.next(this.fontSize);
  }
*/

/*
  changeFont(){
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.globalVariableService.fontSize}px`;
    }

this.globalVariableService.changeFontSize(operator);
*/
  changeFont(operator: string){
    this.globalVariableService.changeFontSize(operator);
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.globalVariableService}px`;
      console.log(this.globalVariableService.fontSize);
  }
  /*
  changeFont(operator: string){
    if((this.fontSize>12 || operator==='+') && (this.fontSize <40 || operator==='-')) {
      operator === '+' ? this.fontSize+=4 : this.fontSize-=4;
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
      console.log(operator);

    }
  }*/
}
