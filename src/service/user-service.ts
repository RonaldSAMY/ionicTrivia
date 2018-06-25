import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Http } from '@angular/http';
import { ScoreService } from './score-service';

@Injectable()
export class userService{
    userConnected:boolean = false;
    userName:string = "";
    difficultyChoosed:string = "";
    userAvatar = "";

    constructor(private store:Storage,public http:Http,private scoreService:ScoreService){
        this.getUserFromStorage()  
        //this.changeUserAvatar()
    }

    getUserFromStorage(){
        this.store.get('myUser').then(
            (user)=>{
                if(user !== null){
                    this.userName = user
                    if(this.difficultyChoosed != ""){
                        this.userConnected = true
                    }
                    console.log(this.userName)
                    this.userAvatar = "https://api.adorable.io/avatars/142/"+this.userName+"@adorable.png"  
                }
            }
        ).catch(()=>console.log('I am trying to get'))
    }

    changeUserAvatar(val){
        console.log(this.userName)
        this.userAvatar = "https://api.adorable.io/avatars/142/"+this.userName+"@adorable.png";
        /*this.http.get("https://api.adorable.io/avatars/142/"+this.userName+"@adorable")
        .toPromise().then(
            (res)=>{
               console.log(res) 
            }
        )*/
    }

    setUser(){
        console.log(this.userName)
        this.store.set("myUser",this.userName).then(
            ()=>{
                this.scoreService.score.nickname = this.userName
                this.scoreService.score.avatar_url = this.userAvatar
                console.log('adde success')
                this.getUserFromStorage()
            }
        )
    }
}