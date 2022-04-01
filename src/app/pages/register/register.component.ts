import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private userService:UserService, private router:Router) { }

  public user={
    firstName:'',
    lastName:'',
    middleName:'',
    userName:'',
    email:'',
    password:'',
    mobileNumber:'',
    aadharNumber: '',
    accountNumber: '',
    address: '',
    // pan:'',
    // gender:'',
    dob:''
  }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.user.userName == ''|| this.user.userName == null)
    {
      this._snackBar.open("Name is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.email == ''|| this.user.email == null)
    { 
      this._snackBar.open("Email Id is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.password == ''|| this.user.password == null)
    {
      this._snackBar.open("Password is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
     else if(this.user.firstName == ''|| this.user.firstName == null)
     {
      this._snackBar.open("First Name is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.lastName == ''|| this.user.lastName == null)
    {
      this._snackBar.open("Last Name is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.mobileNumber == ''|| this.user.mobileNumber == null)
    {
      this._snackBar.open("Mobile Number is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.address == ''|| this.user.address == null)
    {
      this._snackBar.open("Address is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.accountNumber == ''|| this.user.accountNumber == null)
    {
      this._snackBar.open("Account Number is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else if(this.user.dob == ''|| this.user.dob == null)
    {
      this._snackBar.open("Date Of Birth is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    else {
            //deta send to backend
      this.userService.addUser(this.user).subscribe(
        (data:any)=>{
          console.log(data);
          swal.fire('Success', 'User ID - ' + data.customerId,'success');
        },
        (error)=>{
          if(error.error.text == "Customer Registeration successfull") {
            swal.fire('Success', 'Registration Successfull');
          }
          else {
            swal.fire('Error', error.error,'error');
          }
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['../login'])
  }




}
