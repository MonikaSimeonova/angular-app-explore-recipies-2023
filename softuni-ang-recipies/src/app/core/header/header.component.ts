import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthUserService } from 'src/app/user/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User | undefined;
  emailUser = '';

  constructor(private authUser: AuthUserService) {}

  get isLoggedIn(): boolean {
    console.log(this.authUser.isLogged());

    return this.authUser.isLogged();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    
    if (this.user) {
      this.emailUser = this.user?.email;;
    }
  }

  onLogout() {
    this.authUser.logOut();
  }
}
