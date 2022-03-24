import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  public transactions : any = [];
  public user={
    PayeeName :'',
    PayeeId:'',
    PayeeAccountNo:'',
    Amount:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.getTransactions(this.user).subscribe(
      (data:any)=>{
        this.transactions = data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
