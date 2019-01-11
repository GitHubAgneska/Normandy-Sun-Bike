import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private Service : EmailService) {}

  addForm:FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({ 
      email=[", Validators.required],
      textMessage:[", Validators.required"]
    });
  }


  submit() {
    this.Service.createContact(this.addForm.value)
    .subscribe(data => {
      
    })
  }

}
