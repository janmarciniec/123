import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable()
export class GlobalVariableService {
  public fontSize:number = 14;
//  public data: Observable<number>;

  public contrast:boolean=false;

  private fixedContrast = new BehaviorSubject<boolean>(false); // false is your initial value
  fixedContrast$ = this.fixedContrast.asObservable();

  private set isContrastFixed(value: boolean) {
    this.fixedContrast.next(value);
  }

  getContrast(): Observable<boolean>{
    return of(this.contrast);
  }

  public changeContrast() {
    this.isContrastFixed=!this.contrast;
    this.contrast=!this.contrast;
  }


  private fixedFontSize = new BehaviorSubject<number>(14); // 14 is your initial value
  fixedFontSize$ = this.fixedFontSize.asObservable();

  private set isFixed(value: number) {
    this.fixedFontSize.next(value);
    console.log('isFixed changed', value);
  }

  private get isFixed():number {
    return this.fixedFontSize.getValue();
  }


  getFontSize(): Observable<number>{
    return of(this.fontSize);
  }

  public changeFontSize(operator: String) {
    if ((this.fontSize > 12 || operator === '+') && (this.fontSize < 40 || operator === '-')) {
      operator === '+' ? this.fontSize += 4 : this.fontSize -= 4;
    }
    this.isFixed=this.fontSize;
  }
}
