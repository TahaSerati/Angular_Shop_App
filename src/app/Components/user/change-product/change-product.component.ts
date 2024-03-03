import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { IProduct } from 'src/app/interfaces/product-interface';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-change-product',
  templateUrl: './change-product.component.html',
  styleUrls: ['./change-product.component.css']
})
export class ChangeProductComponent {

  productsAll : IProduct[]

  
  constructor(private location : Location , private _httpService : HttpService) {}

  ngOnInit() {
    this._httpService.getAllProducts().subscribe((prr) => {
      this.productsAll = prr
    })

  }

  
  goBack() {
    this.location.back()
  }

  onCardClicked(product) {
    
  }


}
