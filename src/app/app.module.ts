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

export const firebaseConfig = {
  apiKey: 'AIzaSyBuEVaup2t-DhMnLiVUb2tU_-URp7mZj5Q',
  authDomain: 'fir-crud-73b08.firebaseapp.com',
  databaseURL: 'https://fir-crud-73b08.firebaseio.com',
  storageBucket: 'fir-crud-73b08.appspot.com',
  messagingSenderId: '52520302305'
};

const routes: Routes = [
  { path: 'local-doctor', component: DoctorLocalComponent, },
  { path: 'expert-doctor', component: DoctorExpertComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorExpertComponent,
    DoctorLocalComponent
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
