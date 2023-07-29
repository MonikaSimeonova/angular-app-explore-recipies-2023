import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

 
  
  form = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private authUser: AuthUserService) {}
  
  login() {
    const {email, password} = this.form.value;
    this.authUser.login(email! ,password!)
  }
}
