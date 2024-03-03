import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-sm',
  templateUrl: './card-sm.component.html',
  styleUrls: ['./card-sm.component.css']
})
export class CardSmComponent {

  @Input('product') product

  constructor(private _router : Router) {}

  onCardClicked(){
    this._router.navigate(['/product' , this.product.id])
  }
}
