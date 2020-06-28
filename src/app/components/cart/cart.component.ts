import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProduct : any = JSON.parse(localStorage.getItem("product"))?JSON.parse(localStorage.getItem("product")):[];

  constructor(public toast: ToastController,public loadingController: LoadingController,private storage: Storage) {
    
  }

  ngOnInit() {
    
  }

  removeCart(){
    delete this.cartProduct;
    localStorage.setItem("product",'');
  }

}
