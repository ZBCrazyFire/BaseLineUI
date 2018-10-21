import {Component, EventEmitter, Output} from '@angular/core';
import {DialogComponent, DialogService} from 'ngx-bootstrap-modal';
import {HttpService} from '../../share/http.service';
import {RejestrationComponent} from './rejestration/rejestration.component';

export interface ConfirmModel {
  title: string;
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  name: string;
  password: string;
  loginResponse: object;

  constructor(private httpService: HttpService, dialogService: DialogService) {
    super(dialogService);
  }

  login() {
    const params = {
      'name': this.name,
      'password': this.password
    };
    this.httpService.login(params).subscribe((res: Response) => {
      this.loginResponse = res;
      if ( this.loginResponse['status'] === 'success') {
        this.close(true);
        alert('登录成功');
      } else {
        this.close(false);
        const message = this.loginResponse['result']['message'];
        alert('登录失败' + '\n' + '原因：' + message);
      }
    });
  }

  rejestration() {
    this.close();
    this.dialogService.addDialog(RejestrationComponent, {title: 'Rejestration', message: ''});
  }
}
