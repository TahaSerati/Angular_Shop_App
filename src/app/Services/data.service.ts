import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product-interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  WEBLANG: string
  constructor() { }

  ngOnInit() {
    localStorage.setItem("WEBLANG", "fa")
    this.WEBLANG = localStorage.getItem("WEBLANG")
  }

  changeLang() {
    if (this.WEBLANG == 'fa')
      localStorage.setItem("WEBLANG", "EN")
    else
      localStorage.setItem("WEBLANG", "fa")

  }

}
