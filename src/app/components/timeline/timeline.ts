import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineEntry {
  title: string;
  content: string;
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-timeline',
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.scss'],
})
export class TimelineComponent {
  @Input() data: TimelineEntry[] = [
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
  @Input() orientation: 'switch' | 'left' | 'right' = 'switch';
}
