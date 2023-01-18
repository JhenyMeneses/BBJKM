import { Component, OnInit } from '@angular/core';
import { IModEconomicDat } from 'src/app/Interface/modEconomicDat';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-mod-economic-dat',
  templateUrl: './mod-economic-dat.component.html',
  styleUrls: ['./mod-economic-dat.component.css']
})
export class ModEconomicDatComponent implements OnInit {
  dataEconomicDat! : IModEconomicDat;

  constructor( private ServiceCustomer : CustomerService) { }

  ngOnInit(): void {
    this.getEconomicService();
  }

  getEconomicService(): void{
  /*   this.ServiceCustomer.getModEconomicDat()
    .subscribe(dataEconomicDat => this.dataEconomicDat = dataEconomicDat) */
  }

}
