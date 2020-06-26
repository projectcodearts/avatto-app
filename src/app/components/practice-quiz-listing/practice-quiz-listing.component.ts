import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuizListingService } from 'src/app/allServices/quiz-listing.service';
@Component({
  selector: 'app-practice-quiz-listing',
  templateUrl: './practice-quiz-listing.component.html',
  styleUrls: ['./practice-quiz-listing.component.scss'],
})
export class PracticeQuizListingComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];

  constructor(private _practiceqsdts:QuizListingService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._practiceqsdts.getQuizListing(id).pipe().subscribe(response=>{
      console.log(response);
      this.practiceQs = response;
      if(this.practiceQs.length == 0){
        console.log('no response');
        this.router.navigate(['/quiz', id]);
      }
      this.fetching = false;
    })
  }

}
