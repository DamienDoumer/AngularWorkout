import { Component, OnInit, HostBinding } from '@angular/core';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'; 
import { Router } from '@angular/router';

import { moveIn } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: { '[@moveIn]': ''}
})


export class LoginComponent implements OnInit {

  user: Observable<firebase.User>;
  error : any;

  //constructs the LoginComponent
  constructor(public afAuth: AngularFireAuth,private router: Router) {

      this.user = afAuth.authState;
  }

  //Facebook login 
  loginFb() {

    this.afAuth.auth.signInWithPopup(new firebase.auth.
      FacebookAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  //Google Login
  loginGoogle() {

    this.afAuth.auth.signInWithPopup(new firebase.auth.
      GoogleAuthProvider()).then(
        (success) => {
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        this.error = err;
      })
  }

  ngOnInit() 
  {
    //If the user is current login, 
    //redirect him to the members page.
    this.user.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members');
      }
    })
  }

}

