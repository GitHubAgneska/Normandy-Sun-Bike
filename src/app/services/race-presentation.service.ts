import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';
import { Race } from '../race';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RacePresentationService {

  private target: string;
  private service: HttpClient;

  constructor( p_service: HttpClient) {
    this.service = p_service;
    this.target = environment.domain + 'races/';
  }

  public getAll():Observable<Race[]> {
    return this.service.get( this.target ).pipe(
      map(
        ( param_response: any ) => {
          return param_response as Race[];
        }
      )
    );
  }

  public getById( p_id: number):Observable<Race> {

    return this.service.get( this.target + p_id ).pipe(
      map(
        ( param_response: any ) => {
          return param_response as Race;
        }
      )
    );
  }

  public editRace( p_id: number, p_race: Race ): Observable<Race> {

    return this.service.put(  this.target  + p_id , p_race ).pipe(
      map(
        ( param_response: any ) => {
          return param_response as Race;
        }
      )
    );
  }
}
