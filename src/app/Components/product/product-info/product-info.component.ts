import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, map, switchMap, take } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product: IProduct
  instanceProducts$: Observable<IProduct[]>
  activeID: number
  prImages: string[]
  img: string
  index = 0


  constructor(private _httpService: HttpService, private _router: Router,
    private _activeLink: ActivatedRoute, private _dataService: DataService
    , private _authService: AuthService) { }

  // this._activeLink.snapshot.params['id']



  ngOnInit() {
    // this._activeLink.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     const id = params.get('id');
    //     this.updateActiveProduct(id)
    //     return id;
    //   })
    // ).subscribe();

    this._activeLink.params.subscribe(params => {
      this.activeID = params['id']
    })

    // get product
    this._httpService.getAllProducts().pipe(map((products) =>
      products.find((item) => item.id == this.activeID))).subscribe((product) => {
        this.product = product
        this.prImages = product.productImagesAddress
        this.img = this.product.productImagesAddress[0]
      })

    //  get instances 
    this.instanceProducts$ = this._httpService.getAllProducts().pipe(
      map((products) => products.filter((product) => product.productMainCategory == this.product.productMainCategory &&
        product.id !== this.product.id)),
      take(1)
    )

   

  }

  // updateActiveProduct(id: string) {

  //   // get active product  
  //   this._httpService.getAllProducts().pipe(map((products) =>
  //     products.find((item) => item.id == +id))).subscribe((product) => {
  //       this.product = product
  //     })

  // }

  goRight() {
    this.index += 1
    if (this.index >= this.prImages.length)
      this.index = 0
    this.img = this.prImages[this.index]
  }

  goLeft() {
    this.index -= 1
    if (this.index < 0)
      this.index = this.prImages.length - 1
    this.img = this.prImages[this.index]

  }

  onAddToCart(product: IProduct) {
    if (this._authService.isLogined) {
      this._authService.loginedUser.productsInCart.push(product.id)
      this._router.navigate(['./cart'])
    } else {
      this._router.navigate(['./login'])
    }

  }
}
