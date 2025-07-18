import { Component, HostListener, isStandalone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-specs-header',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './specs-header.html',
  styleUrl: './specs-header.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpecsHeader {
  hoveredIndex: number | null = null;
  isHoveringDropdown = false;

  menuItems = [
    {
      title: 'Eyeglasses',
      content: ['Men Eyeglasses', 'Women Eyeglasses'],
    },
    {
      title: 'Screen Glasses',
      content: ['Blue Block', 'Office Use', 'Reading Glasses'],
    },
    {
      title: 'Kids Glasses',
      content: ['Boys', 'Girls', 'Colorful Frames'],
    },
    {
      title: 'Contact Lenses',
      content: ['Daily', 'Monthly', 'Colored Lenses'],
    },
    {
      title: 'Sunglasses',
      content: ['Men Sunglasses', 'Women Sunglasses'],
    },
    {
      title: 'Store Locator',
      content: [''],
    },
  ];

  // Hover logic
  setHover(index: number) {
    this.hoveredIndex = index;
    this.isHoveringDropdown = true;
  }

setTouch(index: number) {
  this.hoveredIndex = index;
  this.isHoveringDropdown = true;
}

  clearHover() {
    setTimeout(() => {
      if (!this.isHoveringDropdown) {
        this.hoveredIndex = null;
      }
    }, 200);
  }

  // Toggle dropdown on click
  toggleDropdown(index: number) {
    if (this.hoveredIndex === index) {
      this.hoveredIndex = null;
    } else {
      this.hoveredIndex = index;
    }
  }

  // Close on outside click
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-bar') && !target.closest('.dropdown')) {
      this.hoveredIndex = null;
    }
  }


   
}


