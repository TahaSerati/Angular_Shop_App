import { Injectable, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user-interface';
import { take } from 'rxjs/operators';
import { HttpService } from './http.service';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  loginedUser: IUser | null
  isLogined: boolean = false
  isAdmin: boolean = false

  constructor(private _httpService: HttpService) {
    this.checkUser()
  }


  ngOnInit() {

  }

  checkUser() {
    if (JSON.parse(localStorage.getItem("LoginedUser")) != null) {
      this.loginedUser = JSON.parse(localStorage.getItem("LoginedUser"))
      this.isLogined = this.loginedUser.isLogined ? true : false
    }
  }
  
  loginTheUser(user: IUser) {
    // must be in cookie (backEnd) :
    user.isLogined = true
    localStorage.setItem("LoginedUser", JSON.stringify(user))
    this.loginedUser = JSON.parse(localStorage.getItem("LoginedUser"))
    this.isLogined = this.loginedUser.isLogined ? true : false
    //
  }

  logOut() {
    this.loginedUser.isLogined = false
    this.isLogined = false
    this.loginedUser = null
    localStorage.removeItem("LoginedUser")
  }

}
