import { CanActivate, Router } from '@angular/router';
import{ActivatedRouteSnapshot,RouterStateSnapshot}  from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable( {providedIn:'root'})
export class ProductRoutGuard implements CanActivate {
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot ): boolean  {
    
     if(!Number.isInteger(+route.paramMap.get('id'))){
         this.router.navigate(['/products']);
         return false;
     }
     return true;
    }

}