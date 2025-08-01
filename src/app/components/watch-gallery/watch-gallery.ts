import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-watch-gallery',
  imports: [CommonModule],
  templateUrl: './watch-gallery.html',
  styleUrl: './watch-gallery.scss',
})
export class WatchGallery {
  @Input() images: string[] = [];
  ngOnInit() {
  this.images.forEach(image => {
    console.log('Image URL:', `http://localhost:5296/uploads${image}`);
  });
}
}
