import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WarenkorbServiceService} from '../Services/warenkorb-service.service';




@Component({
  selector: 'app-warenkorb',
  templateUrl: './warenkorb.component.html',
  styleUrls: ['./warenkorb.component.css']
})
export class WarenkorbComponent implements OnInit {
  checkoutForm;
  constructor(private warenkorbService: WarenkorbServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      Name:"",
      Adresse:"",
      "Tel.Nr":"",
      "E-Mail":""
    });
  }
  getWarenKorpInhalt(){
    return this.warenkorbService.getItems();
  }
  onSubmit(custmerValue){
    
    this.warenkorbService.removeAllItems();
    this.checkoutForm.reset();
  }

}
