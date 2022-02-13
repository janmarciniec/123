import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalVariableService} from "../GlobalVariableService";
import {Subscription} from "rxjs";
import {NgForm} from "@angular/forms";
import {Router} from '@angular/router';
import {SecurityService} from "../SecurityService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  exportAs: 'ngForm'
})

export class RegisterComponent implements OnInit {

  // @ts-ignore
  subscription: Subscription;
  user = {email: '', password: '', repeatedPassword: '', termsAccepted: false};

  // @ts-ignore
  subscription2: Subscription;
  contrast=false;

  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  // @ts-ignore
  @ViewChild('registerForm', { static: true }) registerForm: NgForm;

  constructor(public globalVariableService: GlobalVariableService, private router: Router, private securityService: SecurityService) {
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



  onSubmit(){
    if (this.registerForm.invalid) {
      Object.keys(this.registerForm.controls).forEach(key => {
        this.registerForm.controls[key].markAsDirty();
      });
      return;
    }
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value)
    console.log(this.registerForm.value.email)
    if(this.registerForm.valid){
      this.securityService.signUp(this.user.email, this.user.password)
    //  this.router.navigate(["/login"]);
    }
  }



}
