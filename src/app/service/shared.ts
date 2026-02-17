import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interface/register';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myRegisterApiUrls: string = 'https://login-form-guards-default-rtdb.firebaseio.com/register.json';
  constructor(private http: HttpClient) { }

  postRegisterList(regObj: Register) {
    return this.http.post(this.myRegisterApiUrls, regObj);
  }
}