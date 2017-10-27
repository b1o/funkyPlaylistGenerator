import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const SpotifyBaseUrl = 'https://api.spotify.com/v1/';
export const Backend = 'http://localhost:3000/';

@Injectable()
export class NetworkService {

  public accessToken: string;
  public refreshToken: string;

  constructor(private http: HttpClient) { }

  public reqAuth() {
    this.http.get(Backend + 'token')
      .subscribe(data => {
        console.log(data);
      });
  }

  public get(url, params: [{ key: string, value: any }]) {
    let a: HttpParams = new HttpParams();
    for (let p of params) {
      a = a.append(p.key, p.value);
    };
    return this.http.get(url, { params: a });
  }
}
