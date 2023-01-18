export interface ICreateClients{
    firstName: string;
    lastName: string;
    surnames: string;
    gender:{id:string};
    bank: Ibank;
    birthData: IbirthData;
    nationalities: IidCommon[];
    identityDocuments: IidentityDocuments[];
    maritalStatus: IidCommon;
    contactDetails: IcontactDetails[];
    economicData: IeconomicData;
    addresses: Iaddresses[];
    personsInCharge: number;

}

export interface IidCommon{
    id : string;
}
export interface IidentityDocuments {
    documentType: {id : string};
    country: IidCommon;
    city: string;
    state: IidCommon;
    expirationDate: string;
    documentNumber: string;
}       

export interface Ibank{
    id:string;
    branch: IidCommon;
}

export interface IbirthData{
   country: IidCommon;
   state: IidCommon;
   birthDate: string;
   city: string;
}

export interface IcontactDetails{
    contact: string;
    contactType: IidCommon;
}  

export interface Iincomes{
    incomesType: IidCommon;
    incomesValue: {currency: string, amount: string}
}

export interface  Ilocation {
    addressName: string;
    country: IidCommon;
    state: IidCommon;
    city: string;
}

export interface Iaddress{
    location: Ilocation;
}

export interface IworkPlace {
    name: string;
    taxpayerIdentification: { documentType: IidCommon, documentNumber: string};
    workStartDate: string;
    address: Iaddress;
}

export interface IeconomicData{
    economicActivity: IidCommon;
    occupationType: IidCommon;
    employmentSituation: string;
    incomes: Iincomes[];
    workPlace: IworkPlace;
}

export interface  IlocationAddresses {
    addressName: string;
    city: string;
    state: IidCommon;
    country: IidCommon;
}

export interface Iaddresses{
    location: IlocationAddresses;
}  
