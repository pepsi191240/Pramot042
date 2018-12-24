import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodeScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
  //(1)
  scanText = "";
  scanFormat = "";

  //(2)
  constructor(public navCtrl: NavController, public navParams: NavParams,private Scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodeScannerPage');
  }
  //(3)
  Scan(){
    this.Scanner.scan().then(
      (data)=>{
        this.scanText = data.text;
        this.scanFormat = data.format;
      }
      , (error) => { console.log() }
    );
  }

}//end class
