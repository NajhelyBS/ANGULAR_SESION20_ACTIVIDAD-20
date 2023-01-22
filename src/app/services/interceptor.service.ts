import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
    ): Observable<HttpEvent<any>> {

    console.log('Se ha interceptado el contenido');

    const newReq = req.clone({setHeaders:{
      Authorization: 'token 123456'
    }})

    return next.handle(newReq);
  }


  constructor() { }


}
