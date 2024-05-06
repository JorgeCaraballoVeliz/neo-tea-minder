import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class isSignInGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logged = sessionStorage.getItem('loggedId');
    if (logged) {
      this.router.navigate(['/teas']);
      return false;
    }
    
    return true;
    // return true;
  }
}

/*
const id = route.paramMap.get('id');
  if (id === 'olo') {
    return true;
  }
 
  return  this.router.navigate(['/tea/sii']);
*/