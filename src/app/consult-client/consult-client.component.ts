import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { IConsultById } from '../Interface/consultById';
import { IConsultFatca } from '../Interface/consultFatca';
import { IListEconomic } from '../Interface/listEconomicDat';
import { IListAddress } from '../Interface/listAddress';
import { IListContact } from '../Interface/listContactDetails';

@Component({
  selector: 'app-consult-client',
  templateUrl: './consult-client.component.html',
  styleUrls: ['./consult-client.component.css'],
})
export class ConsultClientComponent implements OnInit {
  @Input() IDClient! : string;
  @Input() IDNumDoc! : string;

  fgCustomer: FormGroup;
  fgConsultFatca: FormGroup;
  fgConsultEconomic: FormGroup;
  fgConsultAddress: FormGroup;
  fgConsultContact: FormGroup;

  dataConsultById!: IConsultById;
  dataConsultFatca!: IConsultFatca;
  dataListEconomic!: IListEconomic;
  dataListAddress!: IListAddress;
  dataListContact!: IListContact;

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
  ArrLContact : any[] = [];
  ArrLContactType : any[] = [];
  ArrLCountry : any[] = [];
  ArrLisPreferential : any[] = [];
  ArrLisChecked : any[] = [];

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
    private fbConsultAddress: FormBuilder,
    private fbConsultContact: FormBuilder
  ) {
    this.fgCustomer = this.fbCustomer.group({
      clientId: new FormControl({ value: '', disabled: true }),
      firstName: new FormControl({ value: '', disabled: true }),
      lastName: new FormControl({ value: '', disabled: true }),
      surnames: new FormControl({ value: '', disabled: true }),
      birthDate: new FormControl({ value: '', disabled: true }),
      cityBir: new FormControl({ value: '', disabled: true }),
      nationalities: new FormControl({ value: '', disabled: true }),
      documentTypeDT: new FormControl({ value: '', disabled: true }),
      documentNumberDT: new FormControl({ value: '', disabled: true }),
      cityDT: new FormControl({ value: '', disabled: true }),
      addressNameD: new FormControl({ value: '', disabled: true }),
      cityD: new FormControl({ value: '', disabled: true }),
      stateD: new FormControl({ value: '', disabled: true }),
      countryD: new FormControl({ value: '', disabled: true }),
      membershipDate: new FormControl({ value: '', disabled: true }),
      gender: new FormControl({ value: '', disabled: true }),
      branch: new FormControl({ value: '', disabled: true }),
      managerId: new FormControl({ value: '', disabled: true }),
      customerType: new FormControl({ value: '', disabled: true }),
      education: new FormControl({ value: '', disabled: true }),
      profession: new FormControl({ value: '', disabled: true }),
      cardname: new FormControl({ value: '', disabled: true }),
      namePI: new FormControl({ value: '', disabled: true }),
      documentTypePI: new FormControl({ value: '', disabled: true }),
      documentNumberPI: new FormControl({ value: '', disabled: true }),
      personsInCharge: new FormControl({ value: '', disabled: true }),
    });

    this.fgConsultFatca = this.fbConsultFatca.group({
      idFatca: new FormControl({ value: '', disabled: true }),
      oblifis: new FormControl({ value: '', disabled: true }),
      cantobl: new FormControl({ value: '', disabled: true }),
      descriptionCRS: new FormControl({ value: '', disabled: true })
/*       dateValueC: new FormControl({ value: '', disabled: true }),
      dateValueM: new FormControl({ value: '', disabled: true }), */
    });

    this.fgConsultEconomic = this.fbConsultEconomic.group({
      economicActivity: new FormControl({ value: '', disabled: true }),
      occupationType: new FormControl({ value: '', disabled: true }),
      profesionPosition: new FormControl({ value: '', disabled: true }),
      workStartDate: new FormControl({ value: '', disabled: true }),
      employmentSituation: new FormControl({ value: '', disabled: true }),
      activity: new FormControl({ value: '', disabled: true }),
    });

    this.fgConsultAddress = this.fbConsultAddress.group({});

    this.fgConsultContact = this.fbConsultContact.group({});
  }

  ngOnInit(): void {
    //this.getCustomers();
    this.getCustomersxId();    
    
  }

  closeConsult() {
    this.ServiceCustomer.$modalConsult.emit(false);
  }

  /**Funcion que ejecuta los servicios reales */
  async getCustomersxId() {
    console.log('ask someone if getCustomersxId work');
    //console.log(this.IDClient);
    this.ServiceCustomer.getCustomerById(this.IDClient).subscribe(async (dataConsultById) => {
      /* console.log('CONSULTA PERSONA');
      console.log(dataConsultById); */   
      
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
      /* console.log('CONSULTA FATCA');
      console.log(dataConsultFatca); */
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
/*         dateValueC: dataConsultFatca['dateFatca'][0]['dateValue'],
        dateValueM: dataConsultFatca['dateFatca'][1]['dateValue'], */
      });
    });

    this.ServiceCustomer.getEconomicById(this.IDNumDoc).subscribe((dataListEconomic) => {
      /* console.log('CONSULTA DATOS ECONOMICOS');
      console.log(dataListEconomic); */

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

    this.ServiceCustomer.getAddressById(this.IDNumDoc).subscribe((dataListAddress) => {
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

    this.ServiceCustomer.getContactById(this.IDClient).subscribe((dataListContact) => {
      /* console.log('CONSULTA CONTACTOS');
      console.log(dataListContact['data']); */

      if (dataListContact['data'].length != 0) {
        let tamLC = dataListContact['data'].length;
        let contLC = 0;
        while (contLC <= tamLC - 1) {
          let lC = dataListContact['data'][contLC]['contact'];
          let tempLc = this.ArrLContact.push(lC);
          let lTc = dataListContact['data'][contLC]['contactType']['name'];
          let tempLtc = this.ArrLContactType.push(lTc);
          let lCc = dataListContact['data'][contLC]['country']['name'];
          let tempLcc = this.ArrLCountry.push(lCc);
          let lPc = dataListContact['data'][contLC]['isPreferential'];
          let tempLpc = this.ArrLisPreferential.push(lPc);
          let lIc = dataListContact['data'][contLC]['isChecked'];
          let tempLic = this.ArrLisChecked.push(lIc);
          
          contLC++
        } 
      }
    });
  }

  /**Funcion para utilizar la API JSON* */
  async getCustomers() {
    console.log('ask someone if getCustomers work');
    this.ServiceCustomer.getCustomer().subscribe(async (dataConsultById) => {
      let lasname;
      if (dataConsultById['data']['surnames']) {
        lasname = dataConsultById['data']['surnames'];
      } else {
        lasname = '';
      }

      let Tam = dataConsultById['data']['contactDetails'].length;
      let cont = 0;
      while (cont <= Tam - 1) {
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

      /******* */
      /*       this.fgCustomer = this.fbCustomer.group({
              clientId: new FormControl({ value: dataConsultById['data']['clientId'], disabled: true }),
              firstName: new FormControl({ value: dataConsultById['data']['firstName'], disabled: true }),
              lastName: new FormControl({ value: dataConsultById['data']['lastName'], disabled: true }),
              surnames: new FormControl({ value: lasname, disabled: true }),
              birthDate: new FormControl({ value: dataConsultById['data']['birthDate'], disabled: true }),
              cityBir: new FormControl({ value: dataConsultById['data']['identityDocuments'][0]['city'], disabled: true }),
              nationalities: new FormControl({ value: dataConsultById['data']['nationalities'][0]['id'], disabled: true }),
              documentTypeDT: new FormControl({ value: dataConsultById['data']['identityDocuments'][0]['documentType']['name'], disabled: true }),
              documentNumberDT: new FormControl({ value: dataConsultById['data']['identityDocuments'][0]['documentNumber'], disabled: true }),
              cityDT: new FormControl({ value: dataConsultById['data']['identityDocuments'][0]['city'], disabled: true }),
              addressNameD: new FormControl({ value: dataConsultById['data']['legalAddress']['addressName'], disabled: true }),
              cityD: new FormControl({ value: dataConsultById['data']['legalAddress']['city'], disabled: true }),
              stateD: new FormControl({ value: dataConsultById['data']['legalAddress']['state'], disabled: true }),
              countryD: new FormControl({ value: dataConsultById['data']['legalAddress']['country']['name'], disabled: true }),
              membershipDate: new FormControl({ value: dataConsultById['data']['membershipDate'], disabled: true }),
              gender: new FormControl({ value: dataConsultById['data']['gender']['id'], disabled: true }),
              branch: new FormControl({ value: dataConsultById['data']['bank']['branch']['name'], disabled: true }),
              managerId: new FormControl({ value: dataConsultById['data']['manager']['managerId'], disabled: true }),
              customerType: new FormControl({ value: dataConsultById['data']['customerType']['name'], disabled: true }),
              education: new FormControl({ value: dataConsultById['data']['education']['level'], disabled: true }),
              profession: new FormControl({ value: dataConsultById['data']['profession'], disabled: true }),
              cardname: new FormControl({ value: dataConsultById['data']['cardName'], disabled: true }),
              namePI: new FormControl({ value: dataConsultById['data']['partnerInformation']['name'], disabled: true }),
              documentTypePI: new FormControl({ value: dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentType']['name'], disabled: true }),
              documentNumberPI: new FormControl({ value: dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0]['documentNumber'], disabled: true }),
              personsInCharge: new FormControl({ value: dataConsultById['data']['personsInCharge'], disabled: true })
      
            }); */
      /****** */

      console.log(dataConsultById['data']);
      this.fgCustomer.setValue({
        clientId: dataConsultById['data']['clientId'],
        firstName: dataConsultById['data']['firstName'],
        lastName: dataConsultById['data']['lastName'],
        surnames: lasname,
        birthDate: dataConsultById['data']['birthDate'],
        cityBir: dataConsultById['data']['identityDocuments'][0]['city'],
        nationalities: dataConsultById['data']['nationalities'][0]['id'],
        documentTypeDT:
          dataConsultById['data']['identityDocuments'][0]['documentType']['name'],
        documentNumberDT:
          dataConsultById['data']['identityDocuments'][0]['documentNumber'],
        cityDT: dataConsultById['data']['identityDocuments'][0]['city'],
        addressNameD: dataConsultById['data']['legalAddress']['addressName'],
        cityD: dataConsultById['data']['legalAddress']['city'],
        stateD: dataConsultById['data']['legalAddress']['state'],
        countryD: dataConsultById['data']['legalAddress']['country']['name'],
        membershipDate: dataConsultById['data']['membershipDate'],
        gender: dataConsultById['data']['gender']['id'],
        branch: dataConsultById['data']['bank']['branch']['name'],
        managerId: dataConsultById['data']['manager']['managerId'],
        customerType: dataConsultById['data']['customerType']['name'],
        education: dataConsultById['data']['education']['level'],
        profession: dataConsultById['data']['profession'],
        cardname: dataConsultById['data']['cardName'],
        namePI: dataConsultById['data']['partnerInformation']['name'],
        documentTypePI:
          dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0][
            'documentType'
          ]['name'],
        documentNumberPI:
          dataConsultById['data']['partnerInformation']['partnerIdentityDocuments'][0][
            'documentNumber'
          ],
        personsInCharge: dataConsultById['data']['personsInCharge'],
      });
    });

    this.ServiceCustomer.getFatca().subscribe((dataConsultFatca) => {
      console.log(dataConsultFatca);
      if (dataConsultFatca['indicators'].length != 0) {
        console.log('PASO POR AQUI');

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
        /*         countryCode1: dataConsultFatca['obligation'][0]['countryCode'],
                idObligation1: dataConsultFatca['obligation'][0]['idObligation'],
                countryCode2: dataConsultFatca['obligation'][1]['countryCode'],
                idObligation2: dataConsultFatca['obligation'][1]['idObligation'],
                countryCode3: dataConsultFatca['obligation'][2]['countryCode'],
                idObligation3: dataConsultFatca['obligation'][2]['idObligation'],
                countryCode4: dataConsultFatca['obligation'][3]['countryCode'],
                idObligation4: dataConsultFatca['obligation'][3]['idObligation'], */
        oblifis: dataConsultFatca['oblifis'],
        cantobl: dataConsultFatca['cantobl'],
        descriptionCRS: dataConsultFatca['descriptionCRS'],
        dateValueC: dataConsultFatca['dateFatca'][0]['dateValue'],
        dateValueM: dataConsultFatca['dateFatca'][1]['dateValue'],
      });
    });

    this.ServiceCustomer.getEconomic().subscribe((dataListEconomic) => {
      console.log(dataListEconomic);

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
/*         incomesType: dataListEconomic['data']['incomes'][0]['incomesType']['id'],
        currency: dataListEconomic['data']['incomes'][0]['incomesValue']['currency'],
        amount: dataListEconomic['data']['incomes'][0]['incomesValue']['amount'], */
        profesionPosition: dataListEconomic['data']['workPlace']['profesionPosition']['name'],
        workStartDate: dataListEconomic['data']['workPlace']['workStartDate'],
        employmentSituation: dataListEconomic['data']['employmentSituation'],
        activity: dataListEconomic['data']['workPlace']['activity'],
      });
    });

    this.ServiceCustomer.getAddress().subscribe((dataListAddress) => {
      console.log(dataListAddress);
      this.infoAdicional;
      if (dataListAddress['data'][0]['location']['additionalInformation']) {
        this.infoAdicional =
          dataListAddress['data'][0]['location']['additionalInformation'];
      } else {
        this.infoAdicional = '';
      }

      this.fgConsultAddress.setValue({
        addressType: dataListAddress['data'][0]['addressType']['name'],
        country: dataListAddress['data'][0]['location']['country']['name'],
        state: dataListAddress['data'][0]['location']['state']['name'],
        city: dataListAddress['data'][0]['location']['city'],
        addressName: dataListAddress['data'][0]['location']['addressName'],
        zipCode: dataListAddress['data'][0]['location']['zipCode'],
        stratum: dataListAddress['data'][0]['location']['stratum'],
        antiquity: dataListAddress['data'][0]['antiquity'],
        additionalInformation: this.infoAdicional,
      });
    });

    this.ServiceCustomer.getContact().subscribe((dataListContact) => {
      console.log(dataListContact);

/*       if (dataListContact.length != 0) {
        let tamLC = dataListContact.length;
        let contLC = 0;
        while (contLC <= tamLC - 1) {
          let lC = dataListContact[contLC]['contact'];
          let tempLc = this.ArrLContact.push(lC);
          let lTc = dataListContact[contLC]['contactType']['name'];
          let tempLtc = this.ArrLContactType.push(lTc);
          let lCc = dataListContact[contLC]['country']['name'];
          let tempLcc = this.ArrLCountry.push(lCc);
          let lPc = dataListContact[contLC]['isPreferential'];
          let tempLpc = this.ArrLisPreferential.push(lPc);
          let lIc = dataListContact[contLC]['isChecked'];
          let tempLic = this.ArrLisChecked.push(lIc);
          contLC++
        } 
      } */
    });
  }

  UpdateClient() {
    this.disableInputbox = !this.disableInputbox;
  }
}
