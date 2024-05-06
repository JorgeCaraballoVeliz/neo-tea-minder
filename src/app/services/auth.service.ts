import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PATH_URL_USERS, UserInfoResponse2 } from './get-tea.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: BehaviorSubject<string> = new BehaviorSubject('no user');
  user$: Observable<string> = this._user.asObservable();
  private httpClient = inject(HttpClient);


  constructor() { }

  Login(user: string, pass: string): Observable<UserInfoResponse2[]> {
    console.log("llegaron al servicio: ", user, pass)
    this._user.next(user);
    if(user == 'user_3@teaminder.com') {
      console.log('USUARIO CORRECTO');
    }
    if(pass == '12345678') {
      console.log('PASSWORD CORRECTA')
    }
    return this.httpClient
    .get<UserInfoResponse2[]>(PATH_URL_USERS, {
      params: new HttpParams().set('email', user)
    })

    
  }
}
/*
getUserInfo(Id: string): Observable<UserInfoResponse2> {
    return this.httpClient
    .get<UserInfoResponse2>(PATH_URL_USERS+'/'+Id)
  }
  */