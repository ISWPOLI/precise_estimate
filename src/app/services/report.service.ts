import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigModule } from './config';
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {

  private endpoint_url: string;

  constructor(public http: Http) {
    this.endpoint_url = ConfigModule.APIURL + "/task";
    this.http = http;
  }

  public assigmentTaskByUser(idPrj:number) {
   let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.endpoint_url+ '/getTaskforUser?idProject='+idPrj, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
