import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";

@Injectable()
export class CursosGuard implements CanActivateChild {
    
    canActivateChild(
            childRoute: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        console.log('CanActivateChild notification [FROM CursosGuard]');
        
        return true;
    }

}