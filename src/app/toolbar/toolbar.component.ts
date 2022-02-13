import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalVariableService} from "../GlobalVariableService";
import {Subscription} from "rxjs";
import {SecurityService} from "../SecurityService";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
   //constructor(@Inject(AppComponent) private parent: AppComponent) { }
  constructor(public globalVariableService: GlobalVariableService, public securityService: SecurityService){}

  fontSize: number=14;

  // @ts-ignore
  lang: string;

  isAuth: boolean =false;

  contrast: boolean=false;

  // @ts-ignore
  subscription: Subscription;
  // @ts-ignore
  subscription2: Subscription;
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        this.fontSize=fixed;
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });
    this.subscription2=this.globalVariableService.fixedContrast$
      .subscribe(fixed=>{
        this.contrast=fixed;
      });
    this.securityService.isAuth$.subscribe(sub => {
      console.log(sub);
      this.isAuth=sub;
    })

      this.lang = localStorage.getItem('lang') || 'pl';

  }

  changeLang(lang:string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  changeContrast(){
    if(localStorage.getItem('contrast')=="true")
      localStorage.setItem('contrast','false');
    else
      localStorage.setItem('contrast','true');
  }

}
