import { Component } from '@angular/core';
import {DialogComponent, DialogService} from 'ngx-bootstrap-modal';
import {HttpService} from '../../../share/http.service';

export interface Rejestration {
  title: string;
  message: string;
}
@Component({
  selector: 'app-rejestration',
  templateUrl: './rejestration.component.html',
  styleUrls: ['./rejestration.component.css']
})
export class RejestrationComponent extends DialogComponent<Rejestration, null> implements Rejestration {
  title: string;
  message: string;
  name: string;
  password: string;
  rejestrationResponse: object;
  constructor(private httpService: HttpService, dialogService: DialogService) {
    super(dialogService);
  }
  rejestration() {
    const params = {
      'name': this.name,
      'password': this.password
    };
    this.httpService.rejestration(params).subscribe((res: Response) => {
      this.rejestrationResponse = res;
      if ( this.rejestrationResponse['status'] === 'success') {
        this.close();
        alert('注册成功');
      } else {
        this.close();
         const message = this.rejestrationResponse['result']['message'];
        alert('注册失败' + '\n' + '原因：' + message);
      }
    });
  }
}
