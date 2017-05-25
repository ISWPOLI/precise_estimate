import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { registerComponent } from "./register.component";
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [registerComponent],
    imports: [BrowserModule, FormsModule],
})

export class RegisterModule { }