import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "./dialog/dialog.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class SecurityService{

  constructor(public dialog: MatDialog, private router:Router, private translator: TranslateService) {
  }

  private isAuth = new BehaviorSubject<boolean>(localStorage.getItem("username")!=null); // false is your initial value
  isAuth$ = this.isAuth.asObservable();

  public set setIsAuth(value: boolean) {
    this.isAuth.next(value);
  }

  getIsAuth$():Observable<boolean> {
    console.error("getIsAuth: "+this.isAuth.getValue());
    return this.isAuth$;
  }

  getIsAuth():boolean {
    return this.isAuth.getValue();
  }


  signIn = (email: string, password: string) => this.signInWithEmailAndPassword(email, password);

  signUp = (email: string, password: string)=>{
    console.log(email+" "+password);
    this.openDialog(this.translator.instant("Rejestracja"), this.translator.instant("Zostałeś zarejestrowany!"), "/");
    localStorage.setItem(email, password);
  }

  signInWithEmailAndPassword = (email: string, password: string) =>{

    if(localStorage.getItem(email)!=null && localStorage.getItem(email)==password){
      this.setIsAuth=true;
      this.openDialog(this.translator.instant("Logowanie"), this.translator.instant("Zostałeś zalogowany!"), "/");
      localStorage.setItem("username",email);
    } else {
      this.openDialog(this.translator.instant("Logowanie"), this.translator.instant("Zły email lub hasło"), "/login");
    }

  }

  logout = () => {
    localStorage.removeItem("username")
    this.setIsAuth=false;
    this.openDialog(this.translator.instant("Wylogowanie"), this.translator.instant("Zostałeś pomyślnie wylogowany"), "/login");
    };

    openDialog(title: String, message: String, redirectPath: String) {
      const dialogRef = this.dialog.open(DialogComponent, {
        data: {
          title: title,
          message: message,
        }}
      );

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate([redirectPath]);
      });
    }

}

export interface DialogData {
  title: String,
  message: String
}
