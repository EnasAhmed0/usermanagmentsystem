import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  getUsers(id: number): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // getUser(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }

  createUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
