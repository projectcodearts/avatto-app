import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private http: HttpClient) { }

  public getDescription(id):Observable<object>{
    return this.http.get("http://avatto.in/wp-json/avatto/v2/description/"+id);
  }
}
