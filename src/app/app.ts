import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from "./pages/cart/cart";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Gayatri');
    
}

