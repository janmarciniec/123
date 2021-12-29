import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { CategoryGridComponent } from './category-grid/category-grid.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GlobalVariableService } from './GlobalVariableService'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import { PersonalDataPageComponent } from './personal-data-page/personal-data-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CategoryPageComponent } from './category-page/category-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnnouncementPageComponent } from './announcement-page/announcement-page.component';
import { SavedPageComponent } from './saved-page/saved-page.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'category', component: CategoryPageComponent },
  { path: 'announcement/:id', component: AnnouncementPageComponent },
  { path: 'saved', component: SavedPageComponent }
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CategoryGridComponent,
    FooterComponent,
    RegisterComponent,
    MainPageComponent,
    LoginComponent,
    PersonalDataPageComponent,
    CategoryPageComponent,
    SubcategoriesComponent,
    AnnouncementPageComponent,
    SavedPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDividerModule,
    NgbModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [GlobalVariableService,
    MatNativeDateModule, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
