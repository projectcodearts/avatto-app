import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drescription',
  templateUrl: './drescription.component.html',
  styleUrls: ['./drescription.component.scss'],
})
export class DrescriptionComponent implements OnInit {

  constructor() { }

  expanded: boolean = true;
  plus: boolean = false;
  ngOnInit() {}
  accordion(){
    this.expanded=!this.expanded;
    this.plus=!this.plus;
  }
  

}
