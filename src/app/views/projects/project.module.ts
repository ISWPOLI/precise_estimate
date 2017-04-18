import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterEpic } from "../../pipes/filterEpic"
import { FilterRelease } from "../../pipes/filterRelease"
import { FilterSprint } from "../../pipes/filterSprint"
import { FilterStory } from "../../pipes/filterStory"
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { ProjectComponent } from './project.component';
import { Ng2Webstorage } from 'ng2-webstorage';


@NgModule({
    declarations: [ProjectComponent, FilterEpic, FilterRelease, FilterSprint, FilterStory],
    imports: [BrowserModule, FormsModule, Ng2Webstorage, ReactiveFormsModule, ModalModule.forRoot(), BootstrapModalModule]
})

export class ProjectModule { }
