import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { ResultPageModule } from '../pages/result/result.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { QuestionsPage } from '../pages/questions/questions';
import { userService } from '../service/user-service';
import { QuestionService } from '../service/question-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    QuestionsPage,
    //ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ResultPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    QuestionsPage,
    //ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    userService,
    QuestionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
