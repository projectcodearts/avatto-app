import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://avatto.in';
  productUrl = 'https://avatto.in/wp-json/avatto/v2';
  consumerKey = 'ck_ac58eb3d104d676d8c0543ac74b6ad5a3a3dd7a9';
  consumerSecret = 'cs_d7d0b84586275581ad4f307dc8f9e582fffee848';

  constructor(private http: HttpClient) { }
  /*public getproducts():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredeligibility");
  }*/

  get(endpoint: string, params?: any, reqOpts?: any) {
	  
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(this.productUrl + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.productUrl + '/' + endpoint, body, reqOpts);
  }


  getproducts(){
    return this.http.get(`${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&per_page=100&status=publish`);
    
  }
  getProduct(pid) {
    return this.http.get(`${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}&per_page=100&status=publish`);      
  }

  appycoupon(params){
    let seq = this.get('coupon/'+params, '');

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
}

