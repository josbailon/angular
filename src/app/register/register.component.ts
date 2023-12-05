// register.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  registrationSuccess: boolean = false;
  registrationError: string | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value)
        .subscribe(
          (registrationResult) => {
            if (registrationResult.success) {
              this.registrationSuccess = true;
              this.registrationError = null;
              this.registerForm.reset();
            } else {
              // Verifica si 'error' está definido antes de asignarlo
              this.registrationError = registrationResult.error ?? 'Error en el registro.';
              this.registrationSuccess = false;
            }
          },
          (error) => {
            console.error(error);
            this.registrationSuccess = false;
            this.registrationError = 'Error en el registro. Por favor, intenta de nuevo.';
          }
        );
    } else {
      this.registrationSuccess = false;
      this.registrationError = 'Por favor, verifica los datos del formulario.';
    }
  }
}
