import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  constructor(private _location : Location) {}
  
  goBack() {
    this._location.back()
  }
  
}
