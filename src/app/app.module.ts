import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {environment } from '../environments/environment';
import {SigninComponent } from './signin/signin.component';
import { RegisternNgoComponent } from './registerngo/registern-ngo.component';
import { MatSelectModule } from '@angular/material/select';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterindividualComponent } from './registerindividual/registerindividual.component';
import { RegisterclubComponent } from './registerclub/registerclub.component';
import { SearchngoComponent } from './searchngo/searchngo.component';
import { LandingComponent } from './landing/landing.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { SearchclubComponent } from './searchclub/searchclub.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    RegisternNgoComponent,
    RegisterindividualComponent,
    RegisterclubComponent,
    SearchngoComponent,
    LandingComponent,
    SearchuserComponent,
    SearchclubComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    MatSelectModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
