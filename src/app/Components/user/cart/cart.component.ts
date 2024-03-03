import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: IUser
  productsIdList: number[]
  productsList: Observable<IProduct[]>
  constructor(private _httpService: HttpService, private _authService: AuthService) { }

  ngOnInit() {
    this.user = this._authService.loginedUser
    this.productsIdList = this._authService.loginedUser.productsInCart


    this.productsList = this._httpService.getAllProducts().pipe(
      map((all) => all.filter((pro) => this.productsIdList.includes(pro.id)))
    )
  }

  deleteProduct(product: IProduct) {
    this._authService.loginedUser.productsInCart.splice(product.id, 1)
  }

}
