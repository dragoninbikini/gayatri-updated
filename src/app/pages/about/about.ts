import { Component } from '@angular/core';
import { Home } from '../home/home';
 import { NgxTimelineComponent, TimelineEntry } from '@omnedia/ngx-timeline';
 import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';
@Component({
  selector: 'app-about',
  imports: [Home, NgxTimelineComponent, NgxNeonUnderlineComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
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
  }
  
    


