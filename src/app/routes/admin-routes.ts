import {Routes} from "@angular/router";
import {AdminPanelComponent} from "../modules/admin/admin-panel/admin-panel.component";
import {UsersManagementComponent} from "../modules/admin/users-management/users-management.component";

export const ADMIN_ROUTES: Routes = [
  {
    path:'home',
    component: AdminPanelComponent
  },
  {
    path:'users-management',
    component:UsersManagementComponent
  },
  {
    path:'',
    redirectTo:'home', pathMatch:'full'
  }
]
