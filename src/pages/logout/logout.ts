import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth} from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';


/*
  Generated class for the Logout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:Auth,) {
	  	this.auth.logout();
	    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

}
