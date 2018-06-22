import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { QuestionsModel } from '../model/questions';
import { userService } from './user-service'
@Injectable()
export class QuestionService{
    public Ques:Array<QuestionsModel> = []
    public currentQuestion:QuestionsModel = new QuestionsModel()
    public currentIndex = 19;// DEBUG
    public answerSelected = false
    public selectedAnswerIndex = -1
    public QuestionLoded = false
    public totalPoints = 0
    public operationPoint = 0
    public timer = {
        sec : "00",
        min : "00"
    }
    public timerloop = setInterval(
        ()=>{
            let sec = parseInt(this.timer.sec)
            let newSec:any = sec+1
            if(newSec == 60){
                let min = parseInt(this.timer.min)
                let newMin:any = min+1
                if(newMin<10){
                    newMin = "0"+newMin
                }
                this.timer.min = newMin
                newSec = 0
            }
            if(newSec<10){
                    newSec = "0"+newSec
            }
            this.timer.sec = newSec;
        },1000
    )

    constructor(private Http:Http, public userS:userService){
        this.getQuestions()
        this.operationPoints()
    }

    getQuestions(){
        this.Http.get("https://opentdb.com/api.php?amount=20&difficulty="+this.userS.difficultyChoosed+"&encode=url3986")
        .toPromise().then(
            (val)=>{
                let results = val.json().results
                results.forEach((datas:QuestionsModel) => {
                    let q = new QuestionsModel()
                    q.question = decodeURIComponent(datas.question)
                    q.correct_answer = decodeURIComponent(datas.correct_answer)
                    q.all_answers.push(q.correct_answer)
                    datas.incorrect_answers.forEach(
                        (iA)=>{
                            let decode = decodeURIComponent(iA)
                            q.incorrect_answers.push(decode)
                            q.all_answers.push(decode)
                        }
                    )
                    q.all_answers = this.shuffle(q.all_answers)
                    this.Ques.push(q)
                });
                this.setCurQuestion(this.currentIndex)
                this.QuestionLoded = true
            }
        )
    }

    operationPoints(){
        switch(this.userS.difficultyChoosed){
            case "easy":
                this.operationPoint = 5
                break;
            case "medium":
                this.operationPoint = 10
                break;
            default:
                this.operationPoint = 20
        }
    }
    
    setCurQuestion(ind:number){
        this.answerSelected = false
        this.currentQuestion = this.Ques[ind]
        this.currentIndex++
        this.selectedAnswerIndex = -1
    }


    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }


}