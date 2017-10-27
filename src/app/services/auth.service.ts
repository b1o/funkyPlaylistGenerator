import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public accessToken;
  public refreshToken;

  constructor() { }

  public get $accessToken() {
    return localStorage.getItem('access_token') || this.accessToken;
  }

}
