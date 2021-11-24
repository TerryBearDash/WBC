import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: ApiService
  ) { }

  signup(e: any) {
    return this.api.post("/auth/public/signup", e);
  }
  login(e: any) {
      return this.api.post("/auth/login", e);
  }
  logout() {
      return window.localStorage.removeItem("Authorization");
  }
  forgot(e: any) {
      return this.api.post("/auth/forgot", e);
  }
  reset(e: any) {
      return this.api.post("/auth/reset", e);
  }

}
