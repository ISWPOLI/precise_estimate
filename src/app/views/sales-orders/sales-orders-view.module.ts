import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { salesOrdersViewComponent } from './sales-orders-view.component';
import { salesOrdersDetailViewComponent } from './sales-orders-detail-view.component';
import { AddressFormatPipe } from '../../pipes/address-format-pipe';
import { SelectModule } from '../../../../node_modules/angular2-select';
import { Collapse } from '../../collapse.component';
import {DateRangePickerDirective} from '../../../../node_modules/angular2-daterangepicker';
import {DaterangepickerComponent} from './daterangepicker.component';
import { MatchHeightDirective } from '../../match-height.directive';

import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [salesOrdersViewComponent, AddressFormatPipe, salesOrdersDetailViewComponent, Collapse, DateRangePickerDirective, DaterangepickerComponent, MatchHeightDirective],
    imports     : [BrowserModule, RouterModule, FormsModule, SelectModule, CommonModule],
    exports: [ DaterangepickerComponent ]
})

export class SalesOrdersViewModule {}
