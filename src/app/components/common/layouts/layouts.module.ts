import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {basicComponent} from './basic.component';

import {NavigationModule} from '../navigation/navigation.module';
import {TopnavbarModule} from '../topnavbar/topnavbar.module';
import {FooterModule} from '../footer/footer.module';

@NgModule({
    declarations: [ basicComponent],
    imports     : [BrowserModule, RouterModule, NavigationModule, TopnavbarModule, FooterModule],
    exports     : [ basicComponent]
})

export class LayoutsModule {}
