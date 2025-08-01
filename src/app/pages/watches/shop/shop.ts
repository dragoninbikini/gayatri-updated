import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Product } from '../../../models/product';
import { ProductService } from '../../../authservice/product-service';
import { CartService, CartItem } from '../../../shared/cart-service';
import { Header } from '../../../components/header/header';
import { FilterBar } from './filter-bar/filter-bar';
import { User } from "../../user/user";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-shop',
  imports: [CommonModule, Header, RouterLink, FilterBar, User],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop implements OnInit {
  product: Product[] = [];
  filteredProducts: Product[] = [];
    item: Product | null = null;
  watchId: string | null = null;
  
  brands: string[] = [];
  genders: string[] = [];
  prices: string[] = ['<2000', '2000-3000', '>3000'];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
      private router: Router 
  ) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.product = data;
        this.filteredProducts = [...data];

        this.brands = [...new Set(data.map(p => p.brand))];
        this.genders = [...new Set(data.map(p => p.gender))];
      },
      error: (err) => console.error('Failed to load products:', err)
    });
  }

  applyFilters(filters: any) {
    let filtered = this.product;

    if (filters.brand) {
      filtered = filtered.filter(product => product.brand === filters.brand);
    }

    if (filters.gender) {
      filtered = filtered.filter(product => product.gender === filters.gender);
    }

    if (filters.price) {
      filtered = filtered.filter(product => {
        const price = product.price;
        if (filters.price === '<2000') return price < 2000;
        if (filters.price === '2000-3000') return price >= 2000 && price <= 3000;
        if (filters.price === '>3000') return price > 3000;
        return true;
      });
    }

    this.filteredProducts = filtered;
    this.watchId = this.route.snapshot.paramMap.get('id');
    
    if (this.watchId) {
      const id = parseInt(this.watchId);
      this.productService.getProductByID(id).subscribe({
        next: (data) => {
          this.item = data;
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        }
      });
    }
  }
  
  

goToProduct(id: number) {
  this.router.navigate(['/watches', id]);
}

onBuyClick(event: Event) {
  event.stopPropagation();

  alert('Buy functionality not implemented yet!');
}

onAddToCartClick(event: Event, item: Product) {
  event.stopPropagation();
  this.addToCart(item);
}
  addToCart(product: Product) {
    const item: CartItem = {
      id: product.id,
      image: product.images?.[0] ?? '',
      name: product.name,
      price: product.price,
      quantity: 1
    };
    this.cartService.addToCart(item);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
