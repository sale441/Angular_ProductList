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

}
