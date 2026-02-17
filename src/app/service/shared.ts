import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interface/register';
import { Login } from '../interface/login';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  myRegisterApiUrls: string = 'https://login-form-guards-default-rtdb.firebaseio.com/register.json';
  constructor(private http: HttpClient) { }

  postRegisterList(regObj: Register) {
    return this.http.post(this.myRegisterApiUrls, regObj);
  }

  getRegisterList(myLoginObj:Login){
    console.log(myLoginObj);
    return this.http.get(this.myRegisterApiUrls)
  }
}