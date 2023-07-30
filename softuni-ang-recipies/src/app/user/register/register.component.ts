import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthUserService } from '../auth-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private authService: AuthUserService) {}

  //add email validator
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rePassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  register() {
    if (
      this.form.value.password !== this.form.value.rePassword ||
      this.form.invalid
    ) {
      return;
    }
    const { email, password } = this.form.value;
    this.authService.register(email!, password!);
  }
}
