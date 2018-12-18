import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {map, retry} from "rxjs/operators";
import { Sponsor } from './admin/admin-sponsors/sponsorClass';

@Injectable({
  providedIn: 'root'
})
export class AddSponsorService {

  private httpService:HttpClient;
  baseUrl: string = 'http://localhost:8080/user-portal/sponsors';

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

   getSponsor() {
     return this.httpService.get<Sponsor[]>(this.baseUrl);
   }

   getSponsorById(id:number) {
     return this.httpService.get<Sponsor>(this.baseUrl + '/' + id);
   }


   createSponsor(sponsor:Sponsor) {
     return this.httpService.post(this.baseUrl, sponsor);
   }

   updateSponsor(sponsor:Sponsor) {
     return this.httpService.put(this.baseUrl + '/' + sponsor.id, sponsor);
   }

   deleteUser(id: number) {
     return this.httpService.delete(this.baseUrl + '/' + id);
   }



}
