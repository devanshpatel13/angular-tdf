import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from './user';
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:3000/enroll';
  constructor(private _http :HttpClient) { }
  
  enroll(user : User){
    return this._http.post<any>(this._url, user)
            .pipe(catchError(this.errorHandlar))

  }
  errorHandlar(error :HttpErrorResponse){
    return throwError(error); 
  }
}
