import { AuthService } from './auth.service';
import { NetworkService } from './network.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authHeader = `Bearer ${this.auth.$accessToken}`;
    req = req.clone({
      setHeaders: {
        Authorization: authHeader
      }
    });
    return next.handle(req);
  }
}
