import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormBuilder, Validators } from '@angular/forms';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [Header, NgxAuroraComponent, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Handle signup logic
    }
  }
}
