import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreateClients } from '../Interface/createClient';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  switchFatca! : boolean;
  newClient : FormGroup;
  summited = false;
  errorserver = false;
  stateValid! : string;
  dataCustomer! : ICreateClients;
  idCustomer! : string;

  constructor(private ServiceCustomer : CustomerService, private fb : FormBuilder) { 
    this.newClient = this.fb.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      surnames: ['', ],
      gender: ['', Validators.required],
      bank: ['', Validators.required],
      branch: ['', Validators.required],
      countryBir: ['', Validators.required],
      birthDate: ['', Validators.required],
      stateBir: ['', Validators.required],
      cityBir: ['', Validators.required],
      nationalities: ['', Validators.required],
      documentTypeDT: ['', Validators.required],
      countryDT: ['', Validators.required],
      cityDT: ['', Validators.required],
      stateDT: ['', Validators.required],
      expirationDate: ['', Validators.required],
      documentNumberDT: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      contact: ['', Validators.required],
      contact2: ['', Validators.required],
      contact3: ['', Validators.required],
      economicActivity: ['', Validators.required],
      occupationType: ['', Validators.required],
      employmentSituation: ['', Validators.required],
      incomesType: ['', Validators.required],
      currency: ['', Validators.required],
      amount: ['', Validators.required],
      nameWP: ['', Validators.required],
      documentTypeWP: ['', Validators.required],
      documentNumberWP: ['', Validators.required],
      workStartDateWP: ['', Validators.required],
      addressNameWP: ['', Validators.required],
      countryWP: ['', Validators.required],
      stateWP: ['', Validators.required],
      cityWP: ['', Validators.required],
      addressNameD: ['', Validators.required],
      cityD: ['', Validators.required],
      stateD: ['', Validators.required],
      countryD: ['', Validators.required],
      personsInCharge: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
    this.ServiceCustomer.$modalFatca.subscribe((valueFatca) => {this.switchFatca = valueFatca});
    this.getCustomersNew();
  }

  /**Funcion para precargue de informacion desde el JSONSERVER */
  createClient(){
    const dataClient : ICreateClients = {
      firstName: this.newClient.value.firstName, 
      lastName: this.newClient.value.lastName,
      surnames: this.newClient.value.surnames,
      gender: { id: this.newClient.value.gender },
      bank: {
        branch: { id: this.newClient.value.branch },
        id: this.newClient.value.bank,
      },
      birthData: {
        country: { id: this.newClient.value.countryBir },
        birthDate: this.newClient.value.birthDate,
        state: { id: this.newClient.value.stateBir },
        city: this.newClient.value.cityBir,
      },
      nationalities: [{ id: this.newClient.value.nationalities }],
      identityDocuments: [
        {
          documentType: { id: this.newClient.value.documentTypeDT },
          country: { id: this.newClient.value.countryDT },
          city: this.newClient.value.cityDT,
          state: { id: this.newClient.value.stateDT },
          expirationDate: this.newClient.value.expirationDate,
          documentNumber: this.newClient.value.documentNumberDT,
        },
      ],
      maritalStatus: { id: this.newClient.value.maritalStatus },
      contactDetails: [
        {
          contact: this.newClient.value.contact,
          contactType: { id: "MOBILE_NUMBER" },
        },
        {
          contact: this.newClient.value.contact2,
          contactType: { id: "EMAIL" },
        },
        {
          contact: this.newClient.value.contact3,
          contactType: { id: "OFFICE_NUMBER" },
        },
      ],
      economicData: {
        economicActivity: { id: this.newClient.value.economicActivity },
        occupationType: { id: this.newClient.value.occupationType },
        employmentSituation: this.newClient.value.employmentSituation,
        incomes: [
          {
            incomesType: { id: this.newClient.value.incomesType },
            incomesValue: {
              currency: this.newClient.value.currency,
              amount: this.newClient.value.amount,
            },
          },
        ],
        workPlace: {
          name: this.newClient.value.nameWP,
          taxpayerIdentification: {
            documentType: { id: this.newClient.value.documentTypeWP },
            documentNumber: this.newClient.value.documentNumberWP,
          },
          workStartDate: this.newClient.value.workStartDateWP,
          address: {
            location: {
              addressName: this.newClient.value.addressNameWP,
              country: { id: this.newClient.value.countryWP },
              state: { id: this.newClient.value.stateWP },
              city: this.newClient.value.cityWP,
            },
          },
        },
      },
      addresses: [
        {
          location: {
            addressName: this.newClient.value.addressNameD,
            city: this.newClient.value.cityD,
            state: { id: this.newClient.value.stateD },
            country: { id: this.newClient.value.countryD },
          },
        },
      ],
      personsInCharge: this.newClient.value.personsInCharge,
    };
    this.summited = true;

    if(this.newClient.valid){
      this.stateValid = "Formulario Completo";
    }else{
      this.stateValid = "Formulario Incompleto";
      return;
    }
    
    this.ServiceCustomer.createCustomer(dataClient).subscribe((data) => {
      this.idCustomer = data['data']['customerId']
      console.log(this.idCustomer);
    
    }, error => {
      this.errorserver = true;
      console.log("¡¡Cliente NO CREADO!!");
    });

  }

  getCustomersNew(){
    console.log('ask someone if getCustomers work');

    this.ServiceCustomer.getNewClient().subscribe(dataCustomer  => {
      let apellido;
      if(dataCustomer['surnames']){
        apellido = dataCustomer['surnames'];
      }else{
        apellido = '';
      }

      this.newClient.setValue({
        firstName : dataCustomer['firstName'],
        lastName : dataCustomer['lastName'],
        surnames:  apellido,
        gender: dataCustomer['gender']['id'],
        bank: dataCustomer['bank']['id'],
        branch: dataCustomer['bank']['branch']['id'],
        countryBir: dataCustomer['birthData']['country']['id'],
        birthDate: dataCustomer['birthData']['birthDate'],
        stateBir: dataCustomer['birthData']['state']['id'],
        cityBir: dataCustomer['birthData']['city'],
        nationalities: dataCustomer['nationalities'][0]['id'],
        documentTypeDT: dataCustomer['identityDocuments'][0]['documentType']['id'],
        countryDT: dataCustomer['identityDocuments'][0]['country']['id'],
        cityDT: dataCustomer['identityDocuments'][0]['city'],
        stateDT: dataCustomer['identityDocuments'][0]['state']['id'],
        expirationDate: dataCustomer['identityDocuments'][0]['expirationDate'],
        documentNumberDT: dataCustomer['identityDocuments'][0]['documentNumber'],
        maritalStatus: dataCustomer['maritalStatus']['id'],
        contact: dataCustomer['contactDetails'][0]['contact'],
        contact2: dataCustomer['contactDetails'][1]['contact'],
        contact3: dataCustomer['contactDetails'][2]['contact'],
        economicActivity: dataCustomer['economicData']['economicActivity']['id'],
        occupationType: dataCustomer['economicData']['occupationType']['id'],
        employmentSituation: dataCustomer['economicData']['employmentSituation'],
        incomesType: dataCustomer['economicData']['incomes'][0]['incomesType']['id'],
        currency: dataCustomer['economicData']['incomes'][0]['incomesValue']['currency'],
        amount: dataCustomer['economicData']['incomes'][0]['incomesValue']['amount'],
        nameWP: dataCustomer['economicData']['workPlace']['name'],
        documentTypeWP: dataCustomer['economicData']['workPlace']['taxpayerIdentification']['documentType']['id'],
        documentNumberWP: dataCustomer['economicData']['workPlace']['taxpayerIdentification']['documentNumber'],
        workStartDateWP: dataCustomer['economicData']['workPlace']['workStartDate'],
        addressNameWP: dataCustomer['economicData']['workPlace']['address']['location']['addressName'],
        countryWP: dataCustomer['economicData']['workPlace']['address']['location']['country']['id'],
        stateWP: dataCustomer['economicData']['workPlace']['address']['location']['state']['id'],
        cityWP: dataCustomer['economicData']['workPlace']['address']['location']['city'],
        addressNameD: dataCustomer['addresses'][0]['location']['addressName'],
        cityD: dataCustomer['addresses'][0]['location']['city'],
        stateD: dataCustomer['addresses'][0]['location']['state']['id'],
        countryD: dataCustomer['addresses'][0]['location']['country']['id'],
        personsInCharge: dataCustomer['personsInCharge']
      })
    });   
  }

  /*Funciones de control de los modal */
  closeCreate(){
    this.ServiceCustomer.$modalCreate.emit(false);
  }

  openFatca(){
    this.switchFatca = true;
  }

}
