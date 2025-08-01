import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Services } from '../../authservice/services';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { Carousel } from '../../components/carousel/carousel';
import { AboutImage } from '../../components/about-image/about-image';
import { User } from "../user/user";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
    imports: [
      CommonModule,
      Header,
      RouterLink,
      Carousel,
      AboutImage,
      User
  ]
})
export class Home implements OnInit {
  isHomePage = false;
  isAboutPage = false;
  isSpecsPage = false;
  isWatchPage = false;
  isLoggedIn = false;
  menuOpen = false;

  constructor(private router: Router, private services: Services) {
   
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
        this.isAboutPage = event.urlAfterRedirects === '/about';
        this.isWatchPage = event.urlAfterRedirects === '/watches';
        this.isSpecsPage = event.urlAfterRedirects === '/spectacles';
      });
  }

  ngOnInit(): void {
    this.services.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.services.logout();
  }
}
