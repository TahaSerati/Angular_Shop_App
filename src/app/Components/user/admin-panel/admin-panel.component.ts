import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {


  loginedUser: IUser

  constructor(private _router: Router, private _authService: AuthService) { }

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


  goToaddNewProduct() {
    this._router.navigate(['./adminPanel/addNewProduct'])
  }


  goToChangeProduct() {
    this._router.navigate(['./adminPanel/changeProduct'])
  }


  goToDeleteProduct() {
    this._router.navigate(['./adminPanel/deleteProduct'])
  }

  goToSliderMdPanel() {
    this._router.navigate(['./adminPanel/sliderMdPanel'])
  }



}
