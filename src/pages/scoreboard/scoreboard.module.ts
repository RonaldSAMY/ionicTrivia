import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoreboardPage } from './scoreboard';
import { ScoreService } from '../../service/score-service';
@NgModule({
  declarations: [
    ScoreboardPage,
  ],
  providers:[
    ScoreService
  ],
  imports: [
    IonicPageModule.forChild(ScoreboardPage),
  ],
})
export class ScoreboardPageModule {}
