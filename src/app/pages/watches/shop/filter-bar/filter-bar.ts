import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
})
export class FilterBar implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();
  @Input() brands: string[] = [];
  @Input() genders: string[] = [];
  @Input() prices: string[] = [];

  selectedBrand = '';
  selectedGender = '';
  selectedPrice = '';



  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:5296/api/product/filters').subscribe({
      next: (data) => {
        this.brands = data.brands;
        this.genders = data.genders;
        this.prices = data.prices;
      },
      error: (err) => {
        console.error('Failed to fetch filter options', err);
      }
    });
  }

  updateFilters() {
    this.filtersChanged.emit({
      brand: this.selectedBrand,
      gender: this.selectedGender,
      price: this.selectedPrice,
    });
  }
}
