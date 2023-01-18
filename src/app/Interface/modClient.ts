export interface IModClient {
    firstName: string;
    lastName: string;
    surnames: string;
    suffix: string;
    birthDate: string;
    birthData: IbirthData;
    nationalities: Icommon[];
    hasPassedAway: string;
    identityDocuments: IidentityDocuments[];
    legalAddress: string;
    contactDetails: string;
    membershipDate: Icommon;
    personalTitle: Icommon;
    maritalStatus: Icommon;
    gender: Icommon;
    bank: string;
    residence: Iresidence;
    addresses: string;
    lastAccessDate: string;
    indicators: string;
    terms: string;
    references: Ireferences[];
    interviews: string;
    manager: { managerId: string };
    customerType: Icommon;
    education: { level: string; };
    profession: string;
    cardName: string;
    partnerInformation : IpartnerInformation;
    tecom : string;
    personsInCharge : number;
    register : number;
    assignedManager : { managerId : string };
    antiquity : number;
    economicData : string;
}

export interface Icommon {
    id: string;
    name: string;
}

export interface IbirthData {
    city: string;
    birthData: string;
    country: Icommon;
    birthDate: string;
    state: Icommon;
}

export interface IidentityDocuments {
    documentType: Icommon;
    documentNumber: string;
    country: Icommon;
    state: Icommon;
    status: Icommon;
    issueDate: string;
    expirationDate: string;
    expeditionDate: string;
    city: string;
    checkDigit: string;
}

export interface Iresidence {
    id: string;
    name: string;
    country: Icommon;
    residenceType: Icommon;
    startDate: string;
}

export interface Ireferences {
    referenceId: string;
    referenceType: Icommon;
    name: string;
    relationship: string;
    contactDetails: IcontactDetails[];
    country: Icommon;
    state: string;
    city: string;
}

export interface IcontactDetails {
    contactDetailId: string;
    contact: string;
    contactType: Icommon;
    country: string;
    regionalCode: string;
    extension: string;
    phoneCompany: string;
    isPreferential: string;
    isChecked: string
}

export interface IpartnerInformation {
    name: string;
    partnerIdentityDocuments: IpartnerIdentityDocuments[];
}

export interface IpartnerIdentityDocuments {
    documentType: Icommon;
    documentNumber: string;
    country: string;
    state: string;
    status: string;
    issueDate: string;
    expirationDate: string;
    expeditionDate: string;
    city: string;
    checkDigit: string;
}
