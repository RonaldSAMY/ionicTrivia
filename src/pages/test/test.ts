import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { userService } from '../../service/user-service';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  usernameField = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public userS:userService) {
  }

  ionViewDidLoad() {
  }


}
