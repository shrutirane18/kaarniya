import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { RegisternNgoComponent } from './registerngo/registern-ngo.component';
import { RegisterindividualComponent } from './registerindividual/registerindividual.component';
import { RegisterclubComponent } from './registerclub/registerclub.component';
import { SearchngoComponent } from './searchngo/searchngo.component';
import { LandingComponent } from './landing/landing.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { SearchclubComponent } from './searchclub/searchclub.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'registerngo',
    component: RegisternNgoComponent
  },
  {
    path: 'Registerindividual',
    component: RegisterindividualComponent
  },
  {
    path: 'Registerclub',
    component: RegisterclubComponent
  },
  {
    path: 'searchNGO',
    component: SearchngoComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'searchuser',
    component: SearchuserComponent
  },
  {
    path: 'searchclub',
    component: SearchclubComponent
  },
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
