import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public service: HttpClient;
  private uService: UserService;

  constructor(p_service: HttpClient, p_uService: UserService) {
    this.service = p_service;
    this.uService = p_uService;
  }

  public login(p_email: string, p_password: string): Observable<User> {
    const url: string = environment.domain + 'admin';
    const user: User = { email: p_email, password: p_password };

    return this.service.post(url, user, {observe: 'response'}).pipe(
      map(
        (p_response: HttpResponse<any>) => {
          this.uService.current = p_response.body as User;
          this.uService.refreshToken(p_response);
          this.uService.current.connected = true;

          return this.uService.current;
        }
      )
    );
  }
}
