import { Component, OnInit } from '@angular/core';
import { PapersService } from '../../allServices/papers.service';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss'],
})
export class PapersComponent implements OnInit {
  fetching = false;
  title: string = "Previous Year Papers";
  papers: any;
  constructor(private _papers: PapersService) { }
  slideOpts = {
    initialSlide: 1,
    freeMode: true,
    speed: 400,
    slidesPerView: 2,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 20
  };
  ngOnInit() {
    this.fetching = true;
    this._papers.getpapers().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.papers = JSON.parse(data);
      this.fetching = false;
    });
  }

}
