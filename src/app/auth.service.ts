import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  BASE_URL:string = 'https://routeegypt.com/gameover';


  constructor(private _HttpClient : HttpClient, private _Router:Router) {
  }

  userDataShow(){
    let encoded :any  = localStorage.getItem('userToken');

    let decoded : any = jwt_decode(encoded);

    console.log(decoded);

    this.userData.next(decoded);
  }

  register(data:any) : Observable<any>{

    return this._HttpClient.post(`${this.BASE_URL}/signup`,data);

  }

  login(data:any) : Observable<any>{

    return this._HttpClient.post(`${this.BASE_URL}/signin`,data);

  }

  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}


