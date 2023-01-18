import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IConsultById } from '../Interface/consultById';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ID_Client! : string;
  ID_DocNum! : string;
  FgPrimary : FormGroup;
  ObjClient : object = [];
  dataClientByID! : any;
  
  filesRes!: IConsultById;
  errorserver = false;

  btn_consult = false;
  btn_create = false;

  switchCreate! : boolean;
  switchConsult! : boolean;
  switchModify! : boolean;

  constructor(private ServiceCustomer : CustomerService, private FbPrimary : FormBuilder) { 
    this.FgPrimary = this.FbPrimary.group({
      documentType : ['', Validators.required],
      documentNumber : ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.ServiceCustomer.$modalCreate.subscribe((valueCreate) => {this.switchCreate = valueCreate});
    this.ServiceCustomer.$modalConsult.subscribe((valueConsult) => {this.switchConsult = valueConsult});
    this.ServiceCustomer.$modalModify.subscribe((valueModify) => {this.switchModify = valueModify});
  }

  getCustomersById(varId: string){
    console.log('ask someone if getCustomersById work');
    console.log(varId);
    let varTypeDoc, varNumDoc;
    this.ServiceCustomer.getClientById(varId).subscribe((data) => {
      this.dataClientByID = data
      if(this.dataClientByID != ''){
        this.btn_consult = true;
      }

      this.filesRes = this.dataClientByID;
      varTypeDoc = this.dataClientByID['data']['identityDocuments'][0]['documentType']['id'];
      varNumDoc = this.dataClientByID['data']['identityDocuments'][0]['documentNumber'];
      
      if(varTypeDoc == 'CC'){
        this.ID_DocNum = '1'+ varNumDoc;
      }else{
        this.ID_DocNum = '0'+ varNumDoc;
      }


    },error => {
      alert(error.status +' '+ error.error['error-message'])
      
      if(error.status == '409'){
        this.btn_create = true;
      }
      
    });
    this.ObjClient = this.filesRes;
    this.ID_Client = varId;

    //return this.ObjClient;
  }

  openCreate(){  
    this.switchCreate = true;
    this.btn_create = false;
  }

  openConsult(){
    this.switchConsult = true;
    this.btn_consult = false;
  }

  openModify(){
    this.switchModify = true;
    this.btn_consult = false;
  }

}
