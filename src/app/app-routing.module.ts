import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PersonalDataPageComponent} from "./personal-data-page/personal-data-page.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {isAuthGuard} from "./isAuthGuard";
import {isNotAuthGuard} from "./isNotAuthGuard"
import {CategoryPageComponent} from "./category-page/category-page.component";
import {AnnouncementPageComponent} from "./announcement-page/announcement-page.component";
import {SavedPageComponent} from "./saved-page/saved-page.component";

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [isNotAuthGuard]},
  { path: 'login', component: LoginComponent, canActivate: [isNotAuthGuard]},
  { path: 'personal-data', component: PersonalDataPageComponent, canActivate: [isAuthGuard]},
  { path: '', component: MainPageComponent },
  { path: 'category', component: CategoryPageComponent },
  { path: 'announcement/:id', component: AnnouncementPageComponent },
  { path: 'saved', component: SavedPageComponent, canActivate: [isAuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [isAuthGuard, isNotAuthGuard]
})
export class AppRoutingModule { }
