import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service/service.service';
import { Cfdata } from '../../models/generic/cfdata';


@Component({
  selector: 'ngx-cflist',
  templateUrl: './cflist.component.html',
  styleUrls: ['./cflist.component.scss']
})
export class CflistComponent implements OnInit {

  display: boolean = false;

  // Pagination variables
  first = 0;
  rows = 5;
  rowsPerPage = [5, 10, 15];



  // testData: Data[];
  testCFData: Cfdata[];
  selectedCf: Cfdata;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getCFData().subscribe((cfdata:Cfdata[]) => {
      console.log(cfdata);
      this.testCFData = cfdata
    },
      (err) => {
        console.log("error");
      }, () => {

      });
  }


  getCfDataId() {

    // this.testCFData = this.testCFData.filter(val => val.uniqueId === this.selectedCf.uniqueId);
    // console.log(this.testCFData);

  }

  showDialog() {
    this.display = true;
  }

  paginate(event) {
    // console.log(event.rowsPerPage);
  }

}
