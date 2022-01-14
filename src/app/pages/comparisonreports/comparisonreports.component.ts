import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service/service.service';
import { Data } from '../../models/generic/data';


@Component({
  selector: 'ngx-comparisonreports',
  templateUrl: './comparisonreports.component.html',
  styleUrls: ['./comparisonreports.component.scss']
})
export class ComparisonreportsComponent implements OnInit {

    // Pagination variables
    first = 0;
    rows = 5;
    rowsPerPage = [5, 10, 15];

  testData: Data[];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getReportData().subscribe((data:Data[]) => {
      console.log(data);
      this.testData = data
    },
      (err) => {
        console.log("error");
      }, () => {

      });


  }

}
