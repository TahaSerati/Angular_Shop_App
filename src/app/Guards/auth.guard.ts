import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const url = state.url;
  const _authService: AuthService = inject(AuthService);
  const _router: Router = inject(Router);

  
  if (url.includes('/login') || url.includes('/register')) {
    if (_authService.isLogined == false) {
      return true;
    } else {
      _router.navigate(['/']);
      return false;
    }
    


  } else if (url.includes('/dashboard')) {

    if (_authService.isLogined == true) {
      return true;
    } else {
      _router.navigate(['/login']);
      return false;
    }


  } else if (url.includes('/cart')) {

    if (_authService.isLogined == true) {
      return true;
    } else {
      _router.navigate(['/login']);
      return false;
    }


  } else {
    return true
  }

};
