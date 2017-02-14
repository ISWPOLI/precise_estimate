import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {SessionStorageService} from 'ng2-webstorage';

import { B1SLSessionService } from '../../services/B1SLSessionService';
import { SAPB1 } from '../../services/B1SLReference';
declare var toastr: any;

@Component({
    selector: 'salesOrdersDetailView',
    templateUrl: './sales-orders-detail-view.template.html'
})
export class salesOrdersDetailViewComponent implements OnInit {
    order: SAPB1.Document;
    orderID: number = null;

    constructor(
        private sessionSt: SessionStorageService,
        private b1SLService: B1SLSessionService,
        private route: ActivatedRoute,
        private router: Router) {
        /*
        this.LoggedInUser = this.sessionSt.retrieve('LoggedInUser');
        this.loggedIn = this.sessionSt.retrieve('loggedIn');
        this.sessionID = this.sessionSt.retrieve('sessionID');

        console.log("SessionID entering SalesOrdersDetail page: " + this.sessionID);
        console.log("Logged In entering SalesOrdersDetail page: " + this.loggedIn);
        console.log("Logged User entering SalesOrdersDetail page: " + this.LoggedInUser);
        */
    }

    ngOnInit() {
        this.orderID = +this.route.snapshot.params['id'];
        if (!isNaN(this.orderID) && this.orderID > 0) {

            this.getOrderDetail(this.orderID);
        }
    }

    getOrderDetail(docEntry: number) {
        this.b1SLService.getOrderDetail(docEntry)
            .subscribe(
                data => {
                this.order = data;
            } , error => {
                console.log('Error if any: ' + error);
                toastr.error('Error retrieving order ' + docEntry, 'Error');
                this.router.navigate(['SalesOrders']);
        });
    }
}
