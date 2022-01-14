import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InsertcfComponent } from './insertcf/insertcf.component';
import { CflistComponent } from './cflist/cflist.component';
import { ComparisonreportsComponent } from './comparisonreports/comparisonreports.component';
import { ComparecfComponent } from './comparecf/comparecf.component';
import { AnalyzecfComponent } from './analyzecf/analyzecf.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
//import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: 'home',
  component: PagesComponent,
  //canActivate: [AuthGuard],
  children: [
    {
      path: 'login',
      component: LoginComponent,

    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'insertcf',
      component: InsertcfComponent,

    },
    {
      path: 'cflist',
      component: CflistComponent,
    },
    {
      path: 'comparisonreports',
      component: ComparisonreportsComponent,
    },
    {
      path: 'comparecf',
      component: ComparecfComponent,
    },
    {
      path: 'analyzecf',
      component: AnalyzecfComponent,
    },
    {
      path: 'createuser',
      component: CreateuserComponent,
    },
    {
      path: 'manageusers',
      component: ManageusersComponent,
    },

    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
