import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailUser } from '../classes/emailUser';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private Service : EmailService) {}

  addForm:FormGroup;

  ngOnInit() {

    this.createForm();
  }

  createForm(){
    this.addForm = this.formBuilder.group({ 
    
      emailAddress: ['', [Validators.required, Validators.email]],
      emailMessage : ['', [Validators.required, Validators.minLength(10)]],
  });

/*   get emailAddress() { return this.addForm.get('emailAddress') ;}
  get emailMessage() { return this.addForm.get('emailMessage');} */
  }

  get f() {
    return this.addForm.controls;
  }
 
  submit() {
    
    let email:EmailUser = {emailAddress: this.addForm.get("emailAddress").value, msg: this.addForm.get("emailMessage").value};

    this.Service.createContact(email)
    .subscribe(
      
      (data:Boolean) => {
          if( data == true )
            alert("Votre message a bien été envoyé !");
          else 
            alert("Une erreur s'est produite lors de l'envoi du mail !")
          }
      
    );
    }

  }


