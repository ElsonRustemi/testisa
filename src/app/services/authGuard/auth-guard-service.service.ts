import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CONST } from '../../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(): boolean{
    
   if (localStorage.getItem('utenteLoggato')===null) {
        this.router.navigate(['login']);
        return false;
    }
      
    return true; 
    
  }
  
}
