import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalVariableService} from "../GlobalVariableService";
import {NgForm} from "@angular/forms";

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
  maxDate: Date = new Date();
  minDate: Date = new Date(1900,0,1);
 // remainingTextAboutYourself: number= this.maxLetters;
 // remainingTextInterests: number= this.maxLetters;


  // @ts-ignore
  subscription2: Subscription;
  contrast=false;



  constructor(public globalVariableService: GlobalVariableService) {
  }
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;
  // @ts-ignore
  @ViewChild('image', { static: true }) image: SVGImageElement;
  // @ts-ignore
  @ViewChild('registerForm', { static: true }) registerForm: NgForm;

  phoneNumberTypes: Map[] = [
    {value: 'stacjonarny', viewValue: 'Stacjonarny'},
    {value: 'komorkowy', viewValue: 'Komórkowy'},
    {value: 'sluzbowy', viewValue: 'Służbowy'},
    {value: 'domowy', viewValue: 'Domowy'},
  ];

  msg: String='';
  url: any=null;

  user = {email: '', password: '', username: '', image: this.url, repeatedPassword: '', phoneNumber: '',
    phoneNumberType: '', location: '', wwwAddress: '', date: '', gender: '', showGender: false,
    age: '', showBirthDate: false, newsletter: false, notifications: false, aboutMe: '', interests: ''};

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
/*
  aboutYourselfValueChange(value: String) {
    this.remainingTextAboutYourself = this.maxLetters - value.length;
  }
  interestsValueChange(value: String) {
    this.remainingTextInterests = this.maxLetters - value.length;
  }
  */



//selectFile(event) { //Angular 8
  selectFile(event: any) { //Angular 11, for stricter type
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "<b>Only images</b> are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      if (reader.result != null) {
      this.image.textContent=this.url;
      console.log(reader.result);
    }

    }
  }

  deleteImage(){
    this.url='';
  }

  onRadioGenderChange(event: any){
  //  if(event.target.value)
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
}
