import { Component, OnInit } from '@angular/core';
import { HttpService } from './Services/http.service';
import { IUser } from './interfaces/user-interface';
import { IProduct } from './interfaces/product-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
