import { Component } from '@angular/core';

@Component({
  selector: 'ngx-two-columns-layout',
  styleUrls: ['./two-columns.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header style="background-color: #EEEEEE;" fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar style="background-color: #EEEEEE;" class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column style="background-color: #DDDDDD;" class="small">
      </nb-layout-column>

      <nb-layout-column style="background-color: #DDDDDD;">
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer style="background-color: #EEEEEE;" fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
})
export class TwoColumnsLayoutComponent {}
