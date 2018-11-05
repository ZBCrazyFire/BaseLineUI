import {Injectable} from '@angular/core';


@Injectable()
export class TokenService {

  private loginFlag: boolean;
  private character: string;

  constructor() {
  }

  setLoginFlag(loginFlag: boolean) {
    this.loginFlag = loginFlag;
  }

  getLoginFlag() {
    return this.loginFlag;
  }

  setCharacter(character: string) {
    this.character = character;
  }

  getCharacter() {
    return this.character;
  }

}
