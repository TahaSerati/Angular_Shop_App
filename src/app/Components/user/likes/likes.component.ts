import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  constructor(private _location : Location) {}

  goBack() {
    this._location.back()
  }
}
