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

  constructor(private _httpService: HttpService) { }


  ngOnInit() {
    this.loginedUser = JSON.parse(localStorage.getItem("LoginedUser")) || null

    this.loginedUser.isLogined = true
    this.isLogined = this.loginedUser.isLogined ? true : false
    if (this.loginedUser.role == 'admin') {
      this.isAdmin = true
    }
  }

  loginTheUser(user: IUser) {
    // must be in cookie (backEnd) :
    localStorage.setItem("LoginedUser", JSON.stringify(user))
    //
  }

  logOut() {
    this.loginedUser.isLogined = false
    this.isLogined = false
    this.isAdmin = false
    this.loginedUser = null
    localStorage.removeItem("LoginedUser")
  }

}
