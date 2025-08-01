import { Component } from '@angular/core';
import { TimelineComponent, TimelineEntry } from '../../components/timeline/timeline';
import { Home } from '../home/home';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutImage } from "../../components/about-image/about-image";
import { Header } from "../../components/header/header";
import { User } from '../user/user';
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
@Component({
  selector: 'app-about',
  imports: [CommonModule, Home, TimelineComponent, RouterLink, AboutImage, Header, User, NgxAuroraComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class About {
   timelineData: TimelineEntry[] = [
    {
      title: '1978',
      content: 'Birth of a legacy.',
    },
    {
      title: '2010',
      content: 'Major expansion & modernization.',
    },
    {
      title: '2020',
      content: 'Digital transformation phase.',
    },
    {
      title: '2025',
      content: 'Vision for the future.',
    }
  

   ];
   isLoggedIn(): boolean {
  return !!localStorage.getItem('accessToken');
}

  }
  
    


