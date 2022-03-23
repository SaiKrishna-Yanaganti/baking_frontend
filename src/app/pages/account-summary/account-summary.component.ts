import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  public user={
    PayeeName :'',
    PayeeId:'',
    PayeeAccountNo:'',
    Amount:''
  }

  constructor() { }

  ngOnInit(): void {
  }


  formSubmit(){
    if(this.user.PayeeName!=''&& this.user.PayeeId!=''&& this.user.PayeeAccountNo!=''&& this.user.Amount!=''){

      swal.fire('Success', 'Payee Added Successfull' , 'success');
    }

    if(this.user.PayeeName==''|| this.user.PayeeId==''|| this.user.PayeeAccountNo==''|| this.user.Amount==''){

      swal.fire('Error', 'Please Enter Valid Details..!!','error');
    }

  }

}
