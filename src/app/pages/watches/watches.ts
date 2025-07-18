import { Component } from '@angular/core';
import { Home } from '../home/home';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { WatchCarousel } from '../../components/watch-carousel/watch-carousel';
import { IntersectionObserver } from '../../directives/intersection-observer';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-watches',
  imports: [
    Header,
    RouterLink,
    NgxAuroraComponent,
    IntersectionObserver,
    CommonModule,
  ],
  templateUrl: './watches.html',
  styleUrl: './watches.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Watches {
  items = [
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
      image: 'assets/carouselwatch1.avif',
      price: 1999,
      description: 'Classic round watch',
    },
    {
      id: '2',
      name: 'Cat-Eye',
      image: 'assets/carouselwatch2.webp',
      price: 2199,
      description: 'Elegant cat-eye frame',
    },
    {
      id: '3',
      name: 'Clubmaster',
      image: 'assets/carouselwatch3.webp',
      price: 2499,
      description: 'Bold clubmaster style',
    },
    {
      id: 4,
      name: 'Transparent',
      image: 'assets/carouselimage4.avif',
      price: 2000,
      description: 'blah blah blah',
    },
    {
      id: 5,
      name: 'Wayfarer',
      image: 'assets/carouselwatch5.png',
      price: 2000,
      description: 'blah blah blah',
    },
    {
      id: 6,
      name: 'Aviator',
      image: 'assets/carouselimage7.webp',
      price: 2000,
      description: 'blah blah blah',
    },
  ];
}
