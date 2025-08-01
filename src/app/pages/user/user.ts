import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  dropdownOpen = false;

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  logout() {
    localStorage.removeItem('accessToken');
    window.location.reload();
  }
}
