import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController } from 'ionic-angular';
import {  QuestionService } from '../../service/question-service';
//import { ResultPage } from '../result/result';
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
  private  User_ans = "";
  //public navCtrl: NavController, public navParams: NavParams,
  constructor(public question: QuestionService,public loder:LoadingController,public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }

  selectedItemindex(i:number){
    this.question.selectedAnswerIndex = i
    this.User_ans = this.question.currentQuestion.all_answers[i]
    this.question.currentQuestion.user_answer = this.User_ans
    this.question.answerSelected = true;
  }

  navPu(){
    if(this.User_ans == this.question.currentQuestion.correct_answer){
        this.question.totalPoints += this.question.operationPoint
        console.log(this.question.operationPoint)
    } else {
        this.question.totalPoints -= this.question.operationPoint
        console.log(this.question.currentQuestion.correct_answer)
        console.log('I am decress')
    }
    if(this.question.currentIndex == 20){
      clearInterval(this.question.timerloop)
      
      return this.navCtrl.push("ResultPage",{
        questionService:this.question
      })
    }
    console.log(this.question.currentIndex);
    this.question.setCurQuestion(this.question.currentIndex)
  }


}
