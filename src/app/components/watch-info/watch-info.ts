import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watch-info',
  imports: [CommonModule],
  templateUrl: './watch-info.html',
  styleUrl: './watch-info.scss'
})
export class WatchInfo {
@Input() watch: any;
}
