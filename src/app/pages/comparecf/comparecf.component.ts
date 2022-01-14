import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-comparecf',
  templateUrl: './comparecf.component.html',
  styleUrls: ['./comparecf.component.scss']
})
export class ComparecfComponent implements OnInit {

  showText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showtext() {
    this.showText = true;
  }

  hideText() {
    this.showText = false;
  }

}
