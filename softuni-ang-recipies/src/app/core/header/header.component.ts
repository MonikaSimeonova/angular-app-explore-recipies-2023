import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { USER_KEY } from 'src/app/shared/validators/constants';
import { AuthUserService } from 'src/app/user/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User | undefined;
  emailUser = '';
  //uid = '';
  isLoggedIn$!: Observable<boolean>;

  constructor(private authUser: AuthUserService) {}

  // get isLoggedIn(): boolean {
  //   return this.authUser.isLogged();
  // }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authUser.isLoggedIn();

    this.user = JSON.parse(localStorage.getItem(USER_KEY)!);

    if (this.user) {
      this.emailUser = this.user?.email;
    }

  }

  onLogout() {
    this.authUser.logOut();
  }
}
