import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WatchGallery } from '../../../components/watch-gallery/watch-gallery';
import { Product } from '../../../models/product';
import { ProductService } from '../../../authservice/product-service';
import { CartService } from '../../../shared/cart-service';
import { CartItem } from '../../../shared/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-watch-detail',
  imports: [WatchGallery, CommonModule, RouterLink],
  templateUrl: './watch-detail.html',
  styleUrl: './watch-detail.scss',
})
export class WatchDetail {
  item: Product | null = null;
  watchId: string | null = null;

  constructor(private route: ActivatedRoute, private productservice: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.watchId = this.route.snapshot.paramMap.get('id');
    
    if (this.watchId) {
      const id = parseInt(this.watchId);
      this.productservice.getProductByID(id).subscribe({
        next: (data) => {
          this.item = data;
        },
        error: (err) => {
          console.error('Error fetching product:', err);
        }
      });
    }
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
