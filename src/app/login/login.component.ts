import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalVariableService} from "../GlobalVariableService";
import {SecurityService} from "../SecurityService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;

  // @ts-ignore
  subscription2: Subscription;
  contrast=false;

  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  constructor(public globalVariableService: GlobalVariableService,public securityService: SecurityService) {
  }

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
}
