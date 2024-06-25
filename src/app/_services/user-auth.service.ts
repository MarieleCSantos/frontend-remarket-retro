import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles: []) {
    localStorage.setItem("roles", JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem("roles"));
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem("jwtToken");
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken;
  }

  public isAdmin() {
    const roles: any[] = this.getRoles();
    if (roles && roles.length > 0) {
      return roles[0].roleName === 'Admin';
    } else {
      return false;
    }
  }

  public isUser() {
    const roles: any[] = this.getRoles();
    if (roles && roles.length > 0) {
      return roles[0].roleName === 'User';
    } else {
      return false;
    }

  }

}
