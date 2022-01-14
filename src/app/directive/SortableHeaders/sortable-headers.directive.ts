import { Directive, Input, EventEmitter, Output } from '@angular/core';
import { SortDirection, SortEvent } from '../../models/generic/sortDirection';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class SortableHeadersDirective {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Input() component: string;
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction, component: this.component});
  }
}
