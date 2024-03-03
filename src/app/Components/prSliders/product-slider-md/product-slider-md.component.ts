import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';
import { ISliderMd } from 'src/app/interfaces/sliderMd-interface';

@Component({
  selector: 'app-product-slider-md',
  templateUrl: './product-slider-md.component.html',
  styleUrls: ['./product-slider-md.component.css']
})
export class ProductSliderMdComponent implements OnInit {

  allprpducts: IProduct[]
  sliderProducts$ : Observable<ISliderMd[]>
  constructor(private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.sliderProducts$ = this._httpService.getAllSliderMdProducts()
  }



  onSeeAllProducts(pr : ISliderMd) {
    this._router.navigate(['./products' , pr.sliderMainCategory , pr.sliderSubCategory])
  }

}
