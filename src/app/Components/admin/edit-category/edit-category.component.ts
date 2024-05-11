import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/Services/http.service';
import { ICategories } from 'src/app/interfaces/categories-interface';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryId: number
  category: ICategories
  editorForm: FormGroup

  constructor(private _activeRoute: ActivatedRoute,
    private _httpService: HttpService,
    private _fb: FormBuilder,
    private _router : Router) { }

  ngOnInit() {
    this._activeRoute.params.subscribe((qp) => {
      this.categoryId = +qp['id']
    })

    this._httpService.getCategoryById(this.categoryId).subscribe((category) => {
      this.category = category
    })

  }

  onSubmit() {
    this._httpService.updateCategories(this.category).subscribe((cat) => {
      this.category = cat

    })

    this._router.navigate(['/adminPanel/categoryPanel'])
    
  }
  
}
