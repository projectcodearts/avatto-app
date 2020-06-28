import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../allServices/products.service';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router,ActivatedRoute } from '@angular/router';
declare var RazorpayCheckout:any;
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
  cartProduct : any = JSON.parse(localStorage.getItem("product"))?JSON.parse(localStorage.getItem("product")):[];


  orderData = {
    payment_method: "razorpay",
    payment_method_title: "Razorpay",
    set_paid: true,
    billing: {
      first_name: "",
      last_name: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: "",
      email: "",
      phone: ""
    },
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Flat Rate",
        total: "10",
      }
    ]
};
isChecked = "0";

  constructor( public platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public _products: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private storage: Storage
  ) { 
    //this.storage.clear();
    console.log(this.cartProduct);
    this.storage.get('userInfo').then((val) => {
      let userInfo = JSON.parse(val);
      console.log(userInfo);
      if(!userInfo){
        this.router.navigate(['/sign-in',{"routeParams":"checkout"}]);
      }
    });
  }

  ngOnInit() {
    this._products.getPaymentGateways().subscribe(async (resp) => {
     console.log(resp)
    }, async (err) => {
      
    });
  }

  async appyCouponCode(){
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
   
    this._products.appycoupon(this.todo.couponCode).subscribe(async (resp) => {
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

  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_test_1DP5mmOlF5G5ag", // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'Razorpay',
      prefill: {
        email: 'test@razorpay.com',
        contact: '9990009991',
        name: 'Razorpay'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      console.log("razor success",payment_id);
      let shillpingAddress = this.orderData.billing;
      this.orderData['shipping'] = shillpingAddress;
      let products = {
        "product_id" : this.cartProduct.id,
        "quantity" : "1"
      }
      this.orderData['line_items'] = products;
      console.log(this.orderData);
      this._products.postOrder(this.orderData).subscribe(async (resp) => {
      console.log(resp);
      }, async (err) => {
      
      });   
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  createOrder(){
    let shillpingAddress = this.orderData.billing;
    this.orderData['shipping'] = shillpingAddress;
    let products = {
      "product_id" : this.cartProduct.id,
      "quantity" : "1"
    }
    this.orderData['line_items'] = products;
    console.log(this.orderData);
    this._products.postOrder(this.orderData).subscribe(async (resp) => {
     console.log(resp);
    }, async (err) => {
     
    });   
  }

  checkTerm(){
    if(this.isChecked != '1') {
      this.isChecked = "1";
    } else {
      this.isChecked = "0";
    }
      
  }

}
