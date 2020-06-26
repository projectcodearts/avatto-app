import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'https://avatto.in';
  consumerKey = 'ck_ac58eb3d104d676d8c0543ac74b6ad5a3a3dd7a9';
  consumerSecret = 'cs_d7d0b84586275581ad4f307dc8f9e582fffee848';

  constructor(private http: HttpClient) { }
  /*public getproducts():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredeligibility");
  }*/
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
  }

