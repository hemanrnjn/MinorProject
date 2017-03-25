import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class DataService {
  public messages: FirebaseObjectObservable<any>;

  constructor(private http: Http, public af: AngularFire) {
    this.messages = this.af.database.object('data');
  }


  sendData(value) {
    const message = {
      message: value
    };
    this.messages.set(message);
  }
}
