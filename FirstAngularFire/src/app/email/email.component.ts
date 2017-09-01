import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})

export class EmailComponent implements OnInit {

  error : any;

  constructor(public afAuth: AngularFireAuth,private router: Router) { }
  
    ///When the user finishes to input his credentials for signing in
    onSubmit(formData) {
      if(formData.valid) {
        
        this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
          (success) => {
          this.router.navigate(['/members']);
        }).catch(
          (err) => {
          this.error = err;
        });
      }
    }

  ngOnInit() {
  }

}
