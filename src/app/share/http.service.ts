import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import 'rxjs/operators/map';


@Injectable()
export class HttpService {
  private baseUrl = 'api/api';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private httpclient: HttpClient) {
  }
  healthyCheck() {
    return this.httpclient.get(this.baseUrl + '/check/healthy');
  }
  queryUser(params) {
    return this.httpclient.post(this.baseUrl + '/query/user', params
    );
  }
  sendgetHttp() {
    return this.httpclient.get(this.baseUrl + '/getdata/');
  }

  loginHttp(studentName, password) {
    const params = {
      'studentName': studentName,
      'password': password
    };
    return this.httpclient.get(this.baseUrl + '/login', {
      params: params
    });
  }
  addStudent(studentName, password) {
    const params = {
      'studentName': studentName,
      'password': password
    };
    return this.httpclient.post(this.baseUrl + '/addStudent', params
    );
  }
}
