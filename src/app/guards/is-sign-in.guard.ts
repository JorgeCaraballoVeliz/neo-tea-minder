import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class isSignInGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const id = route.paramMap.get('id');
    // if (id === 'olo') {
    //   return true;
    // }
    // this.router.navigate(['/teas/sii']);
    // return false;
    return true;
  }
}

/*
const id = route.paramMap.get('id');
  if (id === 'olo') {
    return true;
  }
 
  return  this.router.navigate(['/tea/sii']);
*/