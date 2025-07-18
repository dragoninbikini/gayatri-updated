import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchGallery } from '../../../components/watch-gallery/watch-gallery';
import { WatchInfo } from '../../../components/watch-info/watch-info';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-watch-detail',
  imports: [WatchGallery, WatchInfo, CommonModule],
  templateUrl: './watch-detail.html',
  styleUrl: './watch-detail.scss',
})
export class WatchDetail {
  item: any;
  watchId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.watchId = this.route.snapshot.paramMap.get('id');

    // Replace with real DB or service fetch logic
    const items = [
      //  { name: 'Round', image: 'assets/carouselwatch1.avif' },
      //  { name: 'Cat-Eye', image: 'assets/carouselwatch2.webp' },
      //  { name: 'Clubmaster', image: 'assets/carouselwatch3.webp' },
      //  { name: 'Transparent', image: 'assets/carouselimage4.avif' },
      //  { name: 'Wayfarer', image: 'assets/carouselwatch5.png' },
      //  { name: 'Aviator', image: 'assets/carouselimage7.webp' }
      // add more if desired
      {
        id: '1',
        name: 'Round',
        images: ['assets/carouselwatch1.avif'],
        price: 1999,
        description: 'Classic round watch',
      },
      {
        id: '2',
        name: 'Cat-Eye',
        images: ['assets/carouselwatch2.webp'],
        price: 2199,
        description: 'Elegant cat-eye frame',
      },
      {
        id: '3',
        name: 'Clubmaster',
        images: ['assets/carouselwatch3.webp'],
        price: 2499,
        description: 'Bold clubmaster style',
      },
      {
        id: '4',
        name: 'Transparent',
        images: ['assets/carouselimage4.avif'],
        price: 2000,
        description: 'blah blah blah',
      },
      {
        id: '5',
        name: 'Wayfarer',
        images: ['assets/carouselwatch5.png'],
        price: 2000,
        description: 'blah blah blah',
      },
      {
        id: '6',
        name: 'Aviator',
        images: ['assets/carouselimage7.webp'],
        price: 2000,
        description: 'blah blah blah',
      },
    ];

    this.item = items.find((p) => p.id === this.watchId);
  }
}
