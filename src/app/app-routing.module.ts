import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { GamesComponent } from './games/games.component';
import { GamesdetailsComponent } from './gamesdetails/gamesdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { SortbyComponent } from './sortby/sortby.component';

const routes: Routes = [
  {path : '', redirectTo:'register',pathMatch:'full'},
  {path : 'home', component:HomeComponent, canActivate:[AuthGuard]},  
  {path : 'all', component:AllComponent, canActivate:[AuthGuard]},
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'games', component:GamesComponent, canActivate:[AuthGuard], children:[
    {path : 'platform/:name', component:PlatformsComponent, canActivate:[AuthGuard]},
    {path : 'sort-by/:name', component:SortbyComponent, canActivate:[AuthGuard]},
    {path : 'categories/:name', component:CategoriesComponent, canActivate:[AuthGuard]}
  ]},
  {path : 'gamesDetails/:id', component:GamesdetailsComponent, canActivate:[AuthGuard]},
  {path : '**', component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
