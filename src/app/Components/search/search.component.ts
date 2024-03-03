import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/Services/data.service';
import { HttpService } from 'src/app/Services/http.service';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchedProducts$: Observable<IProduct[]>
  arrayOsSearch: string[]
  constructor(private _httpService: HttpService, private _router: Router,
    private _dataService: DataService, private _activeRoute: ActivatedRoute) { }

  ngOnInit() {

    this._activeRoute.queryParams.pipe(
      map((params) => decodeURIComponent(params['s']).split(' '))
    ).subscribe((arr) => {
      this.arrayOsSearch = arr
    })

    this.searchedProducts$ = this._httpService.getAllProducts().pipe(
      map((porducts) => porducts.filter((product) =>
        product.searchItems.find((el) =>
          el == this.arrayOsSearch[0] || el == this.arrayOsSearch[1])))
    )


  }

}
