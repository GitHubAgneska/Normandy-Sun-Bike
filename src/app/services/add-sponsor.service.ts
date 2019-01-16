import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { Sponsor } from '../classes/sponsorClass';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddSponsorService {

  // private httpService:HttpClient;
  // baseUrl: string = 'http://localhost:8080/user-portal/sponsors';

  // constructor(param_http_service : HttpClient) {
  //   this.httpService = param_http_service;
  //  }

/*    public putSponsor():Observable<Sponsor[]>{
     return this.httpService.put("/assets/tempLocalStorage.json").pipe(
       map(
         (param_
       )
     )
   } */

  //  getSponsor() {
  //    return this.httpService.get<Sponsor[]>(this.baseUrl);
  //  }

  //  getSponsorById(id:number) {
  //    return this.httpService.get<Sponsor>(this.baseUrl + '/' + id);
  //  }

  //  createSponsor(sponsor:Sponsor) {
  //    return this.httpService.post(this.baseUrl, sponsor);
  //  }

  //  updateSponsor(sponsor:Sponsor) {
  //    return this.httpService.put(this.baseUrl + '/' + sponsor.id, sponsor);
  //  }

  //  deleteUser(id: number) {
  //    return this.httpService.delete(this.baseUrl + '/' + id);
  //  }

  private target:string;
  private httpService:Http;

  constructor(httpService:Http) { 
    this.httpService = httpService;
    this.target = environment.domain + "sponsor/";
  }

  public getSponsor():Observable<Sponsor[]>{

    return this.httpService.get("assets/sponsors.json").pipe(
      map(
          (param_my_response:Response) => {
          let obj:Sponsor[] = param_my_response.json();
          return obj;
        }
      )
    );
  }

  public getSponsorById( id:number  ):Observable<Sponsor>{

    return this.httpService.get(this.target + id).pipe(
      map(
          (p_response:Response) => {
          return p_response.json() as Sponsor;
        }
      )
    );
  }

  public addSponsor( sponsor:Sponsor ):Observable<Sponsor>{

    return this.httpService.post(this.target, sponsor ).pipe(
      map(
          (p_response:Response) => {
          return p_response.json() as Sponsor;
        }
      )
    );
  }

  public editSponsor( id:number, sponsor:Sponsor ):Observable<Sponsor>{
    
    return this.httpService.put(  this.target  + id , sponsor ).pipe(
      map(
        ( param_response:any ) => {
          return param_response as Sponsor;
        }
      )
    );
  }

  public deleteSponsor( id:number ):Observable<boolean>{
    
    return this.httpService.delete(  this.target  + id ).pipe(
      map(
        ( param_response:any ) => {
          return param_response as boolean;
        }
      )
    );
  }


}
