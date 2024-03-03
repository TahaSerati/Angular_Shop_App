import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor(private _location : Location) {}

  goBack() {
    this._location.back()
  }

  all(num: number) {
    let all = document.querySelectorAll('#scroll')
    for (let i in [0, 1, 2, 3, 4]) {
      all[0].children[i].classList.remove('active')
    }
    all[0].children[num].classList.add('active')
    console.log(all[0].children[num].classList.add('active'))

  }

  inLine(num: number) {
    let all = document.querySelectorAll('#scroll')
    for (let i in [0, 1, 2, 3, 4]) {
      all[0].children[i].classList.remove('active')
    }
    all[0].children[num].classList.add('active')
    console.log(all[0].children[num].classList.add('active'))

  }

  paymentLine(num: number) {
    let all = document.querySelectorAll('#scroll')
    for (let i in [0, 1, 2, 3, 4]) {
      all[0].children[i].classList.remove('active')
    }
    all[0].children[num].classList.add('active')
    console.log(all[0].children[num].classList.add('active'))

  }


  expectationLine(num: number) {
    let all = document.querySelectorAll('#scroll')
    for (let i in [0, 1, 2, 3, 4]) {
      all[0].children[i].classList.remove('active')
    }
    all[0].children[num].classList.add('active')
    console.log(all[0].children[num].classList.add('active'))

  }

  canceledOrdersLine(num: number) {
    let all = document.querySelectorAll('#scroll')
    for (let i in [0, 1, 2, 3, 4]) {
      all[0].children[i].classList.remove('active')
    }
    all[0].children[num].classList.add('active')
    console.log(all[0].children[num].classList.add('active'))

  }

}
