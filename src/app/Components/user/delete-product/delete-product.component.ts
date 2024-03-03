import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  constructor(private location : Location) {}

  goBack() {
    this.location.back()
  }
}
