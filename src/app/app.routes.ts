import { Routes } from '@angular/router';
import { mainViewComponent } from './views/main-view/main-view.component';
import { ProjectComponent } from './views/projects/project.component';
import { TrackingComponent } from './views/tracking/tracking.component';
import { AbilityComponent } from './views/ability/ability.component';
import { RoleassignmentComponent } from './views/roleassignment/roleassignment.component';
import { CostreportComponent } from './views/costreport/costreport.component';
import { ProgressreportComponent } from './views/progressreport/progressreport.component';
import { ResourcereportComponent } from './views/resourcereport/resourcereport.component';
import { UserComponent } from './views/user/user.component';
import { ProfilesComponent } from './views/profiles/profiles.component';
import { PermissionsComponent } from './views/permissions/permissions.component';
import { HabilitiesComponent } from './views/habilities/habilities.component';
import { RolesComponent } from './views/roles/roles.component';
import { DomainsComponent } from './views/domains/domains.component';
import { loginComponent } from './views/login/login.component';
import { registerComponent } from './views/register/register.component';


export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'mainView', component: mainViewComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: 'ability', component: AbilityComponent },
  { path: 'roleassignment', component: RoleassignmentComponent },
  { path: 'costreport', component: CostreportComponent },
  { path: 'progressreport', component: ProgressreportComponent },
  { path: 'resourcereport', component: ResourcereportComponent },
  { path: 'user', component: UserComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'habilities', component: HabilitiesComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'domains', component: DomainsComponent },
  { path: 'login', component: loginComponent },
  { path: 'register', component: registerComponent },
  // Handle all other routes
  { path: '**', component: mainViewComponent }
];
