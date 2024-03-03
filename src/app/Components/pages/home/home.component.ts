import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // numberLocaled : number = 3000000
  // numberLocaledStr : string
  constructor() {
    // this.numberLocaledStr = this.numberLocaled.toLocaleString()
  }

  ngOnInit() {
  }

}
