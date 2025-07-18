import { Component } from '@angular/core';

import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-header',
  imports: [ NgxTypewriterComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
