import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
    this.ngOnInit();
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed in!');
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
      });
    this.ngOnInit();
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut();
  }

  ngOnInit() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (!user) this.router.navigate(['']);
      else this.router.navigate(['about-app']);
    });
  }
}
