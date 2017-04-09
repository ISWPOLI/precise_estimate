import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RolesComponent } from "./roles.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [RolesComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
})

export class RolesModule { }