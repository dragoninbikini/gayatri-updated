import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { Header } from '../../../components/header/header';
import { RouterLink } from '@angular/router';
import { FilterBar } from './filter-bar/filter-bar';
@Component({
  standalone: true,
  selector: 'app-shop',
  imports: [CommonModule, NgxAuroraComponent, Header, RouterLink, FilterBar],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop implements OnInit {

    products = [
    { name: "Titan", image: '', price: 2000, brand: 'Titan', gender: 'male' },
    { name: "Titan", image: '', price: 2000, brand: 'Titan', gender: 'male' },
    { name: "Titan", image: '', price: 2000, brand: 'Titan', gender: 'male' },
    { name: "Citizen", image: '', price: 2500, brand: 'Citizen', gender: 'male' },
    { name: "Citizen", image: '', price: 2500, brand: 'Citizen', gender: 'male' },
    { name: "Citizen", image: '', price: 2500, brand: 'Citizen', gender: 'male' },
    { name: "Lemark", image: '', price: 1800, brand: 'Lemark', gender: 'female' },
    { name: "Lemark", image: '', price: 1800, brand: 'Lemark', gender: 'female' },
    { name: "Lemark", image: '', price: 1800, brand: 'Lemark', gender: 'female' },
    { name: "Fastrack", image: '', price: 3000, brand: 'Fastrack', gender: 'unisex' },
    { name: "Fastrack", image: '', price: 3000, brand: 'Fastrack', gender: 'unisex' },
    { name: "Fastrack", image: '', price: 3000, brand: 'Fastrack', gender: 'unisex' },
    { name: "Sonata Gold", image: '', price: 3500, brand: 'Sonata', gender: 'female' },
    { name: "Sonata Gold", image: '', price: 3500, brand: 'Sonata', gender: 'female' },
    { name: "Sonata Gold", image: '', price: 3500, brand: 'Sonata', gender: 'female' },
    { name: "Timex", image: '', price: 4000, brand: 'Timex', gender: 'male' },
    { name: "Timex", image: '', price: 4000, brand: 'Timex', gender: 'male' },
    { name: "Timex", image: '', price: 4000, brand: 'Timex', gender: 'male' },
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
