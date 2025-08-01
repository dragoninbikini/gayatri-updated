import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenResponseDto } from '../models/token-response-dto/token-response-dto-module';

@Injectable({
  providedIn: 'root'
})
export class Services {
  private userKey = 'user';
  private tokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';

  // BehaviorSubject to track login status
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(credentials: any): Observable<TokenResponseDto> {
    return this.http.post<TokenResponseDto>(
      'http://localhost:5296/api/Auth/login',
      credentials,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }
    );
  }

  setSession(accessToken: string, refreshToken: string, user: any): void {
    localStorage.setItem(this.tokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.isLoggedInSubject.next(true); 
  }

getToken(): string | null {
  return localStorage.getItem(this.tokenKey);
}

  getCurrentUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userKey);
    this.isLoggedInSubject.next(false); 
  }
}
