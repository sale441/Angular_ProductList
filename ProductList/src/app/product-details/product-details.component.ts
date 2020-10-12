import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarenkorbServiceService } from '../Services/warenkorb-service.service';
import { products } from '../products';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  values = "" ;
  boxValue;
  valueListe = [];
  constructor(private route:ActivatedRoute, private warenkorbService : WarenkorbServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.product = products[+param.get('Id')]
    })

  }
  productAddToCart(currentProduct){
    this.warenkorbService.addItems(currentProduct);
    alert('Your product has been added to the cart!');
  }
  onKey(event: KeyboardEvent){
    let value = (event.target as HTMLInputElement).value;
    value = this.Säubern(value);
    if(value.length % 4 != 0 || value.length == 0 ){
      this.values = (event.target as HTMLInputElement).value
    }
    if( value.length % 4 == 0 && value.length != 0){
      this.values = (event.target as HTMLInputElement).value + ' - '
    }


  }
  update(value){
    this.valueListe.push(value);
  }

  Säubern(value){
    let x = value.match(/[a-zA-Z0-9]/gi)
    let xToString = x.join('');
    return xToString;
  }

}
