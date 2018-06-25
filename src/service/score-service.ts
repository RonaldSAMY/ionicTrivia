import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Score} from "../model/score";
@Injectable()
export class ScoreService{
    public endPoint = "https://leaderboard.lp1.eu"
    public allScores:Array<Score> = []
    public score = new Score()
    constructor(public http:Http){ }

    getScores(){
        this.http.get(this.endPoint+"/api/json").toPromise()
        .then(
            (val)=>{
                let ans = val.json()
                ans.forEach(score => {
                   let s = new Score()
                   Object.assign(s,score) 
                   this.allScores.push(s)
                });
                console.log(ans)
            }
        )
    }

    addScore(){
        //console.log(this.score)
        this.http.post(this.endPoint+"/api/score",this.score).toPromise()
        .then(
            (res)=>{
                console.log('added to scoreboard successfully')
            }
        )
    }
}