import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class isLoggedInGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {  const logged = sessionStorage.getItem('loggedId');
    const logged2  = sessionStorage.getItem('loggedId');
 
  if (!logged2) {
    console.log(logged2);
      this.router.navigate(['/auth/login']);
      return false;
    }
    
    return true;
  }
};
