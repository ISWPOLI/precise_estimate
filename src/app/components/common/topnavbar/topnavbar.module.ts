import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TopnavbarComponent} from './topnavbar.component';
import {RouterModule} from '@angular/router';
import {Ng2Webstorage} from 'ng2-webstorage';
import {SessionStorageService} from 'ng2-webstorage';

@NgModule({
    declarations: [TopnavbarComponent],
    imports     : [BrowserModule, Ng2Webstorage, RouterModule],
    exports     : [TopnavbarComponent],
    providers   : [SessionStorageService]
})

export class TopnavbarModule {}
