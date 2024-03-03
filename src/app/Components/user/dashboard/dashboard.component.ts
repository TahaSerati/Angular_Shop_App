import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginedUser : IUser

  constructor(private _router : Router, private _authService : AuthService) {}

  ngOnInit() {
    this.loginedUser = this._authService.loginedUser
  }

  goToAllOrders() {
    this._router.navigate(['./dashboard/orders'])
  }
  
  goToMyAddress() {
    this._router.navigate(['./dashboard/address'])
    
  }
    
  goToLikes() {
    this._router.navigate(['./dashboard/likes'])
    
  }
  
  logOut() {
    this._authService.logOut()
    this._router.navigate(['./'])
  }

}
