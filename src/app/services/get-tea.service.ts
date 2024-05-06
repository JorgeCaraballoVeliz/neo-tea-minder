import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

const PATH_URL_TEAS = 'http://localhost:3000/teas';
export const PATH_URL_USERS = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class GetTeaService {

  private httpClient = inject(HttpClient);

  constructor() { }

getTeaInfo(Id: string): Observable<UserInfoResponse[]> {
    return this.httpClient
    .get<UserInfoResponse[]>(PATH_URL_TEAS/*+'/'+Id*/, {
      params: new HttpParams().set('userId', Id)
    })
  }

  getUserInfo(Id: string): Observable<UserInfoResponse2> {
    return this.httpClient
    .get<UserInfoResponse2>(PATH_URL_USERS+'/'+Id)
  }
}
//EXTERNOOOO
export interface UserInfoResponse {
  name: string;
  id: string;
  description: string;
  userId: string;
}
//
export interface UserInfoResponse2 {
  name: string;
  id: string;
  email: string;
  password: string;
}
