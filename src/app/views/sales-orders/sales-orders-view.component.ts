import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService, SessionStorage } from 'ng2-webstorage';
import { B1SLSessionService } from '../../services/B1SLSessionService';

import { SAPB1 } from '../../services/B1SLReference';
declare var jQuery: any;
declare var toastr: any;
declare var moment: any;

@Component({
    selector: 'salesOrdersView',
    templateUrl: './sales-orders-view.template.html'
})
export class salesOrdersViewComponent implements OnInit {

    /* Properties to keep track of logged in session */
    @SessionStorage()
    LoggedInUser: string;
    @SessionStorage()
    loggedIn: string;
    @SessionStorage()
    B1Session: SAPB1.B1Session;
    /* Properties to keep track of logged in session */

    /* Properties for order list and pagination */
    _firstResultFlag: boolean = true;
    _orderList: SAPB1.Document[];
    _orderListCount: number;
    _orderListNext: string = '';
    _orderListPrev: string = '';
    /* Properties for order list and pagination */

    /* BP list dropdown properties */
    BPFilterList: Array<any>;
    BPFilterListCount: number;
    BPFilter: string; // Array of strings for multi select, string for single select.
    BPFilterText: string = '< Select a BP to filter by >';
    canClearSelect: boolean = true;
    _BPList: SAPB1.BusinessPartner[];
    _BPListCount: number;
    _BPListNext: string;
    /* BP list dropdown properties */

    _dateFromFilter: any;
    _dateToFilter: any;

    // collapse content
    public isCollapsedContent: boolean = false;

    /* Property to be able to use JQUERY */
    $: any = jQuery;
    /* Property to be able to use JQUERY */

    dateOptions: Object;

    constructor(private sessionSt: SessionStorageService, private _b1SLService: B1SLSessionService, private _router: Router) {

    }

    ngOnInit() {
        this.getOrders();
        this.getBPs();
        this.BPFilterList = [];
        this.BPFilterListCount = 0;
        this._orderListCount = 0;
        let date = new Date();
        date = new Date(date.getFullYear(), date.getMonth(), 1);
        this._dateFromFilter = date.getFullYear() + '-' + (date.getMonth() + 1) + '-01';
        date = new Date();
        date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        this._dateToFilter = date.getFullYear() + '-' + month + '-' + date.getDate();
        this.dateOptions = {
            alwaysShowCalendars: true,
            startDate: moment().subtract(29, 'days'),
            endDate: moment(),
            ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        };
    }

    ngAfterViewInit() {
        // Run correctHeight function on load and resize window event
        // jQuery(window).bind('load resize', function() {
        //   correctHeight();
        //    detectBody();
        // });

    }

    getOrders() {
        this._b1SLService.getOrders('')
            .subscribe(
            data => {
                this._orderList = data.value;
                this._orderListNext = data['odata.nextLink'];
                this._orderListCount = data['odata.count'];
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    getNextOrders() {
        this._b1SLService.getNextOrders(this._orderListNext)
            .subscribe(
            data => {
                this._orderList = data.value;
                this._firstResultFlag = false;
                // We need to grab the value that was in next, and before we update the new value for next, 
                // we will substract 40 and assign that to previous.
                let skipPos = this._orderListNext.lastIndexOf('&$skip=');
                if (skipPos > 0) {
                    let skipAmount = this._orderListNext.substring(skipPos + 7);
                    let newSkipAmount: number = +skipAmount - 20;
                    newSkipAmount = newSkipAmount > 0 ? newSkipAmount : 0
                    let tempQuery = '';
                    if (newSkipAmount > 0) {
                        tempQuery = this._orderListNext.replace('&$skip=' + skipAmount, '&$skip=' + newSkipAmount);
                    } else {
                        tempQuery = this._orderListNext.replace('&$skip=' + skipAmount, '');
                        // this._firstResultFlag = true;
                    }

                    this._orderListPrev = tempQuery;
                }
                this._orderListNext = data['odata.nextLink'];
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    getPrevOrders() {
        this._b1SLService.getPrevOrders(this._orderListPrev)
            .subscribe(
            data => {
                this._orderList = data.value;
                this._orderListNext = data['odata.nextLink'];

                if (!this._firstResultFlag) {
                    let tempPrev = this._orderListPrev;
                    let skipPos = tempPrev.lastIndexOf('&$skip=');
                    if (skipPos > 0) {
                        let skipAmount = tempPrev.substring(skipPos + 7);
                        let newSkipAmount: number = +skipAmount - 20;
                        newSkipAmount = newSkipAmount >= 0 ? newSkipAmount : 0;
                        let tempQuery = '';
                        if (newSkipAmount > 0) {
                            tempQuery = tempPrev.replace('&$skip=' + skipAmount, '&$skip=' + newSkipAmount);
                        } else {
                            tempQuery = tempPrev.replace('&$skip=' + skipAmount, '');
                        }
                        this._orderListPrev = tempQuery;

                        // Now that we set the previous query correctly, we need to verify if 
                        // the previous has no skip and the next has a skip of 20.
                        // That should mean that we are on the first set of results..
                        let tempNext = this._orderListNext;
                        let nextSkipPos = tempNext.lastIndexOf('&$skip=');
                        if (nextSkipPos > 0) {
                            let nextSkipAmount = tempNext.substring(nextSkipPos + 7);
                            if (newSkipAmount === 0 && +nextSkipAmount === 20) {
                                this._firstResultFlag = true;
                            }
                        }
                    } else {
                        this._firstResultFlag = true;
                    }
                }
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    getOrdersByBP(BPFilter: string) {
        this._b1SLService.getOrdersByBP(BPFilter)
            .subscribe(
            data => {
                this._orderList = data.value;
                this._orderListNext = data['odata.nextLink'];
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    getBPs() {
        this._b1SLService.getBPs('')
            .subscribe(
            data => {
                this._BPList = data.value;
                this._BPListNext = data['odata.nextLink'];
                this._BPListCount = data['odata.count'];

                // Populate our drop down list with the results of BPs
                this._BPList.forEach(element => {
                    this.BPFilterList.push({ value: element['CardCode'], label: element['CardName'] });
                });
                this.BPFilterListCount = this.BPFilterList.length;
                this.BPFilterList.push({ value: 'Load More', label: 'Load More' });
                // Default a selection to the first value.
                // this.BPFilter = this.BPFilterList[0].value;
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    getBPNext() {
        this._b1SLService.getBPs(this._BPListNext)
            .subscribe(
            data => {
                this._BPList = data.value;
                this._BPListNext = data['odata.nextLink'];
                this._BPListCount = data['odata.count'];

                // Removing the 'Load More' from wherever it is found
                this.BPFilterList.splice(this.BPFilterList.findIndex(x => x.value === 'Load More'), 1);

                // Populate our drop down list with the results of BPs
                let tempList = this.BPFilterList;
                this.BPFilterList = [];
                tempList.forEach(element => {
                    this.BPFilterList.push(element);
                });

                this._BPList.forEach(element => {
                    this.BPFilterList.push({ value: element['CardCode'], label: element['CardName'] });
                });

                this.BPFilterListCount = this.BPFilterList.length;
                // If there's more BPs to be had, lets add the load more selection back into the end.
                if (this._BPListNext === undefined) {
                }   else {
                    this.BPFilterList.push({ value: 'Load More', label: 'Load More' });
                }

                // Default a selection to the first value.
                // this.BPFilter = this.BPFilterList[0].value;
            },
            error => {
                toastr.error('Failure', 'Unable to retrieve orders');
                console.log('Error retrieving list of orders in Sales Orders component: ' + error);
            });
    }

    onSelected(item) {

        if (item.value === 'Load More') {
            console.log('Loading 20 next BPs');
            this.getBPNext();
        }   else {
            console.log('Filtering list by BP: ' + ' ' + this.BPFilter);
            this.getOrdersByBP(this.BPFilter);
        }
    }

    onDeselected(item) {
        if (item.value === 'Load More') {
            console.log('Loaded more values, dont do anything');
            // Do nothing!
        }   else {
            console.log('deselected: ' + item.value + ', ' + item.label);
            this._orderListPrev = '';
            this._firstResultFlag = true;
            this.getOrders();
        }
    }

    findLoader(BPList) {
        return BPList.value === 'Load More';
    }

    onDateSelected(selectedRange: Object){
        console.log('User changed Date Range selection: ' + selectedRange);
        // Here we need to either do nothing or if we want the api call to be automatic then we need to gather the value from the bp filter
        // And make an api request with these filters.
    }
}
