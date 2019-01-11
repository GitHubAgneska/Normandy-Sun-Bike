import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { EmailUser } from '../contact-page';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "http://localhost:8080/contact";
  private httpHeaders =  new HttpHeaders({'Content-Type':'application/json'});

  constructor(private httpService: HttpClient) { }

  createContact(contact:Contact):Observable<Contact> {
    return this.httpService.post<Contact>(this.url, contact,{headers:this.httpHeaders})

  }
/* 
  public sendEmail(argparam:any) {
    return this.httpService.post('http://localhost/4200/contact/', argparam)
      .map(res => res.json())
      .catch(this._errorHandler); 
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  } */


}
