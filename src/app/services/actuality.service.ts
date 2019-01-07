import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Actuality } from '../classes/actuality';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

  private httpService:Http;
  constructor(httpService:Http) { 
    this.httpService = httpService;
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
}
