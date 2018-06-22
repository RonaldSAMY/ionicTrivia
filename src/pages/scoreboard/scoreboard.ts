import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScoreService } from '../../service/score-service';
/**
 * Generated class for the ScoreboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoreboard',
  templateUrl: 'scoreboard.html',
})
export class ScoreboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public score:ScoreService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoreboardPage');
    this.score.getScores()
  }

}
