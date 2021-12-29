import {Component, ElementRef, Inject, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AppComponent} from "../app.component";
import {MainPageComponent} from "../main-page/main-page.component";
import { Output, EventEmitter } from '@angular/core';
import { GlobalVariableService} from "../GlobalVariableService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
   //constructor(@Inject(AppComponent) private parent: AppComponent) { }
  constructor(public globalVariableService: GlobalVariableService){}

  fontSize: number=14;

  // @ts-ignore
  lang: string;

  // @ts-ignore
  subscription: Subscription;
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        this.fontSize=fixed;
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });

      this.lang = localStorage.getItem('lang') || 'pl';
  }

  changeLang(lang:string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

}
