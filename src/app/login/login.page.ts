import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationRequest } from '../models/authorization-request';
import { AuthorizationResponse } from '../models/authorization-response';
import { SessionService } from '../services/session.service';
import { StorageService } from '../util/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers : [SessionService,StorageService]
})
export class LoginPage implements OnInit {

  authorizationRequest : AuthorizationRequest;

  constructor(private sessionService : SessionService, private router : Router) { 
    this.authorizationRequest = new AuthorizationRequest();
  }

  ngOnInit() : void {
  }
  

  public formSubmit() : void {
    console.log("Entro");
    this.sessionService.generateToken(this.authorizationRequest).subscribe(
        (auth : AuthorizationResponse) =>{
        this.sessionService.saveSession(auth);
        this.router.navigate(['home']);
        this.sessionService.loginStatusSubjec.next(true);
      }, (error) =>{
        this.sessionService.logout();
      })
  }

}
