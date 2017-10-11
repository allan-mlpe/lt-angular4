import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    
    canActivateChild(
            childRoute: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        
        console.log('CanActivateChild notification [FROM AlunosGuard]');
        console.log(childRoute);
        console.log(state);
        
        return true;
    }

}