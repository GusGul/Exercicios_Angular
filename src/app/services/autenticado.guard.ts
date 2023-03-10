import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogadoService } from './logado.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanActivate {
  constructor(
    private logadoService: LogadoService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!this.logadoService.logado){
        this.router.navigateByUrl('/');
        return false
      }

      return this.logadoService.logado;
  }
  


}
