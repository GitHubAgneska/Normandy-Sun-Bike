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

  public addSponsorWithImg(sponsor: FormData, img){
    return this.httpService.post(this.target, sponsor, img);
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


  public editSponsorWithImg(id:number, sponsor: FormData, img) {
    return this.httpService.put(this.target + id, sponsor, img);
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
