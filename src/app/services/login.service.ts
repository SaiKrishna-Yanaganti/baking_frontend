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
    return this.http.get(`${baseUrl}/customers/login/${user.userName}/${user.password}`);
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let user: any =localStorage.getItem("user");
    user = JSON.parse(user)
    this.http.get(`${baseUrl}/customers/getCustomerDetails/${user.userName}`).subscribe((res)=> {
      localStorage.setItem('userData',JSON.stringify(res));
    });
    return this.http.get(`${baseUrl}/customers/getCustomerDetails/${user.userName}`)
  }
  public getTransactions(data:any) {
    let user: any =localStorage.getItem("userData");
    user = JSON.parse(user)
    return this.http.get(`${baseUrl}/account/getTransactionDetails/${user.accountNumber}`)
  }
  public fundTransfer(data: any){
    let user: any =localStorage.getItem("userData");
    user = JSON.parse(user)
    return this.http.get(`${baseUrl}/customers/transferAmount/${user.accountNumber}/${data.accountNo}/${data.amount}`);
  }
  

}
