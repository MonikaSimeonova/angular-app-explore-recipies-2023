import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { USER_KEY } from '../shared/validators/constants';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  loggedIn = false;
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
        this.loadUser();
        this.loggedIn = true;
        this.router.navigate(['/home']);
        console.log('Logged In');
      })
      .catch((e) => {
        
        this.snackBar.open("Wrong Email or Password", "OK", {duration: 5000, })
      });
  }


    register(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.loadUser();
        this.loggedIn = true;
        this.router.navigate(['/home']);
        console.log('Registered');
      })
      .catch((e) => {
        
        this.snackBar.open("Wrong Entered Data", "OK", {duration: 5000, })
      });
  }
  loadUser() {
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
      
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    });
  }

  logOut() {
    this.afAuth.signOut().then(() => {
      console.log('Logged out');
      localStorage.removeItem(USER_KEY);
      this.loggedIn = false;
      this.router.navigate(['/home']);
    });
  }

  isLogged(): boolean {
    return this.loggedIn;
  }
}
