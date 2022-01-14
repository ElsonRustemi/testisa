import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service/service.service';
import { User } from '../../models/generic/user';


@Component({
  selector: 'ngx-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  first = 0;
  rows = 5;
  rowsPerPage = [5, 10, 15];

  usrData: User[];

  display: boolean = false;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {

    this.service.getUserData().subscribe((usrData: User[]) => {
      this.usrData = usrData;
    },
      (err) => {
        console.log("error");
      },
      () => {

      });

  }

  mangageUsers() {
    this.display = true;
  }

}
