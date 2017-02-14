import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import { SessionStorageService } from 'ng2-webstorage';
import { B1SLSessionService } from './services/B1SLSessionService';

// App views
import {MainViewModule} from './views/main-view/main-view.module';
import {MinorViewModule} from './views/minor-view/minor-view.module';
import {LoginModule} from './views/login/login.module';
import {RegisterModule} from './views/register/register.module';
import {SalesOrdersViewModule} from './views/sales-orders/sales-orders-view.module';

// App modules/components
import {NavigationModule} from '../app/components/common/navigation/navigation.module';
import {TopnavbarModule} from '../app/components/common/topnavbar/topnavbar.module';
import {FooterModule} from '../app/components/common/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    HttpModule,

    // Views
    MainViewModule,
    MinorViewModule,
    LoginModule,
    RegisterModule,
    SalesOrdersViewModule,

    // App modules
    NavigationModule,
    TopnavbarModule,
    FooterModule,

    // Vendor stuff


    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, SessionStorageService, B1SLSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
