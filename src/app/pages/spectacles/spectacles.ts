import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { SpecsContent } from '../../components/specs-content/specs-content';
@Component({
  selector: 'app-spectacles',
  imports: [FormsModule, CommonModule, RouterLink, NgxAuroraComponent, Header, SpecsContent],
  templateUrl: './spectacles.html',
  styleUrl: './spectacles.scss',
  encapsulation: ViewEncapsulation.None, // Needed for fixed styles to not be scoped
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Spectacles  {
      isSpecsPage = false;

      constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isSpecsPage = event.urlAfterRedirects === '/spectacles';
      });
}
}