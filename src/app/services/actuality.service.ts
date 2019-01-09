import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Actuality } from '../classes/actuality';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

  private httpService:Http;
  private target:string;

  constructor(httpService:Http) { 
    this.httpService = httpService;
    this.target = environment.domain + "actuality/";
  }

  public getActuality():Observable<Actuality[]>{

    return this.httpService.get("assets/actuality.json").pipe(
      map(
          (param_my_response:Response) => {
          let obj:Actuality[] = param_my_response.json();
          return obj;
        }
      )
    );
  }

  public updateActuality( p_actuality: Actuality ):Observable<Actuality>{

    return this.httpService.put(this.target + 1, p_actuality).pipe(
      map(
          (p_response:Response) => {
          let obj:Actuality = p_response.json();
          return obj;
        }
      )
    );
  }
}
