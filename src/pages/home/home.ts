import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { userService } from '../../service/user-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public Heading = "Trivia"
  constructor(public navCtrl: NavController,public userS:userService ) {
    console.log(this.userS.userConnected)
  }

}
