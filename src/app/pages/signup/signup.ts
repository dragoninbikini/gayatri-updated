import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormBuilder, Validators } from '@angular/forms';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../authservice/register-service';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [Header, NgxAuroraComponent, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService,
    private router: Router) {
    this.signupForm = this.fb.group({
      number:[ , Validators.required],
     username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [this.passwordMatchValidator],
      }
    );
  }
   passwordMatchValidator(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  onSubmit() {
    if (this.signupForm.valid) {
      this.registerService.register(this.signupForm.value).subscribe({
        next: (res) => {
          console.log('User registered:', res);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
        },
      });
    }
  }
}
