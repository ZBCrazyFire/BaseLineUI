import {Component, OnInit} from '@angular/core';
import {AngularEchartsModule} from 'echarts';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  option = {};


  constructor() {
  }

  ngOnInit() {
    this.option = {
      title: {
        text: '不同地区点击量分布',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical', x: 'left', data: ['点击量']
      },
      dataRange: {
        min: 0, max: 2500, x: 'left', y: 'bottom', text: ['高', '低'], calculable: true},
      toolbox: {show: true, orient: 'vertical', x: 'right',
        y: 'center',
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series: [
        {
          name: '点击量',
          type: 'map',
          mapType: 'china',
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          data: [{
            name: '北京',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '天津',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '上海',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '重庆',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '河北',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '河南',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '云南',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '辽宁',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '黑龙江',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '湖南',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '安徽',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '山东',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '新疆',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '江苏',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '浙江',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '江西',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '湖北',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '广西',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '甘肃',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '山西',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '内蒙古',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '陕西',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '吉林',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '福建',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '贵州',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '广东',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '青海',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '西藏',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '四川',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '宁夏',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '海南',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '台湾',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '香港',
            value: Math.round(Math.random() * 1000)
          }, {
            name: '澳门',
            value: Math.round(Math.random() * 1000)
          }]
        }
      ]
    };
  }

}
