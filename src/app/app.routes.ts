import {Routes} from '@angular/router';
import {mainViewComponent} from './views/main-view/main-view.component';
import {minorViewComponent} from './views/minor-view/minor-view.component';
import {loginComponent} from './views/login/login.component';
import {registerComponent} from './views/register/register.component';

import {salesOrdersViewComponent} from './views/sales-orders/sales-orders-view.component';
import {salesOrdersDetailViewComponent} from './views/sales-orders/sales-orders-detail-view.component';

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'mainView', pathMatch: 'full'},
  { path: 'mainView', component: mainViewComponent },
  { path: 'minorView', component: minorViewComponent },
  { path: 'SalesOrders', component: salesOrdersViewComponent },
  { path: 'SalesOrders/:id', component: salesOrdersDetailViewComponent },
  { path: 'login', component: loginComponent },
  { path: 'register', component: registerComponent },

  // Handle all other routes
  {path: '**',    component: mainViewComponent }
];