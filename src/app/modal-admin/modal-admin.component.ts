import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {

  @Input() public elementName:string;
  @Input() public actionOnElement:string;
  @Input() public message:string;

  public title:string;
  

  constructor() {
  }

  ngOnInit() {
    this.title = this.elementName + " a bien été " + this.actionOnElement + ".";
  }

}
