import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public service: HttpClient;
  public current: User;

  constructor(p_service: HttpClient) {
    this.service = p_service;

    this.current = {
      id: 0,
      email: '',
      password: '',
      token: 'default_token',
      apikey: 'default_api_key',
      role: 'default_role',
      connected: false
    };
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders().append('X-TOKEN', this.current.token);
  }

  private getURL(p_id: number = -1, p_addApiKey: boolean = true): string {
    const apikey: string = this.current.apikey || 'no_api_key';
    let url: string = '';

    if (p_id === -1) {
      url = environment .domain + 'users';
    } else {
      url = environment.domain + 'users/' + p_id;
    }

    if (p_addApiKey) {
      url += '/' + apikey;
    }

    return url;
  }

  public refreshToken(p_response: HttpResponse<any>): void {
    if (p_response.headers.get('X-TOKEN') != null ) {
      this.current.token = p_response.headers.get('X-TOKEN');
    }
  }

  public getAll(): Observable<User[]> {
    return this.service.get(this.getURL(-1), { headers: this.getHeaders(), observe: 'response' }).pipe(
      map(
        (p_response: HttpResponse<any>) => {
        this.refreshToken(p_response);
        return p_response.body as User[];
        }
      )
    );
  }

  public getById(p_id: number): Observable<User> {

    return this.service.get(this.getURL(p_id), { headers: this.getHeaders(), observe: 'response' }).pipe(
      map(
        (param_response: HttpResponse<any>) => {
          this.refreshToken(param_response);
          return param_response.body as User;
        }
      )
    );
  }
}
