import { group } from '@angular/animations';
import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswordsValidator(
  password: string,
  rePassword: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(password);
    const rePass = group.get(rePassword);

    return pass?.value === rePass?.value
      ? null
      : { matchPasswordsValidator: true };
  };
}