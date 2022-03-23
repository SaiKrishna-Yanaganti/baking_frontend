import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //generate token

  public login(user:any){
    return this.http.post(`${baseUrl}/customer/login/`,user);
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    // let user =localStorage.getItem("user");
    let user = {
      "customerName": "Sai",
      "customerId": 1998
    }
    if(user!=null){
      return user
    }
    else{
      return null;
    }
  }


}
