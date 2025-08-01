import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { IntersectionObserver } from '../../directives/intersection-observer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../authservice/product-service';
import { WatchTypeService } from '../../shared/watch-type';
import { User } from '../user/user';
import { CartService } from '../../shared/cart-service';
import { CartItem } from '../../shared/cart-service';
@Component({

  selector: 'app-watches',
  imports: [
    Header,
    RouterLink,
    NgxAuroraComponent,
    IntersectionObserver,
    CommonModule,
    User
  ],
  templateUrl: './watches.html',
  styleUrl: './watches.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Watches implements OnInit {
  allWatches: Product[] = [];  
  items: Product[] = [];
  watchType: string = 'All';
  premiumWatches: Product[] = [];
  analogWatches: Product[] = [];
  sportsWatches: Product[] = [];
  smartWatches: Product[] = [];

  constructor(
    private productService: ProductService,
    private watchTypeService: WatchTypeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
  
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.allWatches = data.filter(p => p.type.toLowerCase() === 'watch');
        
        this.applyFilter();
      },
      error: (err) => console.error('Error loading products', err),
    });


    this.watchTypeService.watchType$.subscribe(type => {
      this.watchType = type;
      this.applyFilter();
    });
  }

    applyFilter() {
  // Helper to fix image path
  const formatImagePath = (url: string) =>
    url?.startsWith('http') ? url : `http://localhost:5296/${url}`;

  // Fix image paths for all watches
  this.allWatches = this.allWatches.map(watch => {
    if (watch.images && watch.images.length > 0) {
      watch.images = watch.images.map(img => formatImagePath(img));
    }
    return watch;
  });

  // Now apply watch type filters
  this.premiumWatches = this.allWatches.filter(w => w.watchType?.toLowerCase().trim() === 'premium');
  this.analogWatches = this.allWatches.filter(w => w.watchType?.toLowerCase().trim() === 'analog');
  this.sportsWatches = this.allWatches.filter(w => w.watchType?.toLowerCase().trim() === 'sports');
  this.smartWatches = this.allWatches.filter(w => w.watchType?.toLowerCase().trim() === 'smart');

  switch (this.watchType.toLowerCase()) {
    case 'all':
      this.items = this.allWatches;
      break;
    case 'premium':
      this.items = this.premiumWatches;
      break;
    case 'analog':
      this.items = this.analogWatches;
      break;
    case 'sports':
      this.items = this.sportsWatches;
      break;
    case 'smart':
      this.items = this.smartWatches;
      break;
    default:
      this.items = [];
  }
}

isLoggedIn(): boolean {
return !!localStorage.getItem('accessToken');
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
  
}




