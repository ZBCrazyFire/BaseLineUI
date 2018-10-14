import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  date: any;
  showDate: string;
  showDay: string;
  addArray = [];
  xcood: any;
  ycood: any;
  showWeek = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  constructor() {
  }

  ngOnInit() {
    this.date = new Date();
    this.showDay = this.date.getDate();
    this.showDate = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.showDay + ' ' + this.showWeek[this.date.getDay()];
  }

  additem() {
    // this.xcood = (document.getElementsByName('xcood')[0] as HTMLInputElement).value;
    // this.ycood = (document.getElementsByName('ycood')[0] as HTMLInputElement).value;
    this.addArray.push({
      xcood: this.xcood,
      ycood: this.ycood
    });
  }
}
