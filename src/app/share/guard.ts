import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenService} from './token.service';

@Injectable()
export class Guard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) {
  }

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('test');
    if (this.tokenService.getLoginFlag()) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
