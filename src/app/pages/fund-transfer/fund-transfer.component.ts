import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  
  constructor(private _snackBar: MatSnackBar, private loginService:LoginService, private http:HttpClient) { }

  public user={
    accountNo:'',
    amount:'',
    modeOfTransaction:'',
    payeeId:'',
    
  }
  public transactions: any = []

  ngOnInit(): void {
  }
 myTransfer() {

  if(this.user.accountNo!=''&& this.user.amount!=''&& this.user.modeOfTransaction!=null){
    this.loginService.fundTransfer(this.user).subscribe(
      (data:any)=>{
        swal.fire('Success', 'Transaction Successfull' , 'success');
      },
      (error)=>{
        if(error.status == 200) {
          swal.fire('Success', 'Transaction Successfull' , 'success');
        }
        console.log(error)
      }
    )
  }
  if(this.user.accountNo==''|| this.user.amount==''){

    swal.fire('Error', 'Please Enter Valid Details..!!','error');
  }


 }
}
