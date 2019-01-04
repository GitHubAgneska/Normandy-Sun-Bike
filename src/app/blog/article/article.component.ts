import { Component, OnInit } from '@angular/core';
import { Article } from '../../classes/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private articleDate;
  private articleTitle;
  private articleImg;
  private articleImgDescription;
  private articleCategorie;
  private articleText;

  public article:Article = 
    { 
      "id" : 1,
      "date": "00/00/0000",
      "title" : "Un Sun trip c'est bien, deux sun trip c'est mieux",
      "img":"https://www.citycle.com/wp-content/uploads/2010/06/velo-energie-solaire.jpg",
      "imgDescription" : "C'est un mec qui fait du vélo sur lequel il y a des panneaux solaires.",
      "categorie" : "Sun Trip Tour 2019",
      "text": "Quam quidem partem accusationis admiratus sum et moleste tuli potissimum esse Atratino datam. Neque enim decebat neque aetas illa postulabat neque, id quod animadvertere poteratis, pudor patiebatur optimi adulescentis in tali illum oratione versari. Vellem aliquis ex vobis robustioribus hunc male dicendi locum suscepisset; aliquanto liberius et fortius et magis more nostro refutaremus istam male dicendi licentiam. Tecum, Atratine, agam lenius, quod et pudor tuus moderatur orationi meae et meum erga te parentemque tuum beneficium tueri debeo."
    };

  constructor() { 
    this.articleDate = this.article.date;
    this.articleTitle = this.article.title;
    this.articleImg = this.article.img;
    this.articleImgDescription = this.article.imgDescription;
    this.articleCategorie = this.article.categorie;
    this.articleText = this.article.text;
  }

  ngOnInit() {
    const background = document.getElementById("article-container");

    if (this.articleCategorie == "Projet") {
      background.style.backgroundImage = "url('../../../assets/projet-landing.jpg')"
    } else if (this.articleCategorie == "Sun Trip Tour 2019") {
      background.style.backgroundImage = "url('../../../assets/2019-landing.jpg')"
   } else if (this.articleCategorie == "Sun Trip 2020") {
      background.style.backgroundImage = "url('../../../assets/2020-landing.jpg')"
   }
  }

}
