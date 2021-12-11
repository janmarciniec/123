import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalVariableService} from "../GlobalVariableService";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;

  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  constructor(public globalVariableService: GlobalVariableService) {
  }

  ngOnInit(): void {
    this.subscription = this.globalVariableService.fixedFontSize$
      .subscribe(fixed => {
        (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${fixed}px`;
      });
  }

}
