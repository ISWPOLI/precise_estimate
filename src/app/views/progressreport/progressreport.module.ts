import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
import { ProgressreportComponent } from "./progressreport.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

/**
 * Function to generate a Factory Method to use a highcharts library
 */
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
    declarations: [ProgressreportComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule, ChartModule],
    providers: [
        { provide: WidgetRegistry, 
          useClass: DefaultWidgetRegistry },
        { provide: HighchartsStatic,
          useFactory: highchartsFactory}],
})

export class ProgressreportModule { }