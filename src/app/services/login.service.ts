import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AdminUser } from '../classes/adminUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpService:HttpClient;
  private url = environment.domain + "admin/";

  
  constructor(httpService:HttpClient) { 
    this.httpService = httpService;

  }

  /* login(adminUser:AdminUser):Observable<boolean> {
    return this.httpService.post<AdminUser>(this.url, adminUser).pipe(
      map( */

  login(username:string, password:string):Observable<boolean>{
      return this.httpService.post<AdminUser>(this.url, {username:username, password:password
      }).pipe(
        map(     
    ( response:boolean ) => {
      return response;
        }
      )
    );
  }

  private _errorHandler(error:Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}

