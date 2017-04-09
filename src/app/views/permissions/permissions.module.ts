import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PermissionsComponent } from "./permissions.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [PermissionsComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
})

export class PermissionsModule { }