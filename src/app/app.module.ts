import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';

// Services
import { SessionStorageService } from 'ng2-webstorage';
import { B1SLSessionService } from './services/B1SLSessionService';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { AbilityService } from './services/ability.service';

// App views
import { MainViewModule } from './views/main-view/main-view.module';
import { ProjectModule } from './views/projects/project.module';
import { TrackingModule } from './views/tracking/tracking.module';
import { AbilityModule } from './views/ability/ability.module';
import { RoleassignmentModule } from './views/roleassignment/roleassignment.module';
import { CostreportModule } from './views/costreport/costreport.module';
import { ProgressreportModule } from './views/progressreport/progressreport.module';
import { ResourcereportModule } from './views/resourcereport/resourcereport.module';
import { UserModule } from './views/user/user.module';
import { ProfilesModule } from './views/profiles/profiles.module';
import { PermissionsModule } from './views/permissions/permissions.module';
import { HabilitiesModule } from './views/habilities/habilities.module';
import { RolesModule } from './views/roles/roles.module';
import { DomainsModule } from './views/domains/domains.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/register/register.module';

// App modules/components
import { NavigationModule } from '../app/components/common/navigation/navigation.module';
import { TopnavbarModule } from '../app/components/common/topnavbar/topnavbar.module';
import { FooterModule } from '../app/components/common/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    // Views
    MainViewModule,
    ProjectModule,
    TrackingModule,
    AbilityModule,
    RoleassignmentModule,
    CostreportModule,
    ProgressreportModule,
    ResourcereportModule,
    UserModule,
    ProfilesModule,
    PermissionsModule,
    HabilitiesModule,
    RolesModule,
    DomainsModule,
    LoginModule,
    RegisterModule,


    // App modules
    NavigationModule,
    TopnavbarModule,
    FooterModule,

    // Vendor stuff


    RouterModule.forRoot(ROUTES)
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    SessionStorageService,
    B1SLSessionService,
    LoginService,
    UserService,
    ProjectService,
    AbilityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
