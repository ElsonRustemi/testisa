import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'ngx-insertcf',
  templateUrl: './insertcf.component.html',
  styleUrls: ['./insertcf.component.scss']
})
export class InsertcfComponent implements OnInit {

  cfFrom: FormGroup;

  display: boolean = false;
  displayCfConfirmation: boolean = false;

  files: TreeNode[];
  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.cfFrom = this.fb.group({
      uniqueId: [null],
      declarationCode: [null, [Validators.required]],
      loadingList: [null, [Validators.required]],
      totalPackage: [null, [Validators.required]],
      countryOfDeparture: [null, [Validators.required]],
      countryOfTransit: [null, [Validators.required]],
      countryOfDestination: [null, [Validators.required]],
      placeOfLoading: [null, [Validators.required]],
      grossMass: [null, [Validators.required]],
      netMass: [null, [Validators.required]],
      value: [null, [Validators.required]],
      containerNo: [null, [Validators.required]],
      driverCompartmentPlate: [null, [Validators.required]],
      trailerPlate: [null, [Validators.required]],
      sealNumber: [null, [Validators.required]],
      riskIndex: [null, [Validators.required]],
      vesselImoCode: [null, [Validators.required]],
      scannerImages: [null]
    })

  }


    // CSV Upload fun
    onUpload(event) {
      console.log(event);
      // for(let file of event.files) {
      //   this.uploadedFiles.push(file);
      // }
    }

    myUploader(event) {
      console.log(event.files);
      this.uploadedFiles = event.files.map((file) => {
        return file;
      })
    }

    // Image Upload fun
    onUploadImage(event) {
      for (let file of event.files) {
        this.uploadedFiles.push(file);
        // console.log(event);

      }
      // for (let imgfile of event.imageFiles) {
      //   this.uploadedImages.push(imgfile);
      //   console.log(event);
      // }
    }

    myUploaderImage(event) {
      console.log(event.files);
      this.uploadedFiles = event.files.map((file) => {
        return file;
        // console.log(file);
      })
      // console.log(event.imageFiles);
      // this.uploadedImages = event.imageFiles.map((imgfile) => {
      //   console.log(imgfile);
      //   return imgfile;
      // })
      console.log(this.uploadedFiles);

    }

    // testFun() {
    //   this.service.uploadedCfFiles = this.uploadedFiles;
    // }

    showDialog(event) {
      this.display = true;
      console.log(event);
    }

    oncfFromSubmit() {
      this.displayCfConfirmation = true;
      console.log(this.cfFrom.value);
      this.cfFrom.reset();
    }

}
