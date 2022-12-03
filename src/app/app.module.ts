import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { GamesdetailsComponent } from './gamesdetails/gamesdetails.component';
import { AllComponent } from './all/all.component';
import { RecomendedPipe } from './recomended.pipe';
import { LablePipe } from './lable.pipe';
import { AboutPipe } from './about.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { PlatformsComponent } from './platforms/platforms.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    HomeComponent,
    GamesComponent,
    GamesdetailsComponent,
    AllComponent,
    RecomendedPipe,
    LablePipe,
    AboutPipe,
    PlatformsComponent,
    SortbyComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
