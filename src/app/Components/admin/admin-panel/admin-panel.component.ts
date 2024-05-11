import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { IUser } from 'src/app/interfaces/user-interface';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {


  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    
  }

  logOut() {
    this._authService.logOut()
    this._router.navigate(['./'])
  }

  
  goToCategoryPanel() {
    this._router.navigate(['./adminPanel/categoryPanel'])
    
  }



}
