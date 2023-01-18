import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IListEconomic } from 'src/app/Interface/listEconomicDat';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-economic',
  templateUrl: './list-economic.component.html',
  styleUrls: ['./list-economic.component.css']
})
export class ListEconomicComponent implements OnInit {
  fgConsultEconomic : FormGroup;
  dataListEconomic!: IListEconomic;

  constructor(private ServiceCustomer : CustomerService, private fbConsultEconomic : FormBuilder) { 
    this.fgConsultEconomic = this.fbConsultEconomic.group({
      economicActivity : new FormControl({value: '',disabled: true}),
      occupationType : new FormControl({value: '',disabled: true}),
      incomesType : new FormControl({value: '',disabled: true}),
      currency : new FormControl({value: '',disabled: true}),
      amount : new FormControl({value: '',disabled: true}),
      profesionPosition : new FormControl({value: '',disabled: true}),
      workStartDate : new FormControl({value: '',disabled: true}),
      employmentSituation : new FormControl({value: '',disabled: true}),
      activity : new FormControl({value: '',disabled: true}),
    })
  }

  ngOnInit(): void {
    /* this.ServiceCustomer.getEconomic().subscribe(data => {this.dataListEconomic = data}); */
    this.getListEconomic();
  }

  getListEconomic(){
    this.ServiceCustomer.getEconomic().subscribe(dataListEconomic => {
      console.log(dataListEconomic);

/*       if(dataListEconomic['incomes']){
        console.log(dataListEconomic['incomes'].length);
      } */

      this.fgConsultEconomic.setValue({
        economicActivity : dataListEconomic['data']['economicActivity']['name'],
        occupationType : dataListEconomic['data']['occupationType']['name'],
        incomesType : dataListEconomic['data']['incomes'][0]['incomesType']['id'],
        currency : dataListEconomic['data']['incomes'][0]['incomesValue']['currency'],
        amount : dataListEconomic['data']['incomes'][0]['incomesValue']['amount'],
        profesionPosition : dataListEconomic['data']['workPlace']['profesionPosition'],
        workStartDate : dataListEconomic['data']['workPlace']['workStartDate'],
        employmentSituation : dataListEconomic['data']['employmentSituation'],
        activity : dataListEconomic['data']['workPlace']['activity'],
      })
      
    })
  }
}
