import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, defer, fromEvent, map, mergeAll, mergeMap, of, toArray } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navBoxHidden: boolean = true
  idToShowHide: number
  isLogined: boolean
  showOrHide: boolean[] = [true, true, true, true, true]
  searchedItems: string[]
  userSerchedString: string
  // navBar
  activeIcon = {
    'user': false,
    'home': false,
    'cart': false,
    'list': false,
  }
  // mega menu
  openMegaMenu = false

  constructor(private _authSerivce: AuthService, private _router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.isLogined = this._authSerivce.isLogined   
  }

  onUserIconClicked() {
    if (this._authSerivce.isAdmin)
      this._router.navigate(['./adminPanel'])
    else
      this._router.navigate(['./dashboard'])
  }

  onUserSearch() {
    const encodedSearchString = encodeURIComponent(this.userSerchedString);
    this._router.navigate(['search'], { queryParams: { s: encodedSearchString } });
  }


  onBarClicked() {
    this.navBoxHidden = !this.navBoxHidden
  }

  onCartClicked() {
    if (this.isLogined == true) {
      this._router.navigate(['./cart'])
    } else {
      this._router.navigate(['./auth/login'])
    }
  }

  onLoginClicked() {
    this._router.navigate(['./auth/login'])
  }

  showAndHideSubMenu(id: number) {
    for (let i = 0; i < 5; i++) {
      if (i != id)
        this.showOrHide[i] = true
    }

    this.showOrHide[id] = !this.showOrHide[id]

    const asd = document.querySelector(".fa-solid")
  }

  goToHome() {
    this._router.navigate([''])
  }

  toggleIcon(icon: string) {
    this.activeIcon
    Object.keys(this.activeIcon).forEach((k) => this.activeIcon[k] = false)
    this.activeIcon[icon] = true
  }

  openMegaMenutoggle() {
    this.openMegaMenu = !this.openMegaMenu
  }

}


