import { Component } from '@angular/core';
import { Header } from "../../../components/header/header";
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [Header, NgxAuroraComponent, RouterLink],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {

}
