import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import 'rxjs/operators/map';


@Injectable()
export class HttpService {
  private baseUrl = 'api/api';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private httpclient: HttpClient) {
  }
  queryUser(params) {
    return this.httpclient.post(this.baseUrl + '/query/user', params);
  }
  deleteUser(options) {
    return this.httpclient.delete(this.baseUrl + '/delete/user', options);
  }
  login(params) {
    return this.httpclient.post(this.baseUrl + '/user/login', params);
  }
  rejestration(params) {
    return this.httpclient.post(this.baseUrl + '/add/user', params);
  }
}
