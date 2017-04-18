import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserComponent } from "./user.component";
import { CrudModule } from "../../components/common/crud/crud.module";

@NgModule({
    declarations: [UserComponent],
    imports: [BrowserModule, CrudModule],
})

export class UserModule { }