import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch-gallery',
  imports: [CommonModule],
  templateUrl: './watch-gallery.html',
  styleUrl: './watch-gallery.scss',
})
export class WatchGallery {
  @Input() images: string[] = [];
}
