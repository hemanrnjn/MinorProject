import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-doctor-local',
  templateUrl: './doctor-local.component.html',
  styleUrls: ['./doctor-local.component.css']
})
export class DoctorLocalComponent implements OnInit {
  myvalue: string = null;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(username){
    this.myvalue = '';
    this.dataService.sendData(username);
  }
}
