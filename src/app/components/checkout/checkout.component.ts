import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  todo: { 
    couponCode: string, 
   } = {
    couponCode: ''

};
  constructor( public platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public product: ProductsService
  ) { }

  ngOnInit() {}

  async appyCouponCode(){
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
   
    this.product.appycoupon(this.todo.couponCode).subscribe(async (resp) => {
        loading.dismiss();	
        console.log(resp);
    }, async (err) => {
        loading.dismiss();		
        const toast = await this.toastCtrl.create({
            message: 'failed to upload.',
            duration: 2000
        });
        toast.present();
    });
  }

}
