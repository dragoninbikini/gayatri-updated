import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule,],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  dropdownOpen = false;

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user'); // if stored
    this.router.navigate(['/login']);
  }
}
