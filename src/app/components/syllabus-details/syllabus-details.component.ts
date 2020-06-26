import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute,Router } from '@angular/router';
import { SyllabusDetailsService } from 'src/app/allServices/syllabus-details.service';
@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-details.component.html',
  styleUrls: ['./syllabus-details.component.scss'],
})
export class SyllabusDetailsComponent implements OnInit {
  fetching = true;
  title: string = "Syllabus";
  sylllabus: any = []; 

  constructor(private _syllabus:SyllabusDetailsService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._syllabus.getsyllabusDetails(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sylllabus = JSON.parse(data);
      console.log(data);
      this.fetching = false;
    });
  }

}
