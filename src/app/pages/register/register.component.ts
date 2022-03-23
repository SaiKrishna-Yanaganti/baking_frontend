import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private userService:UserService) { }

  public user={
    customerName:'',
    email:'',
    password:'',
    mobileNO:'',
    pan:'',
    gender:'',
    dateOfBirth:''
  }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.user.customerName == ''|| this.user.customerName == null)
    {
      this._snackBar.open("Name is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    if(this.user.email == ''|| this.user.email == null)
    { 
      this._snackBar.open("Email Id is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }
    if(this.user.password == ''|| this.user.password == null)
    {
      this._snackBar.open("Password is Required..!","", {
        duration : 2000,
        verticalPosition:"top",
        horizontalPosition:"right"
      });
    }


    //deta send to backend
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        swal.fire('Success', 'User ID - ' + data.customerId,'success');
      },
      (error)=>{
        swal.fire('Error', 'Something Went Wrong..!','error');
      }
    );


    

  }




}
