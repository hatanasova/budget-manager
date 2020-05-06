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

  // Sign up
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
      })
      .catch((error) => {
        let errorContainer = document.getElementById('register-errors');
        let errorMessage = error.message;
        let formattedErrorMessage = errorMessage.replace(
          'createUserWithEmailAndPassword failed: ',
          ''
        );
        errorContainer.innerHTML = formattedErrorMessage;
      });
    this.ngOnInit();
  }

  // Sign in
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed in!');
      })
      .catch((err) => {
        let errorContainer = document.getElementById('login-errors');
        let errorMessage = err.message;
        let formattedErrorMessage = errorMessage.replace(
          'signInWithEmailAndPassword failed: ',
          ''
        );
        errorContainer.innerHTML = formattedErrorMessage;
      });
    this.ngOnInit();
  }

  // Sign out
  SignOut() {
    this.angularFireAuth.signOut();
    this.angularFireAuth.authState.subscribe((user) => {
      // Redirect user after logout
      this.router.navigate(['login']);
    });
  }

  // Redirect on login or registration
  ngOnInit() {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) this.router.navigate(['management']);
    });
  }
}
