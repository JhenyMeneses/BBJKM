import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { IConsultFatca } from '../../Interface/consultFatca';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-consult-fatca',
  templateUrl: './consult-fatca.component.html',
  styleUrls: ['./consult-fatca.component.css'],
})
export class ConsultFatcaComponent implements OnInit {
  fgConsultFatca : FormGroup;

  dataConsultFatca!: IConsultFatca;
  datos : IConsultFatca [] = [];

  constructor(private ServiceCustomer : CustomerService, private fbConsultFatca : FormBuilder ) {
    this.fgConsultFatca = this.fbConsultFatca.group({
      idFatca: new FormControl({value: '',disabled: true}),
      indicatorIdI: new FormControl({value: '',disabled: true}),
      nameI: new FormControl({value: '',disabled: true}),
      valueI: new FormControl({value: '',disabled: true}),
      indicatorIdI2: new FormControl({value: '',disabled: true}),
      nameI2: new FormControl({value: '',disabled: true}),
      valueI2: new FormControl({value: '',disabled: true}),
      indicatorIdI3: new FormControl({value: '',disabled: true}),
      nameI3: new FormControl({value: '',disabled: true}),
      valueI3: new FormControl({value: '',disabled: true}),
      indicatorIdI4: new FormControl({value: '',disabled: true}),
      nameI4: new FormControl({value: '',disabled: true}),
      valueI4: new FormControl({value: '',disabled: true}),
      countryCode1: new FormControl({value: '',disabled: true}),
      idObligation1: new FormControl({value: '',disabled: true}),
      countryCode2: new FormControl({value: '',disabled: true}),
      idObligation2: new FormControl({value: '',disabled: true}),
      countryCode3: new FormControl({value: '',disabled: true}),
      idObligation3: new FormControl({value: '',disabled: true}),
      countryCode4: new FormControl({value: '',disabled: true}),
      idObligation4: new FormControl({value: '',disabled: true}),
      oblifis: new FormControl({value: '',disabled: true}),
      cantobl: new FormControl({value: '',disabled: true}),
      descriptionCRS: new FormControl({value: '',disabled: true}),
      dateValueC: new FormControl({value: '',disabled: true}),
      dateValueM: new FormControl({value: '',disabled: true}),
    })

  }

  ngOnInit(){
    this.getfatca();
  }

  getfatca(){
    this.ServiceCustomer.getFatca().subscribe(dataConsultFatca => {
      console.log(dataConsultFatca);
      let valorIndicador1 = dataConsultFatca['indicators'][0]['value'];
      let valorIndicador2 = dataConsultFatca['indicators'][1]['value'];

      if(valorIndicador1 || valorIndicador2){
        valorIndicador1 = dataConsultFatca['indicators'][0]['value'];
        valorIndicador2 =  dataConsultFatca['indicators'][1]['value'];
      }else{
        valorIndicador1 = '';
        valorIndicador2 = '';
      }
      this.fgConsultFatca.setValue({
        idFatca: dataConsultFatca['idFatca'],
        indicatorIdI: dataConsultFatca['indicators'][0]['indicatorId'],
        nameI: dataConsultFatca['indicators'][0]['name'],
        valueI: valorIndicador1,
        indicatorIdI2: dataConsultFatca['indicators'][1]['indicatorId'],
        nameI2: dataConsultFatca['indicators'][1]['name'],
        valueI2: valorIndicador2,
        indicatorIdI3: dataConsultFatca['indicators'][2]['indicatorId'],
        nameI3: dataConsultFatca['indicators'][2]['name'],
        valueI3: dataConsultFatca['indicators'][2]['value'],
        indicatorIdI4: dataConsultFatca['indicators'][3]['indicatorId'],
        nameI4: dataConsultFatca['indicators'][3]['name'],
        valueI4: dataConsultFatca['indicators'][3]['value'],
        countryCode1: dataConsultFatca['obligation'][0]['countryCode'],
        idObligation1: dataConsultFatca['obligation'][0]['idObligation'],
        countryCode2: dataConsultFatca['obligation'][1]['countryCode'],
        idObligation2: dataConsultFatca['obligation'][1]['idObligation'],
        countryCode3: dataConsultFatca['obligation'][2]['countryCode'],
        idObligation3: dataConsultFatca['obligation'][2]['idObligation'],
        countryCode4: dataConsultFatca['obligation'][3]['countryCode'],
        idObligation4: dataConsultFatca['obligation'][3]['idObligation'],
        oblifis: dataConsultFatca['oblifis'],
        cantobl: dataConsultFatca['cantobl'],
        descriptionCRS: dataConsultFatca['descriptionCRS'],
        dateValueC: dataConsultFatca['dateFatca'][0]['dateValue'],
        dateValueM: dataConsultFatca['dateFatca'][1]['dateValue'],
      })
    });

  }

}
