import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { pid } from 'process';
@Component({
  selector: 'app-mcq-page',
  templateUrl: './mcq-page.page.html',
  styleUrls: ['./mcq-page.page.scss'],
})
export class McqPagePage implements OnInit {
  fetching = false;
  users = [];
  page = 1;
  
  maximumPages = 3;
  data:any;
  constructor(public navCtrl: NavController,private httpClient: HttpClient,private route: ActivatedRoute) { 
    this.loadUsers();
  }
  loadUsers(infiniteScroll?) {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq/${pid}/${this.page}`)
    .subscribe(res => {
      console.log(res);
      this.users = this.users.concat(res['results']);
      if (infiniteScroll) {
        infiniteScroll.target.complete();
      }
    })
  }
  loadMore(infiniteScroll) {
    this.page++;
    this.loadUsers(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    }
  }

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(`https://avatto.in/wp-json/avatto/v2/mcq-max/`+id)
    .subscribe(res => {
      this.data = JSON.stringify(res);
      this.maximumPages = JSON.parse(this.data);
      console.log(this.maximumPages);
      this.fetching = false;
    })
  }

}
