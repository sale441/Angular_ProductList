import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbServiceService {
 productsInWarenKorp = [];
  constructor(private http : HttpClient) { }

  addItems(item){
    this.productsInWarenKorp.push(item);
  }
  getItems(){
    return this.productsInWarenKorp;
  }
  removeItem(item){
    if(this.productsInWarenKorp.length > 0){
      this.productsInWarenKorp.splice(item);
    }
  }

  removeAllItems(){
    if(this.productsInWarenKorp.length > 0){
      this.productsInWarenKorp = [];
      return this.productsInWarenKorp;
    }
  }
  getVersandPreise(){
    return this.http.get('/assets/shipping.json')
  }
}
