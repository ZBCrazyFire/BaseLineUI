import {Component, OnInit, Input} from '@angular/core';
import {HttpService} from '../../share/http.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  allArray: any;
  array = [];
  index: number;
  currentPage = 0;
  totalItems: number;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    const params = {};
    this.httpService.queryUser(params).subscribe((res: Response) => {
      this.allArray = res.result.userList;
      for (let i = 0; i < 10 ; i++) {
        if ((this.currentPage * 10 + i) === this.totalItems) {
          break;
        }
        this.array[i] = this.allArray[this.currentPage * 10 + i];
      }
      this.totalItems = this.allArray.length;
    });
  }

  delete(data) {
    this.index = this.array.indexOf(data);
    if (this.index > -1) {
      this.array.splice(this.index, 1);
    }
  }

  pageChanged(event: PageChangedEvent) {
    this.array = [];
    for (let i = 0; i < 10 ; i++) {
      if ((this.currentPage * 10 + i) === this.totalItems) {
        break;
      }
      this.array[i] = this.allArray[(event.page - 1) * 10 + i];
    }
  }
}
