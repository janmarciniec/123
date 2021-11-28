import {Component, ElementRef, HostBinding, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AnnouncementsApp';

  fontSize = 20;
  // @ts-ignore
  @ViewChild('fontChange', { static: true }) fontChange: ElementRef;

  changeFont(operator: string) {
    if((this.fontSize>12 || operator==='+') && (this.fontSize <40 || operator==='-')) {
      operator === '+' ? this.fontSize+=4 : this.fontSize-=4;
      (this.fontChange.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
    }
  }
}
