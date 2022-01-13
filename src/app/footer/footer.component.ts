import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {GlobalVariableService} from "../GlobalVariableService";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // @ts-ignore
  subscription2: Subscription;
  contrast=false;

  constructor(public globalVariableService: GlobalVariableService) {
  }

  ngOnInit(): void {
    this.subscription2=this.globalVariableService.fixedContrast$
      .subscribe(fixed=>{
        this.contrast=fixed;
      });
  }

}
