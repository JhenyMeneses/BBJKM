import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateFatca } from '../Interface/createFatca';
import { CustomerService } from '../services/customer.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-create-fatca',
  templateUrl: './create-fatca.component.html',
  styleUrls: ['./create-fatca.component.css'],
})

export class CreateFatcaComponent implements OnInit {
  @Input() IDFatca! : string;
  newFatca!: FormGroup;
  dataFatca!: ICreateFatca;
  submitted = false;
  //"2017-12-04T08:25:00.000-0600
  fecha = formatDate( new Date(), 'yyyy-MM-ddccccchh:mm:ss.SSSZZ' , 'en-US');
  Obli!: string;
  NumObli!: number;
  Indicators: any[] = [];
  cadenaName!: string;
  cadenaValue!: string;
  tamano: number = 0;
  cont: number = 0;

  constructor(private ServiceCustomer: CustomerService, private fbFatca: FormBuilder) {
    this.newFatca = this.fbFatca.group({
      idFatca: ['', Validators.required],
      indicatorIdI0: ['', Validators.required],
      nameI: ['', Validators.required],
      valueI: ['', Validators.required],
      indicatorIdI1: ['', Validators.required],
      nameI2: ['', Validators.required],
      valueI2: ['', Validators.required],
      indicatorIdI2: ['', Validators.required],
      nameI3: ['', Validators.required],
      valueI3: ['', Validators.required],
      indicatorIdI3: ['', Validators.required],
      nameI4: ['', Validators.required],
      valueI4: ['', Validators.required],
      countryCode1: ['', Validators.required],
      idObligation1: ['', Validators.required],
      countryCode2: ['', Validators.required],
      idObligation2: ['', Validators.required],
      countryCode3: ['', Validators.required],
      idObligation3: ['', Validators.required],
      countryCode4: ['', Validators.required],
      idObligation4: ['', Validators.required],
      oblifis: ['', Validators.required],
      cantobl: ['', Validators.required],
      descriptionCRS: ['', Validators.required],
      dateValueC: ['', Validators.required],
      dateValueM: ['', Validators.required],
      estadoFatca: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.getFatcaNew();
  }

  closeFatca() {
    this.ServiceCustomer.$modalFatca.emit(false);
  }

  createFatca() {
    const SubmittedFatca: ICreateFatca = {
      idFatca: this.newFatca.value.idFatca,
      indicators: [
        {
          indicatorId: this.newFatca.value.indicatorIdI0,
          name: this.newFatca.value.nameI,
          value: this.newFatca.value.valueI,
        },
        {
          indicatorId: this.newFatca.value.indicatorIdI1,
          name: this.newFatca.value.nameI2,
          value: this.newFatca.value.valueI2,
        },
        {
          indicatorId: this.newFatca.value.indicatorIdI2,
          name: this.newFatca.value.nameI3,
          value: this.newFatca.value.valueI3,
        },
        {
          indicatorId: this.newFatca.value.indicatorIdI3,
          name: this.newFatca.value.nameI4,
          value: this.newFatca.value.valueI4,
        },
      ],
      obligation: [
        {
          countryCode: this.newFatca.value.countryCode1,
          idObligation: this.newFatca.value.idObligation1,
        },
        {
          countryCode: this.newFatca.value.countryCode2,
          idObligation: this.newFatca.value.idObligation2,
        },
        {
          countryCode: this.newFatca.value.countryCode3,
          idObligation: this.newFatca.value.idObligation3,
        },
        {
          countryCode: this.newFatca.value.countryCode4,
          idObligation: this.newFatca.value.idObligation4,
        },
      ],
      oblifis: this.newFatca.value.oblifis,
      cantobl: this.newFatca.value.cantobl,
      descriptionCRS: this.newFatca.value.descriptionCRS,
      dateFatca: [
        {
          dateId: 'Fecha de creacion',
          dateName: 'Fecha de creacion',
          dateValue: this.newFatca.value.dateValueC,
        },
        {
          dateId: 'Fecha de modificacion',
          dateName: 'Fecha de modificacion',
          dateValue: this.newFatca.value.dateValueM,
        },
      ],
      estadoFatca: this.newFatca.value.estadoFatca,
    };
    this.submitted = true;

    this.ServiceCustomer.createFatca(SubmittedFatca).subscribe((data) =>      
    console.log(data)
    );
  }

  getFatcaNew() {
    console.log('ask someone if getFatca work');
    console.log(this.IDFatca);
    this.ServiceCustomer.getNewFatca().subscribe(async (dataFatca) => {
      this.tamano = dataFatca['indicators'].length;
      while(this.cont <= this.tamano-1){ 
       this.newFatca.addControl(`indicatorIdI${this.cont}`, this.fbFatca.control('',Validators.required));
       this.cont++; 
       }
 
      await this.newFatca.setValue({
        idFatca: this.IDFatca,
        indicatorIdI0: dataFatca['indicators'][0]['indicatorId'],
        nameI: dataFatca['indicators'][0]['name'],
        valueI: dataFatca['indicators'][0]['value'],
        indicatorIdI1: dataFatca['indicators'][1]['indicatorId'],
        nameI2: dataFatca['indicators'][1]['name'],
        valueI2: dataFatca['indicators'][1]['value'],
        indicatorIdI2: dataFatca['indicators'][2]['indicatorId'],
        nameI3: dataFatca['indicators'][2]['name'],
        valueI3: dataFatca['indicators'][2]['value'],
        indicatorIdI3: dataFatca['indicators'][3]['indicatorId'],
        nameI4: dataFatca['indicators'][3]['name'],
        valueI4: dataFatca['indicators'][3]['value'],
        countryCode1: dataFatca['obligation'][0]['countryCode'],
        idObligation1: dataFatca['obligation'][0]['idObligation'],
        countryCode2: dataFatca['obligation'][1]['countryCode'],
        idObligation2: dataFatca['obligation'][1]['idObligation'],
        countryCode3: dataFatca['obligation'][2]['countryCode'],
        idObligation3: dataFatca['obligation'][2]['idObligation'],
        countryCode4: dataFatca['obligation'][3]['countryCode'],
        idObligation4: dataFatca['obligation'][3]['idObligation'],
        oblifis: dataFatca['oblifis'],
        cantobl: dataFatca['cantobl'],
        descriptionCRS: dataFatca['descriptionCRS'],
        dateValueC: dataFatca['dateFatca'][0]['dateValue'],
        dateValueM: dataFatca['dateFatca'][1]['dateValue'],
        estadoFatca: dataFatca['estadoFatca'],
      });
    });
  }

  campos(varOblifis: string) {
    this.Obli = varOblifis;
    if (this.Obli == 'S') {
      let control = this.newFatca.get('cantobl');
      control?.setValidators([Validators.required, Validators.minLength(1)]);
    }
  }

  userNamengmodelchange(varCantobl: number) {
    this.NumObli = varCantobl;
  }
}
