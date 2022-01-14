import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS_ADMIN} from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>

  `,
})
export class PagesComponent implements OnInit{
  user: any = JSON.parse(localStorage.getItem('utenteLoggato'))
  menu: any
  ngOnInit(): void{
      this.menu = MENU_ITEMS_ADMIN;
  }
}
