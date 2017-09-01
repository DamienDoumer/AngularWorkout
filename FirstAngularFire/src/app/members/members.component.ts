import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})

export class MembersComponent implements OnInit {

  name: any;
  observableUser: Observable<firebase.User>;
  user: firebase.User;

  constructor(public afAuth: AngularFireAuth,private router: Router) {

    this.observableUser = afAuth.authState;

  }

  logout() { 
     this.afAuth.auth.signOut();
     this.router.navigateByUrl('/login');
  }


  ngOnInit() {
    
    ///==========NB===NB==NB
    ///To get the user hidden in an observable user, do:
    this.observableUser.subscribe(user => this.user = user);
  
  }

}
