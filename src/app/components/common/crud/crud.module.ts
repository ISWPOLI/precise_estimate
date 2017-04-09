import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CrudComponent } from "./crud.component";
import { KeysPipe } from "../../../pipes/keyValues"
import {
    SchemaFormModule,
    DefaultWidgetRegistry,
    WidgetRegistry
} from 'angular2-schema-form';

@NgModule({
    declarations: [CrudComponent, KeysPipe],
    imports: [BrowserModule, SchemaFormModule],
    exports: [CrudComponent],
    providers: [{ provide: WidgetRegistry, useClass: DefaultWidgetRegistry }]
})

export class CrudModule { }