import { NgModule } from '@angular/core';
import { NbMenuModule,
  NbAccordionModule, } from '@nebular/theme';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { TooltipModule } from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng-lts/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './login/login.component';
import { DialogModule } from 'primeng/dialog';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/api';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaginazioneComponent } from './paginazione/paginazione.component';
import { InsertcfComponent } from './insertcf/insertcf.component';
import { CflistComponent } from './cflist/cflist.component';
import { ComparisonreportsComponent } from './comparisonreports/comparisonreports.component';
import { ComparecfComponent } from './comparecf/comparecf.component';
import { AnalyzecfComponent } from './analyzecf/analyzecf.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ManageusersComponent } from './manageusers/manageusers.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ChartModule,
    TooltipModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    NbTabsetModule,
    NbListModule,
    NgxEchartsModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbAccordionModule,
    DialogModule,
    NgbPaginationModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    CardModule

  ],
  declarations: [
    PagesComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    PaginazioneComponent,
    InsertcfComponent,
    CflistComponent,
    ComparisonreportsComponent,
    ComparecfComponent,
    AnalyzecfComponent,
    CreateuserComponent,
    ManageusersComponent,
  ],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }

  MessageService

  ],
})
export class PagesModule {
}
