import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private readonly _Router = inject(Router);
  constructor(private _HttpClient: HttpClient) {}
  userData: any = null;

  setloginform(data: object): Observable<any> {
    return this._HttpClient.post('https://dummyjson.com/auth/login', data);
  }

  saveuserData(): void {
    if (localStorage.getItem('uaerToken') !== null) {
      this.userData = jwtDecode(localStorage.getItem('uaerToken')!);
    }
  }
  logout(): void {
    localStorage.removeItem('uaerToken');
    this.userData = null;
    this._Router.navigate(['/login'])
  }
}
