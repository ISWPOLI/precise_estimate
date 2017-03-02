import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {ProjectComponent} from './project.component';
import {Ng2Webstorage} from 'ng2-webstorage';


@NgModule({
    declarations: [ProjectComponent],
    imports     : [BrowserModule, FormsModule, Ng2Webstorage, ReactiveFormsModule ]
})

export class ProjectModule {}
