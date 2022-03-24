import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private loginService:LoginService) { }

  public user={
    userName:'',
    password:'',
    
  }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.user.userName.trim() == ''|| this.user.userName == null)
    {
      this._snackBar.open("Username is Required..!","", {
        duration : 2000,
      });
    }
    if(this.user.password.trim() == ''|| this.user.password == null)
    {
      this._snackBar.open("Password is Required..!","", {
        duration : 2000,
      });
    }

   

    this.loginService.login(this.user).subscribe(
      (data:any)=>{
        window.location.href='/user-dashboard';
        console.log(data)
        this.loginService.setUser(this.user);
        this.loginService.getUser();
      },
      (error)=>{
        if(error.error.text == "login successfull") {
          window.location.href='/user-dashboard';
          this.loginService.setUser(this.user);
          this.loginService.getUser();
        }
      }
    )

    

  }



}
