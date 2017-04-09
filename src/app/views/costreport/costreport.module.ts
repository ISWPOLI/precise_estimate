import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CostreportComponent } from "./costreport.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [CostreportComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
})

export class CostreportModule { }