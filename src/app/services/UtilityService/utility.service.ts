import { Injectable } from '@angular/core';
import { CONST } from '../../../shared/constants';


@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // public static downloadFile(file:File) {

  //   var blob = new Blob([file]);
  //   if (window.navigator.msSaveOrOpenBlob) {
  //     window.navigator.msSaveBlob(blob, file.name);
  //   } else {
  //     var a = document.createElement("a");
  //     a.href = window.URL.createObjectURL(blob);
  //     a.download = file.name;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // }

  // public static downloadFileFromBufferArray(file:File,name) {

  //   var blob = new Blob([file]);
  //   if (window.navigator.msSaveOrOpenBlob) {
  //     window.navigator.msSaveBlob(blob, name);
  //   } else {
  //     var a = document.createElement("a");
  //     a.href = window.URL.createObjectURL(blob);
  //     a.download = name;
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);
  //   }
  // }

  static emptyString(value:string) {
    if(value == "" || value == null) {
      return true;
    }
    return false;
  }

  public static nvl(value:any, type:string) {
    switch(type) {
      case CONST.STRING:
        if(this.emptyString(value+"")) {
          return "";
        } else {
          return value+"";
        }
      case CONST.BOOL:
        if(this.emptyString(value)) {
          return false;
        } else {
          if(typeof value == "string") {
            if(value == "true") {
              return true;
            } else {
              return false;
            }
          }
          return value;
        }
    }
  }

  public static getCodControllo(cf: string) {
    var codiceFiscale = cf.toUpperCase();
    var map = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 1, 0, 5, 7, 9, 13, 15, 17,
      19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
    var s = 0;
    for (var i = 0; i < 15; i++) {
      var c = codiceFiscale.charCodeAt(i);
      if (c < 65)
        c = c - 48;
      else
        c = c - 55;
      if (i % 2 == 0)
        s += map[c];
      else
        s += c < 10 ? c : c - 10;
    }
    return String.fromCharCode(65 + s % 26);
  }

  static cloneObject(source, cloneObject = {}) {
    if (typeof source !== 'object')
      return source;

    if (source == null)
      return null;

    // Source is an array
    if (Array.isArray(source)) {
      cloneObject = [];

      source.forEach((item, index) => {
        if (typeof item === 'object' && !(item instanceof File)) {
          cloneObject[index] = this.cloneObject(item);
        } else {
          cloneObject[index] = item;
        }
      });
    }
    // Source is another type of object
    else {
      Object.keys(source).forEach(key => {
        if (typeof source[key] === 'object' && !(source[key] instanceof File)) {
          cloneObject[key] = this.cloneObject(source[key]);
        } else {
          cloneObject[key] = source[key];
        }
      });
    }
    return cloneObject;
  }
}
