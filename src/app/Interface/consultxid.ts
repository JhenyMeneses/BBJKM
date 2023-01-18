export interface IConsultxId{
    data : IconsultxId;
}


export interface Icommon{
    id: string;
    name: string;
}

export interface IidentityDocuments {
    documentType: Icommon;
    documentNumber: string;
    city: string;
    checkDigit: string
}

export interface IlegalAddress{
    addressName: string;
    city: string;
    state: string;
    country: Icommon
}

export interface IcontactDetails{
    contactDetailId: string;
    contact: string;
    contactType: Icommon;
    isPreferential: boolean;
    isChecked: boolean;
}           


export interface Ibank{
    branch: Icommon;
}

export interface Ireferences{
    referenceId: string;
    referenceType: {name:string};
    name: string;
    relationship: string;
    country: {id:string};
    city: string;
}

export interface IpartnerIdentityDocuments{
    documentType: Icommon;
    documentNumber: string;
    checkDigit: string;
}

export interface IpartnerInformation {
    name: string;
    partnerIdentityDocuments: IpartnerIdentityDocuments[];
}

export interface IconsultxId{
    customerId: string;
    clientId: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    nationalities: Icommon[];
    identityDocuments: IidentityDocuments[];
    legalAddress: IlegalAddress;
    contactDetails: IcontactDetails[];
    membershipDate: string;
    gender:{id:string};
    bank: Ibank;
    //references: Ireferences[];
    manager: {managerId:string};
    customerType: {name:string};
    education: {level:string};
    profession: string;
    cardName: string;
    partnerInformation: IpartnerInformation;
    tecom: string;
    personsInCharge: number;
    assignedManager: {};

}
