import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {  QuestionService } from '../../service/question-service';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  
  //public navCtrl: NavController, public navParams: NavParams,
  constructor(public question: QuestionService,public loder:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  selectedItemindex(i:number){
    this.question.selectedAnswerIndex = i
    let User_ans = this.question.currentQuestion.all_answers[i]
    this.question.answerSelected = true;
    console.log(User_ans)
  }


}
