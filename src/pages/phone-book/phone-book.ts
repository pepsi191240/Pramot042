import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

contactArray = [{name: 'Pepsi1', telephone: '0629685509', imgeUrl: 'assets/imgs/1.jpg'}
                ,{name: 'Pepsi2', telephone: '0629685509', imgeUrl: 'assets/imgs/2.jpg'}
                ,{name: 'Pepsi3', telephone: '0629685509', imgeUrl: 'assets/imgs/3.jpg'}
                ,{name: 'Pepsi4', telephone: '0629685509', imgeUrl: 'assets/imgs/4.jpg'}
                ,{name: 'Pepsi5', telephone: '0629685509', imgeUrl: 'assets/imgs/5.jpg'}
              ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }
  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }
}//end class
