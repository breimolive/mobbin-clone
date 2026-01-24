import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";


export const UserConstants = {
  MaxEmailLength: 254,
  MinEmailLength: 5,
  MaxPasswordLength: 200,
  MinPasswordLength: 8
};

@Component({
  selector: 'app-register',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})
export class LoginComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ShowPasswordField = false;
  PasswordVisible = false;

  EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,200}/;

  loginForm = this.formBuilder.group({
    Gmail: [
      '',
      [
        Validators.required,
        Validators.pattern(this.EmailRegex),
        Validators.maxLength(UserConstants.MaxEmailLength),
        Validators.minLength(UserConstants.MinEmailLength)
      ],
    ],
    Password: [
      '',
      [
        Validators.required,
        Validators.pattern(this.PasswordRegex),
        Validators.maxLength(UserConstants.MaxPasswordLength),
        Validators.minLength(UserConstants.MinPasswordLength)
      ],
    ],
  });

  onSubmit(): void {
    if (this.loginForm.invalid || !this.loginForm.value.Gmail || !this.loginForm.value.Password) {
      return;
    }

    this.api
      .register(this.loginForm.value.Gmail!, this.loginForm.value.Password!)
      .subscribe({
        next: () => this.router.navigate([''])
      });
  }
  togglePasswordVisibility(): void {
    this.PasswordVisible = !this.PasswordVisible;
  }
}
