import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PracticeQuestionDetailsServicesService } from 'src/app/allServices/practice-question-details-services.service';
@Component({
  selector: 'app-practice-question-details-com',
  templateUrl: './practice-question-details.component.html',
  styleUrls: ['./practice-question-details.component.scss'],
})
export class PracticeQuestionDetailsComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];
  constructor(private _practiceqsdts:PracticeQuestionDetailsServicesService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._practiceqsdts.getPracticeQuestionDetails(id).pipe().subscribe(response=>{
      console.log(response);
      this.practiceQs = response;
      if(this.practiceQs.length == 0){
        console.log('no response');
        this.router.navigate(['/mcq', id]);
      }
      this.fetching = false;
    })
  }

}
