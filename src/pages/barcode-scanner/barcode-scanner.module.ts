import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import * as barcodeScanner from './barcode-scanner';

@NgModule({
  declarations: [
    barcodeScanner.BarcodeScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(barcodeScanner.BarcodeScannerPage),
  ],
})
export class BarcodeScannerPageModule {}
