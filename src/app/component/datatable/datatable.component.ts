import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import {HttpService} from '../../share/http.service';
import {PageChangedEvent} from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  allArray: any;
  array = [];
  index: number;
  currentPage = 1;
  totalItems: number;
  response: object;

  constructor(private httpService: HttpService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.queryAllUser();
  }

  delete(data) {
    const options = {
      body: {
        'name': data.name
      }
    };
    this.httpService.deleteUser(options).subscribe((res) => {
      this.queryAllUser();
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    });
  }

  pageChanged(event: PageChangedEvent) {
    this.array = [];
    for (let i = 0; i < 10; i++) {
      if ((this.currentPage * 10 + i) === this.totalItems) {
        break;
      }
      this.array[i] = this.allArray[(event.page - 1) * 10 + i];
    }
  }

  queryAllUser() {
    const params = {};
    this.httpService.queryUser(params).subscribe((res: Response) => {
      this.response = res;
      this.array = [];
      this.allArray = this.response['result'].userList;
      this.totalItems = this.allArray.length;
      for (let i = 0; i < 10; i++) {
        if (((this.currentPage - 1) * 10 + i) === this.totalItems) {
          break;
        }
        this.array[i] = this.allArray[(this.currentPage - 1) * 10 + i];
      }
    });
  }
}
