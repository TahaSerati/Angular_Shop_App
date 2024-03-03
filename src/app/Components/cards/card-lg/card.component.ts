import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product : IProduct

  constructor(private _router : Router) { }

  ngOnInit() {
  }



  onCardClicked(){
    this._router.navigate(['/product' , this.product.id])
  }

}
