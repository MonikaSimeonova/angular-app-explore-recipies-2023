import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';
import { Router } from '@angular/router';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords';
import { emailPattern } from 'src/app/shared/validators/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthUserService,
    private router: Router
  ) {}

  //add email validator
  form = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    passGroup: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  register(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, passGroup: { password } = {} } = this.form.value;
    this.authService.register(email!, password!);
  }
}
