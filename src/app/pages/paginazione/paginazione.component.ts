import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-paginazione',
  templateUrl: './paginazione.component.html',
  styleUrls: ['./paginazione.component.scss']
})
export class PaginazioneComponent implements OnInit {

  paginazione = [
    { value: 1, label: '1' },
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: 25, label: '25' }
];
  @Input('pageSize') pageSize: number;
  @Input('listPageLength') listPageLength: number;
  @Input('allListLength') allListLength: number;

  @Output("paginazioneSelect") paginazioneSelect = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
    this.pageSize = 10;
    this.listPageLength = 0;
    this.allListLength = 0;
  }
  changePaginazione(value) {
    this.pageSize = parseInt(value.value, 10);
    this.paginazioneSelect.emit(this.pageSize);

  }

}
