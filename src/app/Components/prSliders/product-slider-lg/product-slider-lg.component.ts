import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-product-slider-lg',
  templateUrl: './product-slider-lg.component.html',
  styleUrls: ['./product-slider-lg.component.css']
}) 
export class ProductSliderLgComponent {

  sliderProductContainer$ : Observable<IProduct[]>

  @Input() wantedMainCategory : string
  @Input() wantedSubCategory : string

  constructor(private _httpService: HttpService , private _router : Router , private _dataService : DataService) { }

  ngOnInit() {
    this.sliderProductContainer$ = this._httpService.getAllProducts().pipe(map((pro) => pro.filter((item) => item.productMainCategory == this.wantedMainCategory &&  item.productSubCategory == this.wantedSubCategory )))
  }

  onCardClicked(pr : IProduct) {
    this._router.navigate(['/product' , pr.id])
  }
  
  onSeeAllProducts() {
    this._router.navigate(['./products' , this.wantedMainCategory, this.wantedSubCategory])
  }
}
