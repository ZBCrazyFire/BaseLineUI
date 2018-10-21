import {Component, OnInit} from '@angular/core';
import {DialogService} from 'ngx-bootstrap-modal';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  logflag: boolean;
  result: object;

  constructor(public dialogService: DialogService) {
  }

  ngOnInit() {
  }

  login() {
    this.dialogService.addDialog(LoginComponent, {title: 'Login', message: ''}).subscribe((isConfirmed) => {
      if (isConfirmed) {
        this.logflag = true;
      }
    });
  }

  logout() {
    this.logflag = false;
  }
}
