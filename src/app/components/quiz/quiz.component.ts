import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/allServices/quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  fetching = false;
  title: string = "Quiz";
  quiz: any;
  constructor(private _quiz: QuizserviceService) { }

  ngOnInit() {
    this.fetching = true;
    this.quiz=this._quiz.getquizdata();
    this.fetching = false;
  }

}

