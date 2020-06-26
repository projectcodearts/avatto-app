import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizserviceService {

  constructor() { }
  getquizdata(){
    return [
      {
        title: "There are many variations of passages of Lorem Ipsum available",
      },
      {
        title: "Latin professor at Hampden-Sydney College in Virginia",
      },
      {
        title: "If you are going to use a passage of Lorem Ipsum, you need",
      },
      {
        title: "There are many variations of passages of Lorem Ipsum available",
      },
      {
        title: "Lorem Ipsum is therefore always free from repetition, injected ",
      }
    ]
  }
}
