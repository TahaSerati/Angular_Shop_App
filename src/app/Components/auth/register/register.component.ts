import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpService } from 'src/app/Services/http.service';
import { numberAndLengthValidator } from 'src/app/customValidators/numberAndLengthValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  active = 'register';
  hasRegisterd: boolean

  constructor(private _httpService: HttpService, private _router: Router, private _authSerivce: AuthService) {
    // this.registerForm = new FormGroup({
    //   'userName': new FormControl(null, []),
    //   'userPhone': new FormControl(null, [],),
    //   'userEmail': new FormControl(null, []),
    //   'password': new FormControl(null, []),
    //   'productsInCart': new FormArray([
    //     new FormControl(null, []),
    //   ])
    // })

    this.registerForm = new FormGroup({
      'userPhone': new FormControl(null, [Validators.required, numberAndLengthValidator()],),
      'password': new FormControl(null, [Validators.required]),
      // 'userEmail': new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {

  }

  onUserRegister() {
    // const hasRegisterd = this._httpService.getAllUsers().subscribe((allUsers) =>
    //   allUsers.some((user) => user.password === password || user.userPhone === userPhone))

    if (this.registerForm.valid) {

      const userPhone = this.registerForm.controls['userPhone'].value
      const password = this.registerForm.controls['password'].value

      // this._httpService.getAllUsers().pipe(
      //   map((allUsers) => {
      //     let has = allUsers.some((user) => user.password == password && user.userPhone == userPhone)
      //     if (has == true) {
      //       return true
      //     } else {
      //       return false
      //     }
      //   })
      // ).subscribe((val) => { this.hasRegisterd = val })

      this._httpService.getAllUsers().pipe(

        map((allUsers) => {
          let has = allUsers.some((user) => user.password == password && user.userPhone == userPhone)
          if (has == true) {
            return true
          } else {
            return false
          }
        })

      ).subscribe((val) => { this.hasRegisterd = val })

      if (this.hasRegisterd) {
        let errorMessage = "شما قبلا ثبت نام کرده اید لطفا وارد سیتسم شوید";
        console.log(errorMessage)
        return;
      }

      let user = {
        "userPhone": userPhone,
        "password": password,
        "productsInCart": [],
        "isLogined": true,
        "role": "admin"
      }

      this._httpService.addNewUser(user).subscribe((newUser) => {
        if (newUser) {
          this._authSerivce.loginTheUser(newUser)
          this._router.navigate(['./'])
        } else {
          let errorMessage = "مشکلی پیش آمد لطفا بعدا تلاش کنید"
          console.log(errorMessage)
        }
      });
    } else {
      console.log('invalid')
    }

  }

}
