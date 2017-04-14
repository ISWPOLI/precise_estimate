import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from 'angular2-highcharts';
import { ResourcereportComponent } from "./resourcereport.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [ResourcereportComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule, ChartModule.forRoot(require('highcharts'))],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
})

export class ResourcereportModule { }