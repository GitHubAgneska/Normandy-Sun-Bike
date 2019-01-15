import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Response, RequestOptionsArgs} from '@angular/http';
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
  private httpServiceClient:HttpClient;

  constructor(httpService:Http, client:HttpClient) { 
    this.httpService = httpService;
    this.target = environment.domain + "sponsors/";
    this.httpServiceClient = client;
  }

  public getSponsor():Observable<Sponsor[]>{

    return this.httpService.get(this.target).pipe(
      map(
          (param_my_response:Response) => {
          let sponsors:Sponsor[] = param_my_response.json();
          return this.sortSponsorByLevel(sponsors);
        }
      )
    );
  }

  public sortSponsorByLevel(sponsors:Sponsor[]):Sponsor[] {

		for(let i=0; i < sponsors.length; i++){  
			let current:Sponsor;
			for(let j = 1; j < (sponsors.length - i); j++){  
				if( sponsors[j-1].level > sponsors[j].level ){
					current = sponsors[j-1];  
					sponsors[j-1] = sponsors[j];  
					sponsors[j] = current;  
				}  		 
			}  
		}  
		 return sponsors;
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

  public addImgInAssets( img:File ){

    const headers:HttpHeaders = new HttpHeaders();
    headers.append('Content-type', 'multipart/form-data');

    const data:FormData = new FormData();
    data.append('file', img, img.name);

    const args:any = {
      headers: headers
    };

    debugger;

    return this.httpServiceClient.patch(environment.domain + "sponsorsimg/", data, args ).pipe(
      map(
          (p_response:Response) => {
          return p_response.json() as string;
          
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
