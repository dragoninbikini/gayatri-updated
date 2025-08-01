import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ProductModule } from '../models/product/product-module'; 
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl = 'http://localhost:5296/api/Product'; 
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductByID(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
  addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.apiUrl, product);
}

updateProduct(id: number, product: Product): Observable<Product> {
  return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
}

deleteProduct(id: number): Observable<void> {
  
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
uploadProduct(formData: FormData) {
  return this.http.post('http://localhost:5296/api/Product/create', formData);
}


}

