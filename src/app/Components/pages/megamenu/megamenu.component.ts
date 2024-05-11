import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';
import { ICategories } from 'src/app/interfaces/categories-interface';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.css']
})
export class MegamenuComponent {

  
  categories: Observable<ICategories[]>
  allParentSubs

  megaMenuContent: string = 'موبایل'

  constructor(private httpService: HttpService , private _router : Router) { }

  ngOnInit() {
    this.categories = this.httpService.getAllCategories()

  }

  changeMegaMenuContent(name: string) {
    this.megaMenuContent = name
  }

  moveToPlace(parentSub) {
    this._router.navigate([`/${parentSub.address}`])
  }
  
  moveToPlaceWithSort(parentSub , children , child) {
    this._router.navigate([`/${parentSub.address}`]  , {queryParams : {sort : child }})
    
  }



}
