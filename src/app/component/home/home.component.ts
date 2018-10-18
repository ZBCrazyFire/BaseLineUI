import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../share/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }

}
