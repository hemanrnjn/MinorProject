import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {FirebaseListObservable, FirebaseObjectObservable, AngularFire,AuthProviders, AuthMethods} from 'angularfire2';
import { moveIn, fallIn, moveInLeft } from '../router.animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-expert',
  templateUrl: './doctor-expert.component.html',
  styleUrls: ['./doctor-expert.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class DoctorExpertComponent /*implements OnInit*/ {
  name:any;
  public items: FirebaseObjectObservable<any>;
  /*items: any[] = [];*/


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor(public af: AngularFire,private router: Router,private dataService: DataService) {
    this.items = this.dataService.messages;
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

}
