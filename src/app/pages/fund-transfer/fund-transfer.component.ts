import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  
  constructor(private _snackBar: MatSnackBar) { }

  public user={
    accountNo:'',
    amount:'',
    modeOfTransaction:'',
    payeeId:'',
    
  }

  ngOnInit(): void {

  }
 myTransfer() {

  if(this.user.accountNo!=''&& this.user.amount!=''&& this.user.modeOfTransaction!=null){

    swal.fire('Success', 'Transaction Successfull' , 'success');
  }
  if(this.user.accountNo==''|| this.user.amount==''|| this.user.modeOfTransaction==null){

    swal.fire('Error', 'Please Enter Valid Details..!!','error');
  }


 }
}
