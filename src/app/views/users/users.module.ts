import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./users.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [UserComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, SchemaFormModule],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }],
})

export class UserModule { }