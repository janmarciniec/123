import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent} from "./app.component";
import { RegisterComponent} from "./register/register.component";
import { MainPageComponent} from "./main-page/main-page.component";
import { Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
