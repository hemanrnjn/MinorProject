import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DataService} from "./data.service";
import { DoctorExpertComponent } from './doctor-expert/doctor-expert.component';
import { DoctorLocalComponent } from './doctor-local/doctor-local.component';
import {RouterModule, Routes} from "@angular/router";
import {AngularFireModule} from "angularfire2";
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/signup.component";

export const firebaseConfig = {
    apiKey: "AIzaSyBon0iWtmOSx46tq3sMQ-hQfJgIJLOnRGE",
    authDomain: "fir-crud-93bce.firebaseapp.com",
    databaseURL: "https://fir-crud-93bce.firebaseio.com",
    storageBucket: "fir-crud-93bce.appspot.com",
    messagingSenderId: "518157802560"

};

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'local-doctor', component: DoctorLocalComponent, },
  { path: 'expert-doctor', component: DoctorExpertComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorExpertComponent,
    DoctorLocalComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
