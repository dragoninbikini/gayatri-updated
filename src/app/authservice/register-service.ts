import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:5296/api/Auth'; // 🔁 Replace with your backend URL

  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}