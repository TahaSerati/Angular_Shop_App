import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-product-panel',
  templateUrl: './product-panel.component.html',
  styleUrls: ['./product-panel.component.css']
})
export class ProductPanelComponent implements OnInit {

  // products : 
  allRandomProducts$: Observable<IProduct[]>
  allRandomProductsWithMain$: Observable<IProduct[]>
  allRandomProductsWithMainAndSub$: Observable<IProduct[]>
  //check : 
  ParamsMode: number

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _dataService: DataService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.ParamsMode = Object.keys(params).length

      if (this.ParamsMode == 0) {
        this.allRandomProducts$ = this._httpService.getAllProducts()

      } else if (this.ParamsMode == 1) {
        let main = params['productMainCategory']
        this.allRandomProductsWithMain$ = this._httpService.getAllProducts().pipe(map((products) => products.filter((product) => product
          .productMainCategory == main)))



      } else if (this.ParamsMode == 2) {
        let main = params['productMainCategory']
        let sub = params['productSubCategory']

        this.allRandomProductsWithMainAndSub$ = this._httpService.getAllProducts().pipe(map((products) => products.filter((product) => product
          .productMainCategory == main && product.productSubCategory == sub)))
      }
    })
  }

}
