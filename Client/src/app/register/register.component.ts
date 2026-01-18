import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
    standalone: false
})
export class RegisterComponent {
  constructor(
    private api: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ShowPasswordField = false;
  PasswordVisible = false;

  EmailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  PasswordRegex = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/';

  registerForm = this.formBuilder.group({
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
    if (this.registerForm.invalid || !this.registerForm.value.Gmail || !this.registerForm.value.Password) {
      return;
    }

    this.api
      .register(this.registerForm.value.Gmail!, this.registerForm.value.Password!)
      .subscribe({
        next: () => this.router.navigate(['']),
        error: (error) => {
          const displayMessages: string[] = [];
          const payload = error?.error;

          if (payload?.errors && typeof payload.errors === 'object') {
            for (const key of Object.keys(payload.errors)) {
              if (key.startsWith("Name"))
                displayMessages.push("Navnet er ugyldig");

              if (key.startsWith("Phone"))
                displayMessages.push("Telefonnummeret er ugyldig eller allerede brukt");
            }
            alert('\n' + displayMessages.join('\n'));
            return;
          }
        },
      });
  }
  togglePasswordVisibility(): void {
    this.PasswordVisible = !this.PasswordVisible;
  }
}
