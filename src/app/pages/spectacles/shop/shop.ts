import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { FilterBar } from './filter-bar/filter-bar';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/header/header';

@Component({
  selector: 'app-shop',
  imports: [RouterLink, NgxAuroraComponent, FilterBar, CommonModule, Header],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop {
    products = [
    { name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { name: "Fastrack", image: 'assets/fastrack.webp', price: 2000, brand: 'Fastrack', gender: 'male' },
    { name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { name: "RayBon", image: 'assets/rayBan.avif', price: 2500, brand: 'RayBon', gender: 'male' },
    { name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { name: "IDEE", image: 'assets/IDEE.png', price: 1800, brand: 'IDEE', gender: 'female' },
    { name: "MayBack", image: 'assets/Maybach.jpg', price: 3000, brand: 'MayBack', gender: 'unisex' },
    { name: "MayBack", image: 'assets/Maybach.jpg', price: 3000, brand: 'MayBack', gender: 'unisex' },
    { name: "MayBack", image: 'assets/Maybach.jpg', price: 3000, brand: 'MayBack', gender: 'unisex' },
    { name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { name: "Burberry", image: 'assets/Burberry.avif', price: 3500, brand: 'Burberry', gender: 'female' },
    { name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
    { name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
    { name: "John Jacobs", image: 'assets/Johnjacobs.avif', price: 4000, brand: 'John Jacobs', gender: 'male' },
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
}
