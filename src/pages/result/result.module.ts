import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultPage } from './result';
import { ScoreboardPageModule } from '../scoreboard/scoreboard.module'
@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
    ScoreboardPageModule
  ],
})
export class ResultPageModule {}
