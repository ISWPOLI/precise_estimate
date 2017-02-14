import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ng2-webstorage';
import '../rxjs-operators';
import { SAPB1 }  from './B1SLReference';

@Injectable()
export class B1SLSessionService {
    private _B1SLurl = 'https://hanab1.consensusintl.net:50000';

    constructor(private http: Http, private sessionSt: SessionStorageService) { }

    doLogin(LoginInfo: SAPB1.LoginInfo): Observable<SAPB1.B1Session> {
        console.log('Calling B1SL Login');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.post(this._B1SLurl + '/b1s/v1/Login', LoginInfo, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    doLogout(sessionID: string): Observable<any> {

        console.log('Calling B1SL Logout');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.post(this._B1SLurl + '/b1s/v1/Logout', null, options)
            .map((response: Response) => <any> response.json())
            .catch(this.handleError);
    }

    getOrders(paramObject: string): Observable<any> {
        console.log('Calling B1SL getOrders');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.get(this._B1SLurl + '/b1s/v1/Orders?$select=DocEntry,DocNum,DocDate,DocTotal,NumAtCard,Address2,CardCode,CardName,BusinessPartner/Phone1&$expand=BusinessPartner&$orderby=DocEntry desc&$inlinecount=allpages', options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getNextOrders(nextLink: string): Observable<any> {
        console.log('Calling B1SL getOrders');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.get(this._B1SLurl + nextLink, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPrevOrders(prevLink: string): Observable<any> {
        console.log('Calling B1SL getOrders');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.get(this._B1SLurl + prevLink, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOrderDetail(docEntry: number): Observable<SAPB1.Document> {
        console.log('Calling B1SL getOrderDetail');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        let orderEntry: SAPB1.DocumentKey = new SAPB1.DocumentKey();
        orderEntry.DocEntry = docEntry;

        let slcall: SAPB1.SLCallObject;
        slcall = SAPB1.OrdersEntity.Get(orderEntry, '', '');

        return this.http.get(this._B1SLurl + '/b1s/v1/' + slcall._endpoint +"?$select=DocNum,DocTotal,DocumentLines,EmployeeInfo/FirstName,EmployeeInfo/OfficePhone,EmployeeInfo/eMail,EmployeeInfo/Picture&$expand=EmployeeInfo", options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getOrdersByBP(BPFilter: string): Observable<any> {
        console.log('Calling B1SL getOrders');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        return this.http.get(this._B1SLurl + "/b1s/v1/BusinessPartners('" + BPFilter +"')/Orders?$select=DocEntry,DocNum,DocDate,DocTotal,NumAtCard,Address2,CardCode,CardName,BusinessPartner/Phone1&$expand=BusinessPartner&$orderby=DocEntry desc", options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getBPs(paramObject: string): Observable<any> {
        console.log('Calling B1SL getBPs');
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({ headers: headers });
        options.withCredentials = true;

        let qString: string = '';
        qString = paramObject === '' ? '/b1s/v1/BusinessPartners?$select=CardCode,CardName&$orderby=CardName asc&$inlinecount=allpages' : paramObject;

        return this.http.get(this._B1SLurl + qString, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        console.error(errMsg);
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
