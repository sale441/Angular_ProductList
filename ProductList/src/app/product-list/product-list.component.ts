import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Ware = [] = products;
  constructor() { }

  ngOnInit() {
  }
  share(){
    alert('the product has been shared');
  }
  onNotify(){
    alert('You will be notified when the product goes on sale');
  }

}
