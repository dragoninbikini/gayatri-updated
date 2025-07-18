import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Carousel } from "../../components/carousel/carousel";
import { filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { AboutImage } from "../../components/about-image/about-image";
import { SpecsContent } from '../../components/specs-content/specs-content';

@Component({
  selector: 'app-home',
  imports: [Header, NgxAuroraComponent, RouterLink, CommonModule, Carousel, AboutImage,],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  isHomePage = false;
  isAboutPage = false;
  isSpecsPage = false;
  isWatchPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects === '/home';
        this.isAboutPage = event.urlAfterRedirects === '/about';
        this.isWatchPage = event.urlAfterRedirects === '/watches';
        this.isSpecsPage = event.urlAfterRedirects === '/spectacles';
      });
     
  }
  menuOpen = false;


toggleMenu() {
  this.menuOpen = !this.menuOpen;
}
}
