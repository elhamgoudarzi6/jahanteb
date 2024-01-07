//import * as CryptoJS from 'crypto-js';
//var SecureStorage = require("secure-web-storage");
var CryptoJS = require("crypto-js");
import { Injectable } from '@angular/core';
const SecureStorage = require('secure-web-storage');
const SECRET_KEY = '@AaPmAnAgEr_ApP-DeVeLoPeD-By-PaRsArAd-PrOgRaMmInG!-TeAm@';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key: { toString: () => any; }) {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data: { toString: () => any; }) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },
    decrypt: function decrypt(data: { toString: (arg0: any) => any; }) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    }
  });

}

