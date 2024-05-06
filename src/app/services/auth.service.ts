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
    return this.httpClient
    .get<UserInfoResponse2[]>(PATH_URL_USERS, {
      params: new HttpParams().set('email', user)
    })

    
  }

  Register(username: string, email: string, pass: string): Observable<UserInfoResponse2> {
    console.log("llegaron al servicio: ", username, email, pass)
    const idnum = this.Length.length;
    console.log(idnum)
    const params = {
      id: idnum,
      name: username,
      email: email,
      password: pass
    }
    return this.httpClient
    .post<UserInfoResponse2>(PATH_URL_USERS, params);
  }

  Length(): Observable<UserInfoResponse2> {
    
    return this.httpClient
    .get<UserInfoResponse2>(PATH_URL_USERS)

    
  }
  
}
/*
getUserInfo(Id: string): Observable<UserInfoResponse2> {
    return this.httpClient
    .get<UserInfoResponse2>(PATH_URL_USERS+'/'+Id)
  }
  */