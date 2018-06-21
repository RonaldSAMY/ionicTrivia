import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';
import { QuestionService } from '../../service/question-service';
@NgModule({
  declarations: [
    QuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
  ],
})
export class QuestionsPageModule {}
