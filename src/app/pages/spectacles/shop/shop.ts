import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { FilterBar } from './filter-bar/filter-bar';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/header/header';
import { User } from "../../user/user";
import { CartService, CartItem } from '../../../shared/cart-service';
@Component({
  selector: 'app-shop',
  imports: [RouterLink, NgxAuroraComponent, FilterBar, CommonModule, Header, User],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {
    products = [
    { id: 1,name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { id: 2,name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { id: 3,name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { id: 4,name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { id: 5,name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { id: 6,name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { id: 7,name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { id: 8,name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { id: 9,name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { id: 13,name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { id: 14,name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { id: 15,name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { id: 16,name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
    { id: 17,name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
    { id: 18,name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
  ];

  filteredProducts = [...this.products];

  brands: string[] = [];
  genders: string[] = [];
  prices: string[] = ['<2000', '2000-3000', '>3000'];

  ngOnInit() {
    this.brands = [...new Set(this.products.map(p => p.brand))];
    this.genders = [...new Set(this.products.map(p => p.gender))];
  }

  applyFilters(filters: any) {
    let filtered = this.products;

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
  }
  isLoggedIn(): boolean {
  return !!localStorage.getItem('accessToken');
}
constructor(private cartService: CartService) {}
addToCart(product: any) {
  const item: CartItem = {
    id: product.id,
    image: product.image,
    name: product.name,
    price: product.price,
    quantity: 1
  };
  this.cartService.addToCart(item);
}
}
