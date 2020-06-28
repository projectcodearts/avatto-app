import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  constructor(private http: HttpClient) { }
  public getpapers():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredprevious");
  }

  getmpaperstabledata(id,params){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/previous-papers/'+id);
    // return [
    //   {
    //     testmode:"online",
    //     testdetails:[
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Attempt Now",
    //         buttonlink: ""
    //       },
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Buy Now",
    //         buttonlink: ""
    //       },
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Buy Now",
    //         buttonlink: ""
    //       }
    //     ]
    //   },
    //   {
    //     testmode:"postal course",
    //     testdetails:[
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Attempt Now",
    //         buttonlink: ""
    //       },
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Buy Now",
    //         buttonlink: ""
    //       },
    //       {
    //         testname: "Mock test 1",
    //         testprice: "Rs 0 (FREE)",
    //         buttontext: "Buy Now",
    //         buttonlink: ""
    //       }
    //     ]
    //   }
    // ]
  }
}
