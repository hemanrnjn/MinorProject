/**
 * Created by Harshit on 26-03-2017.
 */
import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn,fallIn } from '../router.animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn(),fallIn()],
  host: {'[@moveIn]': ''}
})

export class LoginComponent{
  error: any;
  state: string = '';
  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.router.navigateByUrl('/expert-doctor');
      }
    });
  }




  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.login({
          email: formData.value.email,
          password: formData.value.password
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/expert-doctor']);
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }






}
