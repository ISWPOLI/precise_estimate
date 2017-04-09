import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DomainsComponent } from "./domains.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CrudModule } from "../../components/common/crud/crud.module";

@NgModule({
    declarations: [DomainsComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, CrudModule],
})

export class DomainsModule { }