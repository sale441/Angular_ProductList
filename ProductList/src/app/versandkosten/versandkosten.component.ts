import { Component, OnInit } from '@angular/core';
import { WarenkorbServiceService} from '../Services/warenkorb-service.service';

@Component({
  selector: 'app-versandkosten',
  templateUrl: './versandkosten.component.html',
  styleUrls: ['./versandkosten.component.css']
})
export class VersandkostenComponent implements OnInit {
  versandkosten;
  constructor(private warenkorbService: WarenkorbServiceService) { }

  ngOnInit() {
    this.versandkosten = this.warenkorbService.getVersandPreise();
  }


}
