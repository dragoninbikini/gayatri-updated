import { Component } from '@angular/core';
import { Header } from "../../../components/header/header";
import { NgxAuroraComponent } from "@omnedia/ngx-aurora";
import { RouterLink } from '@angular/router';
import { User } from "../../user/user";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [Header, NgxAuroraComponent, RouterLink, User, CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.scss'
})
export class Booking {
isLoggedIn(): boolean {
  return !!localStorage.getItem('access_token');
}

}
