import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';
import { emailPattern } from 'src/app/shared/validators/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(emailPattern),
      ],
    ],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authUser: AuthUserService,
    private router: Router
  ) {}

  login() {
    const { email, password } = this.form.value;
    this.authUser.login(email!, password!);
    this.router.navigate(['/home']);

  }
}
