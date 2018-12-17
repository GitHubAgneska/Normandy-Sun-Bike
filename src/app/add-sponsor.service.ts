import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { Sponsor } from './admin/admin-sponsors/sponsorClass';

@Injectable({
  providedIn: 'root'
})
export class AddSponsorService {

  private httpService:HttpClient;


  constructor(param_http_service : HttpClient) {
    this.httpService = param_http_service;
   }

/*    public putSponsor():Observable<Sponsor[]>{
     return this.httpService.put("/assets/tempLocalStorage.json").pipe(
       map(
         (param_
       )
     )
   } */

}
