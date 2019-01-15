import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {map} from 'rxjs/operators';

import { EmailUser } from '../classes/emailUser';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  private url = "http://localhost:8080/Contact";
  private httpHeaders =  new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpService: HttpClient) { }

  createContact(emailUser:EmailUser):Observable<boolean> {
    return this.httpService.post<EmailUser>(this.url, emailUser,{headers:this.httpHeaders}).pipe(
      map(
        ( response:boolean) => {
          return response;
        }
      )
    ); 
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  } 


}
