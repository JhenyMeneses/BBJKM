import { Component, OnInit,Input } from '@angular/core';
import { IModFatca } from 'src/app/Interface/modFatca';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-mod-fatca',
  templateUrl: './mod-fatca.component.html',
  styleUrls: ['./mod-fatca.component.css']
})

export class ModFatcaComponent implements OnInit {
  dataModFatca!: IModFatca;
  
  constructor(private ServiceCustomer : CustomerService) { }

  ngOnInit(): void {
  //  this.getFatcaData();
    this.getModFatca();
  }

  getModFatca(): void {
   /*  this.servicesmodFatca.updateMyFatcas()
      .subscribe(dataModFatca => this.dataModFatca = dataModFatca); */
  }
  
  onSaveComplete(): void {

  }

}
