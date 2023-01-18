import { Component, OnInit } from '@angular/core';
import { IModAddress } from 'src/app/Interface/modAddress';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-mod-address',
  templateUrl: './mod-address.component.html',
  styleUrls: ['./mod-address.component.css']
})
export class ModAddressComponent implements OnInit {
  dataModAddress! : IModAddress;

  constructor( private ServiceCustomer : CustomerService) { }

  ngOnInit(): void {
    this.getModAddresService();
  }

  getModAddresService():void{
    /* this.ServiceCustomer.getModAddress()
    .subscribe(dataModAddress => this.dataModAddress = dataModAddress) */
  }

}
