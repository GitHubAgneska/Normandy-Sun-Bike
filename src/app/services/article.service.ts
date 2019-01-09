import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
import { Article } from '../classes/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private httpService:Http;
  constructor(httpService:Http) { 
    this.httpService = httpService;
  }

  public getArticle():Observable<Article[]>{

    let url:string = "article.json";
    return this.httpService.get("assets/articles.json").pipe(
      map(
          (param_my_response:Response) => {
          let obj:Article[] = param_my_response.json();
          return obj;
        }
      )
    );
  }
}
