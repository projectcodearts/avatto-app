import { Component, OnInit } from '@angular/core';
import { LoadingController,ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { ProductsService } from '../../../allServices/products.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {

  fetching = false;
  title: string = "Products";
  product: any = []; 
  moreProducts: any = []; 
  error:string;
  loading: any;
  cartData:any= [];
  baseProducts:any= [];
  fun: any;
  constructor(private _products: ProductsService,public toast: ToastController,public loadingController: LoadingController,private storage: Storage) { }
  ngOnInit() {
    this.fetching = true;
    this._products.getproducts().pipe().subscribe(data=>{
      
      const demo = JSON.stringify(data)
      this.product = data;
      this.fetching = false;
    });
    this.getCartData();
  }

  addToCart(product){
    this.storage.get(`product_${product.id}`).then(async data => {
      console.log(data);
      if (data) {
        const toast = await this.toast.create({
          message: 'Item already in Cart',
          duration: 2000
        });
        toast.present();
      } else {
        const toast = await this.toast.create({
          message: 'Added to Cart',
          duration: 2000
        });
        toast.present();
        this.storage
          .set(`product_${product.id}`, JSON.stringify(product))
          .then(() => {
            console.log('teko hudo');
          });
      }
    });
  }

  getCartData() {
    let i =0;
    this.storage
      .forEach((value, key) => {
        const obj = {};
        const demo = JSON.stringify(value)
        const parsedData = (value);
        this.cartData.push(parsedData);
        obj['product_id'] = parsedData.id;
        obj['price'] = parseInt(parsedData.price, 10);
        obj['quantity'] = 1;
        this.baseProducts.push(obj);
        i++;
        //console.log(obj);
      })
      .then(() => {
        console.log(i);
        this.storage.set("quantity",i);
      });
  }

}
