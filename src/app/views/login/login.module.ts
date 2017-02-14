import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {loginComponent} from './login.component';
import {Ng2Webstorage} from 'ng2-webstorage';


@NgModule({
    declarations: [loginComponent],
    imports     : [BrowserModule, FormsModule, Ng2Webstorage ]
})

export class LoginModule {}
