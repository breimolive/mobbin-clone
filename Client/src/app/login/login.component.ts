import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

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
  PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}/;

  loginForm = this.formBuilder.group({
    Gmail: [
      '',
      [
        Validators.required,
        Validators.pattern(this.EmailRegex),
        Validators.maxLength(100),
        Validators.minLength(5)
      ],
    ],
    Password: [
      '',
      [
        Validators.required,
        Validators.pattern(this.PasswordRegex),
        Validators.minLength(8)
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
