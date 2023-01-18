import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { IModClient } from '../Interface/modClient';
import { ICreateClients } from '../Interface/createClient';
import { IConsultById } from '../Interface/consultById';
import { IConsultFatca } from '../Interface/consultFatca';
import { IListEconomic } from '../Interface/listEconomicDat';
import { IListAddress } from '../Interface/listAddress';
import { IListContact } from '../Interface/listContactDetails';

@Component({
  selector: 'app-mod-client',
  templateUrl: './mod-client.component.html',
  styleUrls: ['./mod-client.component.css']
})
export class ModClientComponent implements OnInit {
  @Input() IDClient! : string;
  @Input() DocNum! : string;
  dataModCustumer! : ICreateClients;
  submitted = false;
  errorserver = false;
  

  fgCustomer: FormGroup;
  fgConsultFatca: FormGroup;
  fgConsultEconomic: FormGroup;
  fgConsultAddress: FormGroup;

  dataConsultById!: IConsultById;
  dataConsultFatca!: IConsultFatca;
  dataListEconomic!: IListEconomic;
  dataListAddress!: IListAddress;

  infoAdicional!: string;
  typeNumDoc! : string;

  disableInputbox = true;
  ArrTypeContac: any[] = [];
  ArrContac: any[] = [];
  ArrCheckContac: any[] = [];
  ArrPrefeContac: any[] = [];
  ArrIdIndic: any[] = [];
  ArrNamIndic: any[] = [];
  ArrValIndic: any[] = [];
  ArrCodObli: any[] = [];
  ArrIdObli: any[] = [];
  ArrIdIncomes: any[] = [];
  ArrCurrIncomes: any[] = [];
  ArrAmouIncomes: any[] = [];

  ArrListDtd : any[] = [];
  ArrListDcn : any[] = [];
  ArrListDsn : any[] = [];
  ArrListDlc : any[] = [];
  ArrListDla : any[] = [];
  ArrListDlz : any[] = [];
  ArrListDls : any[] = [];
  ArrListDa : any[] = [];
  ArrListDai : any[] = [];

  constructor(
    private ServiceCustomer: CustomerService,
    private fbCustomer: FormBuilder,
    private fbConsultFatca: FormBuilder,
    private fbConsultEconomic: FormBuilder,
    private fbConsultAddress: FormBuilder
  ) {
    this.fgCustomer = this.fbCustomer.group({
      clientId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surnames: ['', Validators.required],
      birthDate: ['', Validators.required],
      cityBir: ['', Validators.required],
      nationalities: ['', Validators.required],
      documentTypeDT: ['', Validators.required],
      documentNumberDT: ['', Validators.required],
      cityDT: ['', Validators.required],
      addressNameD: ['', Validators.required],
      cityD: ['', Validators.required],
      stateD: ['', Validators.required],
      countryD: ['', Validators.required],
      membershipDate: ['', Validators.required],
      gender: ['', Validators.required],
      branch: ['', Validators.required],
      managerId: ['', Validators.required],
      customerType: ['', Validators.required],
      education: ['', Validators.required],
      profession: ['', Validators.required],
      cardname: ['', Validators.required],
      namePI: ['', Validators.required],
      documentTypePI: ['', Validators.required],
      documentNumberPI: ['', Validators.required],
      personsInCharge: ['', Validators.required],
    });

    this.fgConsultFatca = this.fbConsultFatca.group({
      idFatca: ['', Validators.required],
      oblifis: ['', Validators.required],
      cantobl: ['', Validators.required],
      descriptionCRS: ['', Validators.required]
    });

    this.fgConsultEconomic = this.fbConsultEconomic.group({
      economicActivity: ['', Validators.required],
      occupationType: ['', Validators.required],
      profesionPosition: ['', Validators.required],
      workStartDate: ['', Validators.required],
      employmentSituation: ['', Validators.required],
      activity: ['', Validators.required],
    });

    this.fgConsultAddress = this.fbConsultAddress.group({
      addressType: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      addressName: ['', Validators.required],
      zipCode: ['', Validators.required],
      stratum: ['', Validators.required],
      antiquity: ['', Validators.required],
      additionalInformation: ['', Validators.required],
    });

  }

  ngOnInit(): void {
    this.getCustomersNew();
  }

  async getCustomersNew() {
    console.log('ask someone if getCustomersxId work');
    //console.log(this.IDClient);
    this.ServiceCustomer.getCustomerById(this.IDClient).subscribe(async (dataConsultById) => {
/*       console.log('CONSULTA PERSONA');
      console.log(dataConsultById);  */  
      
      let lasname;
      if (dataConsultById['data']['surnames']) {
        lasname = dataConsultById['data']['surnames'];
      } else {
        lasname = '';
      }
      
      let IDmanager;
      if (dataConsultById['data']['manager']['managerId']) {
        IDmanager = dataConsultById['data']['manager']['managerId'];
      } else {
        IDmanager = '';
      }

      let PIDname ;
      if (dataConsultById['data']['partnerInformation']['name']) {
        PIDname = dataConsultById['data']['partnerInformation']['name'];
      } else {
        PIDname = '';
      }

      let PIDDTname ;
      if (dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentType']['name']) {
        PIDDTname = dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentType']['name'];
      } else {
        PIDDTname = '';
      }

      let PIDdocNumber ;
      if (dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentNumber']) {
        PIDdocNumber = dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentNumber'];
      } else {
        PIDdocNumber = '';
      }


      let Tam = dataConsultById['data']['contactDetails'].length;
      let cont = 0;
      while (cont <= Tam-1) {
        let tc = dataConsultById['data']['contactDetails'][cont]['contactType']['name'];
        let tempTc = this.ArrTypeContac.push(tc);
        let nc = dataConsultById['data']['contactDetails'][cont]['contact'];
        let tempNc = this.ArrContac.push(nc);
        let pc = dataConsultById['data']['contactDetails'][cont]['isPreferential'];
        let tempPc = this.ArrPrefeContac.push(pc);
        let vc = dataConsultById['data']['contactDetails'][cont]['isChecked'];
        let tempVc = this.ArrCheckContac.push(vc);
        cont++;
      }

      this.fgCustomer.setValue({
        clientId: dataConsultById['data']['clientId'],
        firstName: dataConsultById['data']['firstName'],
        lastName: dataConsultById['data']['lastName'],
        surnames: lasname,
        birthDate: dataConsultById['data']['birthDate'],
        cityBir: dataConsultById['data']['identityDocuments'][0]['city'],
        nationalities: dataConsultById['data']['nationalities'][0]['id'],
        documentTypeDT: dataConsultById['data']['identityDocuments'][0]['documentType']['name'],
        documentNumberDT: dataConsultById['data']['identityDocuments'][0]['documentNumber'],
        cityDT: dataConsultById['data']['identityDocuments'][0]['city'],
        addressNameD: dataConsultById['data']['legalAddress']['addressName'],
        cityD: dataConsultById['data']['legalAddress']['city'],
        stateD: dataConsultById['data']['legalAddress']['state'],
        countryD: dataConsultById['data']['legalAddress']['country']['name'],
        membershipDate: dataConsultById['data']['membershipDate'],
        gender: dataConsultById['data']['gender']['id'],
        branch: dataConsultById['data']['bank']['branch']['name'],
        managerId: IDmanager,
        customerType: dataConsultById['data']['customerType']['name'],
        education: dataConsultById['data']['education']['level'],
        profession: dataConsultById['data']['profession'],
        cardname: dataConsultById['data']['cardName'],
        namePI: PIDname,
        documentTypePI: PIDDTname,
        documentNumberPI: PIDdocNumber,
        personsInCharge: dataConsultById['data']['personsInCharge'],
      });
      
    });

    this.ServiceCustomer.getFatcaById(this.IDClient).subscribe((dataConsultFatca) => {
      if (dataConsultFatca['indicators'].length != 0) {
        let valorIndicador;
        let Tam = dataConsultFatca['indicators'].length;
        let cont = 0;
        while (cont <= Tam - 1) {
          let iId = dataConsultFatca['indicators'][cont]['indicatorId'];
          let tempIi = this.ArrIdIndic.push(iId);
          let iNa = dataConsultFatca['indicators'][cont]['name'];
          let tempNa = this.ArrNamIndic.push(iNa);
          let iVal = dataConsultFatca['indicators'][cont]['value'];
          if (iVal) {
            valorIndicador = dataConsultFatca['indicators'][cont]['value'];
          } else {
            valorIndicador = '';
          }
          let tempIval = this.ArrValIndic.push(valorIndicador);
          cont++;
        }
      }

      if (dataConsultFatca['obligation'].length != 0) {
        let tamObli = dataConsultFatca['obligation'].length;
        let contObli = 0;
        while (contObli <= tamObli - 1) {
          let oCc = dataConsultFatca['obligation'][contObli]['countryCode'];
          let tempOcc = this.ArrCodObli.push(oCc);
          let oId = dataConsultFatca['obligation'][contObli]['idObligation'];
          let tempOid = this.ArrIdObli.push(oId);
          contObli++;
        }
      }

      this.fgConsultFatca.setValue({
        idFatca: dataConsultFatca['idFatca'],
        oblifis: dataConsultFatca['oblifis'],
        cantobl: dataConsultFatca['cantobl'],
        descriptionCRS: dataConsultFatca['descriptionCRS']
      });
    });

    this.ServiceCustomer.getEconomicById(this.DocNum).subscribe((dataListEconomic) => {
      if (dataListEconomic['data']['incomes'].length != 0) {
        let TamI = dataListEconomic['data']['incomes'].length;
        let contI = 0;
        while (contI <= TamI - 1) {
          let iIdT = dataListEconomic['data']['incomes'][contI]['incomesType']['id'];
          let tempIid = this.ArrIdIncomes.push(iIdT);
          let iCu = dataListEconomic['data']['incomes'][contI]['incomesValue']['currency'];
          let tempCu = this.ArrCurrIncomes.push(iCu);
          let iAm = dataListEconomic['data']['incomes'][contI]['incomesValue']['amount'];
          let tempIam = this.ArrAmouIncomes.push(iAm);
          contI++
        } 
      }

      this.fgConsultEconomic.setValue({
        economicActivity: dataListEconomic['data']['economicActivity']['name'],
        occupationType: dataListEconomic['data']['occupationType']['name'],
        profesionPosition: dataListEconomic['data']['workPlace']['profesionPosition']['name'],
        workStartDate: dataListEconomic['data']['workPlace']['workStartDate'],
        employmentSituation: dataListEconomic['data']['employmentSituation'],
        activity: dataListEconomic['data']['workPlace']['activity'],
      });
    });

    this.ServiceCustomer.getAddressById(this.DocNum).subscribe((dataListAddress) => {
      /* console.log('CONSULTA DIRECCIONES');
      console.log(dataListAddress); */
      this.infoAdicional;
      if (dataListAddress['data'][0]['location']['additionalInformation']) {
        this.infoAdicional =
          dataListAddress['data'][0]['location']['additionalInformation'];
      } else {
        this.infoAdicional = '';
      }

      if (dataListAddress['data'].length != 0) {
        let tamLD = dataListAddress['data'].length;
        let contLD = 0;

        while (contLD <= tamLD - 1) {             
          let LDtd = dataListAddress['data'][contLD]['addressType']['name'];
          let tempLDtd = this.ArrListDtd.push(LDtd);
          let LDcn = dataListAddress['data'][contLD]['location']['country']['name'];
          let tempLDcn = this.ArrListDcn.push(LDcn);
          let LDsn = dataListAddress['data'][contLD]['location']['state']['name'];
          let tempLDsn = this.ArrListDsn.push(LDsn);
          let LDlc = dataListAddress['data'][contLD]['location']['city'];
          let tempLDlc = this.ArrListDlc.push(LDlc);
          let LDla = dataListAddress['data'][contLD]['location']['addressName'];
          let tempLDla = this.ArrListDla.push(LDla);
          let LDlz = dataListAddress['data'][contLD]['location']['zipCode'];
          let tempLDlz = this.ArrListDlz.push(LDlz);
          let LDls = dataListAddress['data'][contLD]['location']['stratum'];
          let tempLDls = this.ArrListDls.push(LDls);        
          let LDa = dataListAddress['data'][contLD]['antiquity'];
          let tempLDa = this.ArrListDa.push(LDa);  
          let LDia = this.infoAdicional;
          let tempLDia = this.ArrListDai.push(LDia);  
          contLD++
        } 

      }
    });

  }

  updateClient(){
    console.log('ask someone if getupdateClient work');

    const dataModClient : ICreateClients = {
      firstName: this.fgCustomer.value.firstName, 
      lastName: this.fgCustomer.value.lastName,
      surnames: this.fgCustomer.value.surnames,
      gender: { id: this.fgCustomer.value.gender },
      bank: {
        branch: { id: this.fgCustomer.value.branch },
        id: this.fgCustomer.value.bank,
      },
      birthData: {
        country: { id: this.fgCustomer.value.countryBir },
        birthDate: this.fgCustomer.value.birthDate,
        state: { id: this.fgCustomer.value.stateBir },
        city: this.fgCustomer.value.cityBir,
      },
      nationalities: [{ id: this.fgCustomer.value.nationalities }],
      identityDocuments: [
        {
          documentType: { id: this.fgCustomer.value.documentTypeDT },
          country: { id: this.fgCustomer.value.countryDT },
          city: this.fgCustomer.value.cityDT,
          state: { id: this.fgCustomer.value.stateDT },
          expirationDate: this.fgCustomer.value.expirationDate,
          documentNumber: this.fgCustomer.value.documentNumberDT,
        },
      ],
      maritalStatus: { id: this.fgCustomer.value.maritalStatus },
      contactDetails: [
        {
          contact: this.fgCustomer.value.contact,
          contactType: { id: "MOBILE_NUMBER" },
        },
        {
          contact: this.fgCustomer.value.contact2,
          contactType: { id: "EMAIL" },
        },
        {
          contact: this.fgCustomer.value.contact3,
          contactType: { id: "OFFICE_NUMBER" },
        },
      ],
      economicData: {
        economicActivity: { id: this.fgCustomer.value.economicActivity },
        occupationType: { id: this.fgCustomer.value.occupationType },
        employmentSituation: this.fgCustomer.value.employmentSituation,
        incomes: [
          {
            incomesType: { id: this.fgCustomer.value.incomesType },
            incomesValue: {
              currency: this.fgCustomer.value.currency,
              amount: this.fgCustomer.value.amount,
            },
          },
        ],
        workPlace: {
          name: this.fgCustomer.value.nameWP,
          taxpayerIdentification: {
            documentType: { id: this.fgCustomer.value.documentTypeWP },
            documentNumber: this.fgCustomer.value.documentNumberWP,
          },
          workStartDate: this.fgCustomer.value.workStartDateWP,
          address: {
            location: {
              addressName: this.fgCustomer.value.addressNameWP,
              country: { id: this.fgCustomer.value.countryWP },
              state: { id: this.fgCustomer.value.stateWP },
              city: this.fgCustomer.value.cityWP,
            },
          },
        },
      },
      addresses: [
        {
          location: {
            addressName: this.fgCustomer.value.addressNameD,
            city: this.fgCustomer.value.cityD,
            state: { id: this.fgCustomer.value.stateD },
            country: { id: this.fgCustomer.value.countryD },
          },
        },
      ],
      personsInCharge: this.fgCustomer.value.personsInCharge,
    };
    this.submitted = true;

    this.ServiceCustomer.updateCustomer(this.DocNum,dataModClient).subscribe(data => {
      console.log(data);
    }, error => {
      this.errorserver = true;
      console.log("¡¡Cliente NO ACTUALIZADO!!");
    });

  }

  closeUpdate(){
    this.ServiceCustomer.$modalModify.emit(false); 
  }

}
