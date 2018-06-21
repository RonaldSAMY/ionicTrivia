import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { QuestionsModel } from '../model/questions';

@Injectable()
export class QuestionService{
    public Ques:Array<QuestionsModel> = []
    public currentQuestion:QuestionsModel = new QuestionsModel()
    public currentIndex = 0;
    public answerSelected = false
    public selectedAnswerIndex = -1
    public QuestionLoded = false

    constructor(private Http:Http){
        this.getQuestions()
    }

    getQuestions(){
        this.Http.get("https://opentdb.com/api.php?amount=20&difficulty=easy&encode=url3986")
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
                    this.Ques.push(q)
                });
                this.setCurQuestion(this.currentIndex)
                this.QuestionLoded = true
            }
        )
    }

    setCurQuestion(ind:number){
        this.answerSelected = false
        this.currentQuestion = this.Ques[ind]
        this.currentIndex++
        this.selectedAnswerIndex = -1
    }


}