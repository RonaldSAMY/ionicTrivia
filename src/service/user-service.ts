import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable()
export class userService{
    userConnected:boolean = false;
    userName:string = "";

    constructor(private store:Storage){
        this.getUserFromStorage()
    }

    getUserFromStorage(){
        this.store.get('myUser').then(
            (user)=>{
                this.userConnected = true
                this.userName = user
            }
        ).catch(()=>console.log('I am trying to get'))
    }

    setUser(user:string){
        this.store.set("myUser",user).then(
            ()=>{
                console.log('adde success')
            }
        )
    }
}