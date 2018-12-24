import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //property
  loginResult;

  constructor(public navCtrl: NavController) {

  }

  //method
  signIn(_username,_password){
    alert('Hello '+_username+" "+_password);
    if (_password == 1234) {
      this.loginResult = 'ผ่าน';
      this.navCtrl.push("PhoneBookPage");
    } else {
      this.loginResult = 'ไม่ผ่าน';
    }
  }

}//end class
