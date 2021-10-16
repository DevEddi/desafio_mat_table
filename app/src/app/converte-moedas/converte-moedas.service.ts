import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConverteMoedasService {

  constructor(private http : HttpClient) {

  }
  getUserData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/albums')
  }
}
