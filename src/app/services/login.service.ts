import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  private endpoint_url: string;

  constructor(public http: Http) {
    this.endpoint_url = "http://localhost:3000/api/login";
    this.http = http;
  }

  public login(email: string, password: string) {
    return this.http.get(this.endpoint_url + "?email=" + email + "&password=" + password).map(res => res.json());
  }

}
