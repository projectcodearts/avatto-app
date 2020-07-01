import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {
   customerInfo :any = [];
  constructor(public _products: ProductsService,private storage: Storage) { }

  ngOnInit() {
    this._products.getCustomer("1").then(data => {
      let item = data[0];
      this.customerInfo = item;
      console.log(this.customerInfo);
    });
  }

}
