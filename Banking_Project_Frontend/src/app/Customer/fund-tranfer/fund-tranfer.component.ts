import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-tranfer',
  templateUrl: './fund-tranfer.component.html',
  styleUrls: ['./fund-tranfer.component.css']
})
export class FundTranferComponent implements OnInit {

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
