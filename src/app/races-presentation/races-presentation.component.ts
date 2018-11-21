import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-races-presentation',
  templateUrl: './races-presentation.component.html',
  styleUrls: ['./races-presentation.component.css']
})
export class RacesPresentationComponent implements OnInit {

  private raceTitle:string = "Race Title";
  private raceText:string = "Eo adducta re per Isauriam, rege Persarum bellis finitimis inligato repellenteque a conlimitiis suis ferocissimas gentes, quae mente quadam versabili hostiliter eum saepe incessunt et in nos arma moventem aliquotiens iuvant, Nohodares quidam nomine e numero optimatum, incursare Mesopotamiam quotiens copia dederit ordinatus, explorabat nostra sollicite, si repperisset usquam locum vi subita perrupturus. Denique Antiochensis ordinis vertices sub uno elogio iussit occidi ideo efferatus, quod ei celebrari vilitatem intempestivam urgenti, cum inpenderet inopia, gravius rationabili responderunt; et perissent ad unum ni comes orientis tunc Honoratus fixa constantia restitisset.";
  private raceLink:string ="";

  constructor() { }

  ngOnInit() {
  }

 

}
