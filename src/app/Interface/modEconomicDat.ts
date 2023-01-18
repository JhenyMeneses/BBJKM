export interface IModEconomicDat {
    economicActivity: Idcommon;
    incomes: Iincomes[];
    reservedInformation: IreservedInformation[];
    workPlace: IworkPlace;
    employmentSituation: string;
  }
  
  export interface Idcommon {
    id: string;
  }
  
  export interface Iincomes {
    incomesType: { id : string };
    incomesValue: { currency : string; amount : string;concept : string };
  }

  export interface IreservedInformation{
    reservedType: Idcommon;
    reservedValue: { currency : string; amount : string;concept : string };
  }
  
  export interface IworkPlace {
    workStartDate: string;
    profesionPosition: Idcommon;
  }