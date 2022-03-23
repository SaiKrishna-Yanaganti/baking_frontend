import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  user:any;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getUser(); 
  }

}
