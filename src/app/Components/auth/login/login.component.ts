import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpService } from 'src/app/Services/http.service';
import { numberAndLengthValidator } from 'src/app/customValidators/numberAndLengthValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  showAlertBox = false
  hasRegisterd: boolean;
  message: string
  active = 'login';
  isLoading = false

  constructor(private _httpService: HttpService, private _authService: AuthService, private _router: Router) {
    this.loginForm = new FormGroup({
      "userPhone": new FormControl(null, [Validators.required, numberAndLengthValidator()]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  onUserLogin() {
    
    if (this.loginForm.valid) {
      this.isLoading = true
      const phoneOrEmail = this.loginForm.controls["userPhone"].value
      const password = this.loginForm.controls["password"].value

      this._httpService.getAllUsers().pipe(
        map((users) => {
          let user = users.find((user) => user.password == password && (user.userPhone == phoneOrEmail || user.userEmail == phoneOrEmail))
          return user
        })
      ).subscribe((user) => {
        if (user) {
          this.isLoading = false
          this._authService.loginTheUser(user)
          this._router.navigate(['/'])
        } else {
          setTimeout(() => {
            this.isLoading = false
            this.message = "!کاربری با این مشخصات پیدا نشد"
            this.showAlertBox = true
          }, 3000)
        }
      })
    }


  }
}
