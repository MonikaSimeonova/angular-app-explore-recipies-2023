import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { USER_KEY } from '../shared/constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  loggedInGuard: boolean = false;

  loggedIn$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  user: User | undefined;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.afAuth.authState.subscribe((user) => {
          sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        });
        this.loggedIn$$.next(true);
        this.loggedInGuard = true;
        this.snackBar.open('Logged in', '', {
          duration: 2000,
        });
      })
      .catch((e) => {
        this.router.navigate(['/login'])
        this.snackBar.open('Wrong Email or Password', 'OK', {
          duration: 5000,
        });
      });
  }

  register(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.afAuth.authState.subscribe((user) => {
          sessionStorage.setItem(USER_KEY, JSON.stringify(user));
        });
        this.loggedIn$$.next(true);
        this.loggedInGuard = true;
        this.snackBar.open('Registred', '', {
          duration: 2000,
        });
      })
      .catch((e) => {
        this.router.navigate(['/register'])

        this.snackBar.open('Wrong Entered Data', 'OK', { duration: 5000 });
      });
  }

  // loadUser() {
  //    this.afAuth.authState.subscribe((user) => {
  //     sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  //   });
  // }

  logOut() {
    this.afAuth.signOut().then(() => {
      sessionStorage.removeItem(USER_KEY);
      sessionStorage.clear();
      this.snackBar.open('Logged out!', '', { duration: 2000 });
      this.loggedIn$$.next(false);
      this.loggedInGuard = false;
      this.router.navigate(['/home']);
    });
  }

  isLoggedIn() {
    return this.loggedIn$$.asObservable();
  }
}
