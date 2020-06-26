import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/allServices/products.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController,ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  fetching = false;
  product: any = []; 
  id_url;
  selectedItems;
  constructor(private _productdetails: ProductsService, private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.fetching = true;
    let pid = this._activatedRoute.snapshot.params.id;
    this._productdetails.getProduct(pid).pipe().subscribe(data=>{
      console.log(data);
      const demo = JSON.stringify(data)
      this.product = data;
      this.fetching = false;
    });
    
  }

}
