import { Component } from '@angular/core';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header style="background-color: #EEEEEE;">
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar style="background-color: #EEEEEE;" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column style="background-color: #FFFFFF;">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer style="background-color: #EEEEEE;">
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {}
