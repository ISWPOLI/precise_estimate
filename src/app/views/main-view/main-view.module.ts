import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { mainViewComponent } from "./main-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [mainViewComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
})

export class MainViewModule { }