import { Component, OnInit } from '@angular/core';
import { CategoryServicesService } from '../../allServices/category-services.service';
/*import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';*/
@Component({
  selector: 'app-featured-category',
  templateUrl: './featured-category.component.html',
  styleUrls: ['./featured-category.component.scss'],
})
export class FeaturedCategoryComponent implements OnInit {
  fetching = false;
  fcategory: any = []; 
  constructor(private _featuredCat: CategoryServicesService) { }
  ngOnInit() {
    this.fetching = true;
    this._featuredCat.getfeaturedCategory().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.fcategory = JSON.parse(data);
      this.fetching = false;
    });
  }
}
