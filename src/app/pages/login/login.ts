import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from '../../authservice/services';
import { TokenResponseDto } from '../../models/token-response-dto/token-response-dto-module';

@Component({
  selector: 'app-login',
  imports: [Header, NgxAuroraComponent, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login {
  loginForm: FormGroup;
  isAdmin = false;
  constructor(
    private fb: FormBuilder,
    private authService: Services,
    private router: Router,
    private route: ActivatedRoute
  ) {
this.loginForm = this.fb.group({
  identifier: ['', Validators.required], // instead of email
  password: ['', Validators.required],
});
  }
  

onSubmit() {
  if (this.loginForm.valid) {
    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe({
      next: (res) => {
        this.authService.setSession(res.accessToken, res.refreshToken, res.user);
        
        const role = res.user?.role;

        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          this.router.navigateByUrl(returnUrl);
        }
      },
      error: (err) => {
        console.error('Login failed', err);
      },
    });
  }
}

}
