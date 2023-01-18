import { Component, OnInit } from '@angular/core';
import { IConsult } from 'src/app/Interface/consult1';
import { CustomerService } from 'src/app/services/customer.service';


@Component({
  selector: 'app-consult1',
  templateUrl: './consult1.component.html',
  styleUrls: ['./consult1.component.css']
})
export class Consult1Component implements OnInit {
  dataConsult!: IConsult;

  constructor(public ServiceCustomer : CustomerService) { }

  ngOnInit(): void {
    this.getServicesConsult();
  }

  getServicesConsult(): void {
    /* this.servicesConsult.getServicio1()
        .subscribe(dataConsult => this.dataConsult = dataConsult); */
  }

}
