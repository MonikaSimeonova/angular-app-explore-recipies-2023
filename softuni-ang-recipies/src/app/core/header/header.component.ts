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
  uid = '';

  constructor(private authUser: AuthUserService) {}

  get isLoggedIn(): boolean {
    return this.authUser.isLogged();
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    console.log( this.user?.uid);
    
    if (this.user) {
      this.emailUser = this.user?.email;
      this.uid =  this.user?.uid
    }
  }

  onLogout() {
    this.authUser.logOut();
  }
}
