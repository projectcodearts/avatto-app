import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor() { }

  ngOnInit() {}

}
