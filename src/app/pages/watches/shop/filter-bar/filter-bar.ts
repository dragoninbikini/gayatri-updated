import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-bar',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss'
})
export class FilterBar {


    @Output() filtersChanged = new EventEmitter<any>();

  selectedBrand = '';
  selectedGender = '';
  selectedPrice = '';

  @Input() brands:string[] = ['Rolex', 'Casio', 'Fossil', 'Omega', 'Titan'];
  @Input() genders:string[] = ['Men', 'Women', 'Unisex'];
  @Input() prices:string[] = ['<5000', '5000-10000', '>10000'];

  updateFilters() {
    this.filtersChanged.emit({
      brand: this.selectedBrand,
      gender: this.selectedGender,
      price: this.selectedPrice,
    });
  }
  
}
