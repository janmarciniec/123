import {Component, Inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(@Inject(AppComponent) private parent: AppComponent) { }


  getParrent():AppComponent{
    return this.parent;
  }

  ngOnInit(): void {
  }

}
