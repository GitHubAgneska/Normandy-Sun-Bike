import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  public current: User;

  constructor(private service: LoginService, private uService: UserService, private router: Router) {
    this.current = null;
  }

  public login(): void {
    this.service.login(this.current.email, this.current.password).subscribe(
      (p_user: User) => {
        this.current = p_user;
        this.router.navigateByUrl('admin/navigation');
      },
      () => {
        alert('Erreur lors de la connexion !');
      }
    );
  }

  ngOnInit() {
    this.current = this.uService.current;
  }


}
