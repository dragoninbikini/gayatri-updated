import { Component, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { filter } from 'rxjs';
import { Header } from '../../components/header/header';
import { SpecsContent } from '../../components/specs-content/specs-content';
import { Product } from '../../models/product';
import { ProductService } from '../../authservice/product-service';
import { User } from "../user/user";

@Component({
  selector: 'app-spectacles',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink,
    NgxAuroraComponent,
    Header,
    SpecsContent,
    User
],
  templateUrl: './spectacles.html',
  styleUrl: './spectacles.scss',
  encapsulation: ViewEncapsulation.None,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Spectacles implements OnInit {
  items: Product[] = [];
  isSpecsPage = false;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isSpecsPage = event.urlAfterRedirects === '/spectacles';
      });
  } 

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        console.log('All products from backend:', data);

        this.items = data.filter(product =>
          product.type.toLowerCase() === 'spectacle'
        );

        this.items.forEach(spectacle => {
          console.log(`Spectacle: ${spectacle.name}, Type: ${spectacle.spectacleType}`);
        });
      },
      error: (err) => console.error('Error loading products', err),
    });
  }
  isLoggedIn(): boolean {
  return !!localStorage.getItem('accessToken');
}

}
