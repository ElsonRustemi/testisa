import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cfdata } from '../../models/generic/cfdata';
import { Data } from '../../models/generic/data';
import { User } from '../../models/generic/user';

// export interface Data {
//   reportNum;
//   data;
//   custom;
//   details;
// }

// export interface User {
//   name;
//   username;
//   email;
// }

// export interface Cfdata {
//   uniqueId;
//   declarationCode;
//   loadingList;
//   totalPackage;
//   countryOfDeparture;
//   countryOfTransit;
//   countryOfDestination;
//   placeOfLoading;
//   grossMass;
//   netMass;
//   value;
//   containerNo;
//   driverCompartmentplate;
//   trailerPlate;
//   sealNumber;
//   riskIndex;
//   vesselImoCode;
//   scannerImages;
// }


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public uploadedCfFiles: any[] = [];

  constructor(private http: HttpClient) {}

  // Comparasion Report component
  getReportData() {
    return this.http.get<Data[]>('assets/comparereportdata.json')
  }

    // Manage Users component
    getUserData() {
      return this.http.get<User[]>('assets/userdata.json')
        // .toPromise()
        // .then(res => <Cfdata[]>res.cfdata)
        // .then(cfdata => { return cfdata ;});
    }

  // List CF component
  getCFData() {
    return this.http.get<Cfdata[]>('assets/cflist.json')
      // .toPromise()
      // .then(res => <Cfdata[]>res.cfdata)
      // .then(cfdata => { return cfdata ;});
  }

}
