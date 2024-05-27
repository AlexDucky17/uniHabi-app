import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { StorageService } from "../util/storage.service";
import { SessionService } from './session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private sessionService : SessionService, private router: Router, private storageService : StorageService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    let token = this.sessionService.getSession();
    if(token != null){
      authReq = authReq.clone({
        setHeaders : {Authorization: `Bearer ${token.accessToken}` }
      })
    }

    return next.handle(authReq).pipe(
      map(resp => {
        // Several HTTP events go through that Observable
        // so we make sure that this is an HTTP response
        console.log(resp);
        return resp;
        }),
      catchError<any, any>((error : HttpErrorResponse) => {
        if(error.status == 401){
          this.storageService.removeItem('token');
          this.router.navigate(['login']);
        }
        return throwError(() => error);
      })
      );
  }
}

export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }
]

