import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specs-content',
  imports: [CommonModule, RouterLink],
  templateUrl: './specs-content.html',
  styleUrl: './specs-content.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SpecsContent {
  items = [
    { name: 'Round', },
    { name: 'Cat-Eye' },
    { name: 'Clubmaster' },
    { name: 'Transparent' },
    { name: 'Wayfarer' },
    { name: 'Aviator' }
    // add more if desired
  ];
  
}
