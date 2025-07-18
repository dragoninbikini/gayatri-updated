import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormBuilder, Validators } from '@angular/forms';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [Header, NgxAuroraComponent, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login data:', this.loginForm.value);
      // JWT login logic will go here next 🔐
    }
  }
}