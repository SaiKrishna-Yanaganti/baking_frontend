import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css'],
})
export class FundTransferComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private loginService: LoginService,
    private http: HttpClient
  ) {}

  public user = {
    accountNo: '',
    amount: '',
    modeOfTransaction: '',
    payeeId: '',
  };
  public transactions: any = [];

  ngOnInit(): void {}
  myTransfer() {
    if (this.user.accountNo == '' || this.user.amount == '') {
      swal.fire('Error', 'Please Enter Valid Details..!!', 'error');
    } else if (+this.user.amount < 0) {
      swal.fire('Error', 'Amount must be positive', 'error');
    } else if (+this.user.amount < 100) {
      swal.fire('Error', 'Minimum transfer amount is 100', 'error');
    } else {
      Swal.fire({
        title: 'Do you want to Proceed?',
        icon: 'warning',
        confirmButtonText: 'Ok',
        showCancelButton: true,
      }).then((result) => {
        if (result['isConfirmed']) {
          this.loginService.fundTransfer(this.user).subscribe(
            (data: any) => {
              swal.fire('Success', 'Transaction Successfull', 'success');
            },
            (error) => {
              if (error.status == 200) {
                swal.fire('Success', 'Transaction Successfull', 'success');
              } else if (error.status == 500) {
                swal.fire(
                  'Failed',
                  'Transaction Failed. Invalid Account Number',
                  'error'
                );
              } else {
                swal.fire(
                  'Failed',
                  'Transaction Failed. Insufficient funds',
                  'error'
                );
              }
              console.log(error);
            }
          );
        }
      });
    }
  }
}
