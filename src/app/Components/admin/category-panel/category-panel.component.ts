import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/Services/http.service';
import { ICategories } from 'src/app/interfaces/categories-interface';

@Component({
  selector: 'app-category-panel',
  templateUrl: './category-panel.component.html',
  styleUrls: ['./category-panel.component.css']
})
export class CategoryPanelComponent implements OnInit {

  allCategories$: Observable<ICategories[]>
  categoryToDelete : ICategories
  askAlert: boolean = false

  constructor(private httpService: HttpService, private _router: Router) { }


  ngOnInit() {
    this.allCategories$ = this.httpService.getAllCategories()
  }

  editCategory(category: ICategories) {
    this._router.navigate(['/adminPanel/categoryPanel/edit', category.id])
  }

  deleteCategory(cat : ICategories) {
    this.askAlert = true
    this.categoryToDelete = cat
  }

  deleteOrNot(deleteMode: boolean) {
    this.askAlert = false

    if (deleteMode == true) {
      this.httpService.deleteCategory(this.categoryToDelete).subscribe((cat) => {
      })      
    }

    this.allCategories$ = this.httpService.getAllCategories()
  }

  addNewCategory() {
    this._router.navigate(['/adminPanel/categoryPanel/addcategory'])
  }
}
