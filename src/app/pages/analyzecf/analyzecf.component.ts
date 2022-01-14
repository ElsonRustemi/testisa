import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-analyzecf',
  templateUrl: './analyzecf.component.html',
  styleUrls: ['./analyzecf.component.scss']
})
export class AnalyzecfComponent implements OnInit {

  basicData: any;
  data: any;

  constructor() { }

  ngOnInit(): void {

    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726'
        }
      ]
    }


    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };


  }

}
