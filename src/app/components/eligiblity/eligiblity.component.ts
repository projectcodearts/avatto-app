import { Component, OnInit } from '@angular/core';
import { EligiblityService } from '../../allServices/eligiblity.service';

@Component({
  selector: 'app-eligiblity',
  templateUrl: './eligiblity.component.html',
  styleUrls: ['./eligiblity.component.scss'],
})
export class EligiblityComponent implements OnInit {
  fetching = true;
  title: string = "Eligiblity";
  eligiblity: any;
  constructor(private _eligiblity: EligiblityService) { }
  slideOpts = {
    initialSlide: 1,
    freeMode: true,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 20,
  };
  ngOnInit() {
    this.fetching = true;
    this._eligiblity.geteligiblity().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.eligiblity = JSON.parse(data);
      this.fetching = false;
    });
  }

}
