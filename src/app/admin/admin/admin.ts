import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Header } from "../../components/header/header";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterOutlet],
})
export class Admin {

}
