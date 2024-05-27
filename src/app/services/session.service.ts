import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthorizationRequest } from "../models/authorization-request";
import { AuthorizationResponse } from "../models/authorization-response";
import { StorageService } from "../util/storage.service";

@Injectable({
    providedIn : 'root'
})

export class SessionService{

    public loginStatusSubjec = new Subject<boolean>();
    
    constructor(private http: HttpClient, private storageService : StorageService){}

    public generateToken(loginData : AuthorizationRequest){
        return this.http.post<AuthorizationResponse>(`${environment.baseUrlApi}/auth/v1/token`,loginData);
    }

    public saveSession(session : AuthorizationResponse) : Boolean{
        this.storageService.putItem('token' , session);
        return true;
    }

    public logout(){
        this.storageService.removeItem('token');
    }

    private isLoggedIn() : Boolean{
        let tokenStr = this.storageService.getItem('token');
        if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
          return false;
        }
          
        return true;
      }

    public getSession() : AuthorizationResponse{
        let session;
        if (this.isLoggedIn()){
          session = JSON.parse(this.storageService.getItem('token'));
        }
    
        return session;
      }

}