import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { QuestionService } from '../../service/question-service';
import { QuestionsModel  } from '../../model/questions';
import { MyApp } from '../../app/app.component';
import { HomePage } from '../home/home';
import { ScoreboardPage } from '../scoreboard/scoreboard'
/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
  providers:[QuestionService]
})
export class ResultPage {
  public QS:QuestionService;
  public QModel:Array<QuestionsModel> = []
  public rootPage = HomePage
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertC:AlertController ) {
    this.QS = navParams.get('questionService')
    if(this.QS == undefined){
      this.navCtrl.push(MyApp)
    }
    this.QModel = this.QS.Ques
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  showCorrectAnswer(ans:string) {
    console.log('work')
    const alert = this.alertC.create({
      title: 'Correct Ans',
      message: ans,
      buttons: ['OK'],
      cssClass: "customMesg"
    });
    alert.present();
  }

  redirectScoreboard(){
    this.navCtrl.push('ScoreboardPage')
  }

}
