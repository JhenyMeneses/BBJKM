import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IListAddress } from 'src/app/Interface/listAddress';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {
  fgConsultAddress : FormGroup;
  dataListAddress! : IListAddress;
  infoAdicional! : string;

  constructor(private ServiceCustomer : CustomerService, private fbConsultAddress : FormBuilder) { 
    this.fgConsultAddress = this.fbConsultAddress.group({
      addressType : new FormControl({value: '',disabled: true}),
      country : new FormControl({value: '',disabled: true}),
      state : new FormControl({value: '',disabled: true}),
      city : new FormControl({value: '',disabled: true}),
      addressName : new FormControl({value: '',disabled: true}),
      zipCode : new FormControl({value: '',disabled: true}),
      stratum : new FormControl({value: '',disabled: true}),
      antiquity : new FormControl({value: '',disabled: true}),
      additionalInformation : new FormControl({value: '',disabled: true}),
    })
  }

  ngOnInit(): void {
    this.getListAddress();
  }

  getListAddress(){
    this.ServiceCustomer.getAddress().subscribe(dataListAddress => { 
      console.log(dataListAddress);
      this.infoAdicional;
      if(dataListAddress['data'][0]['location']['additionalInformation']){
        this.infoAdicional = dataListAddress['data'][0]['location']['additionalInformation']
      }else{
        this.infoAdicional = '';
      }

      this.fgConsultAddress.setValue({
        addressType : dataListAddress['data'][0]['addressType']['name'],
        country : dataListAddress['data'][0]['location']['country']['name'],
        state : dataListAddress['data'][0]['location']['state']['name'],
        city : dataListAddress['data'][0]['location']['city'],
        addressName : dataListAddress['data'][0]['location']['addressName'],
        zipCode : dataListAddress['data'][0]['location']['zipCode'],
        stratum : dataListAddress['data'][0]['location']['stratum'],
        antiquity : dataListAddress['data'][0]['antiquity'],
        additionalInformation : this.infoAdicional,
      })




      

    })
  }

  
}
