import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdminUser } from 'src/app/classes/adminUser';

import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  model: any = {};
  loginForm:FormGroup;
  loading = false;
  submitted = false;
  okUrl:string = environment.domain ="/admin";
  adminUser:AdminUser;

  constructor(private loginService:LoginService,private route: ActivatedRoute, private FormBuilder:FormBuilder, private router:Router ) {}


  ngOnInit() {
    sessionStorage.setItem('token', '');

    this.loginForm = this.FormBuilder.group({
        username : ['',[Validators.required, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')]],
        password: ['', Validators.required]
    });
     //reset login status
      this.loginService.logout();
  }

  get f() { return this.loginForm.controls}; 

  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      alert("pb");
      return;
    }
    this.loading = true;
    this.loginService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            data => {
              this.router.navigate([this.okUrl]); 
            },
             error =>{
               alert("Veuillez entrer vos identifiants à nouveau")
               this.loading = false;
              });

    
    
  }

}
