import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IConsultById } from '../Interface/consultById';
import { IConsultFatca } from '../Interface/consultFatca';
import { ICreateClients } from '../Interface/createClient';
import { ICreateFatca } from '../Interface/createFatca';
import { IListEconomic } from '../Interface/listEconomicDat';
import { MainService } from './main.service';
import { IListAddress } from '../Interface/listAddress';
import { IListContact } from '../Interface/listContactDetails';
import { IResponse } from '../Interface/response';
import { IAuthentication } from '../Interface/authentication';
import { IModClient } from '../Interface/modClient';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends MainService{
  /**************VARIABLES ENCARGADOS DE TRANSMITIR INFORMACION DEL MODAL DE CADA COMPONENTE***************** */
  $modalCreate = new EventEmitter<any>;
  $modalConsult = new EventEmitter<any>;
  $modalModify = new EventEmitter<any>;
  $modalFatca = new EventEmitter<any>;

  Tsec02 : string = '';
  Tsec037 : string = '';
  Tsec025 : string = '';

  /*********** BODY DE LOS SERVICIOS DE GENERACION DE TSEC************************ */

  public bodyG02 : IAuthentication = {
    "authentication": {
      "userID": "CC000000052823869",
      "consumerID": "12000002",
      "authenticationType": "00",
      "authenticationData": [
          {
              "idAuthenticationData": "iv_ticketService",
              "authenticationData": [
                  "j7A6d9YWrElsEpXeQY3ffKsOfuYdUvsgdTxCXsTxlkCTrzOuXWh8VWYGrovCNU/o"
              ]
          }
      ]
  },
  "backendUserRequest": {
      "userId": "",
      "accessCode": "CC000000052823869",
      "dialogId": ""
  }
  };

  public bodyG037 : IAuthentication = {
    authentication: {
        userID: "12000037",
        consumerID: "12000037",
        authenticationType: "61",
        authenticationData: [
            {
                idAuthenticationData: "",
                authenticationData: [""]
            }
        ]
    },
    backendUserRequest: {
        userId: "",
        accessCode: "",
        dialogId: ""
    }
  };

  public bodyG025 : IAuthentication = {
    "authentication": {
        "userID": "C604380",
        "consumerID": "12000025",
        "authenticationType": "00",
        "authenticationData": [
            {
                "idAuthenticationData": "iv_ticketService",
                "authenticationData": [
                    "SS53lCalEgo6FQ8cPkQLJig4VUklkzLoAqBGOJ3o0LB1Wmnp0Lw6hA=="
                ]
            }
        ]
    },
    "backendUserRequest": {
        "userId": "",
        "accessCode": "C604380",
        "dialogId": ""
    }
}
/********************************************************************************* */
  constructor(private http: HttpClient) { 
    super();
    /**********EJECUCION DE LOS SERVICIOS DE GENERACION TSEC *********************** */
    this.getTsec02(this.bodyG02).subscribe((response : any) => {
      this.Tsec02 = response.headers.get('tsec');
      console.log('Tsec02');
    },error => {
      console.log(error.status +' '+ error.error['error-message']);
    });

    this.getTsec037(this.bodyG037).subscribe((response : any) => {
      this.Tsec037 = response.headers.get('tsec');
      console.log('Tsec037');
    },error => {
      console.log(error.status +' '+ error.error['error-message']);
    });

    this.getTsec025(this.bodyG025).subscribe((response : any) => {
      this.Tsec025 = response.headers.get('tsec');
      console.log('Tsec025');
    },error => {
      console.log(error.status +' '+ error.error['error-message']);
    });
  }


  /******************GENERACION DE TSEC PARA CONSUMO DE SERVICIOS******************* */
  getTsec02(bodyG02 : IAuthentication): Observable<any>{
    return this.http.post(this.urlTsec,this.bodyG02, {observe : 'response'});
  }

  getTsec037(bodyG037 : IAuthentication): Observable<any>{
    return this.http.post(this.urlTsec,bodyG037, {observe : 'response'});
  }

  getTsec025(bodyG025 : IAuthentication): Observable<any>{
    return this.http.post(this.urlTsec,bodyG025, {observe : 'response'});
  }

  /******************CONSUMO COMPONENTE CONSULTA************************************ */

  getCustomerById(id: string): Observable<IConsultById> {
    console.log('ask someone if getCustomersById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec02);
    //let params = new HttpParams().set("", id);
    return this.http.get<IConsultById>(this.ConsultURL2+id, { headers}) 
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  /********CONSUMO PARA VERIFICAR EXISTENCIA DEL CLIENTE EN EL DASHBOAR***********/
  //Este servicio debe cambiarse o ajustarse para que permita 
  //consulta por tipo y numero de documento de identificacion
  //Actualmente solo permite consulta por Id Cliente Altamira

  getClientById(id: string): Observable<any> {
    console.log('ask someone if getClientById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec02);
    return this.http.get<any>(this.ConsultURL2+id, { headers});
  }

  /********************************************* */
  getCustomer(): Observable<IConsultById>{
    return this.http.get<IConsultById>(this.ConsultURL);
  }


  /*****************CONSUMO COMPONENTE DE CREACION DE CLIENTE******************* */
  createCustomer(clients : ICreateClients):Observable<IResponse>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec037);
    let res = this.http.post<IResponse>(this.CreateURL2,clients,{headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
    return res ;
  }

  /******************************************************* */
  getNewClient():Observable<ICreateClients>{
    return this.http.get<ICreateClients>(this.CreateURL);
  }
  /*******************MODIFICAR*************************** */

  updateCustomer(id : string, clients : ICreateClients) : Observable <any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec037);
    return this.http.patch<any>(this.UpdateURL+id, clients, {headers})
  }

  /******************CONSUMOS CREACION Y CONSULTA FATCA**************************** */
  getFatcaById(id: string): Observable<IConsultFatca> {
    console.log('ask someone if getFatcaById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec02);
    return this.http.get<IConsultFatca>(this.ConsultFatcaURL2+id, { headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  createFatca(fatcas : ICreateFatca): Observable<any>{
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec037);
    return this.http.post<any>(this.CreateFatcaURL2, fatcas,{headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  /************************************************************ */
  getFatca(): Observable<IConsultFatca>{
    return this.http.get<IConsultFatca>(this.ConsultFatcaURL);
  }

  getNewFatca(): Observable<ICreateFatca>{
    return this.http.get<ICreateFatca>(this.CreateFatcaURL);
  }

  /*********************DATOS ECONOMICOS********************** */
  getEconomicById(id:string) : Observable<IListEconomic>{
    console.log('ask someone if getEconomicById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec02);
    return this.http.get<IListEconomic>(this.ListEconomicURL2+id+'/economic-data',{headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  getEconomic(): Observable<IListEconomic>{
    return this.http.get<IListEconomic>(this.ListEconomicURL);
  }

  /***********************DIRECCIONES************************** */

  getAddressById(id: string): Observable<IListAddress> {
    console.log('ask someone if getAddressById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec025);
    return this.http.get<IListAddress>(this.ListAddressURL2+id+'/addresses', { headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  getAddress(): Observable<IListAddress>{
    return this.http.get<IListAddress>(this.ListAddressURL);
  }

  /***********************CONTACTO****************************** */

  getContactById(id: string): Observable<IListContact> {
    console.log('ask someone if getContactById service');
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+this.Tsec02);
    return this.http.get<IListContact>(this.ListContactURL2+id+'/contact-details', { headers})
    .pipe(
      retry(1),
      catchError((error) => {return this.handleError(error)})
    );
  }

  getContact(): Observable<IListContact[]>{
    return this.http.get<IListContact[]>(this.ListContactURL);
  }

  /************************************************************ */

  private handleError(error: HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent){
        console.log('Error de Cliente');
        console.error('An error occurred:', error.error);
      }else{
        console.log('Error de Servidor');
        console.error(`HOST returned code ${error.status}, body was: `, error.error['error-message']);
        
      }
    } else {
      console.log('Otro Tipo de Error');
      
    }
    return throwError(() => new Error(error.error));
  }

}
