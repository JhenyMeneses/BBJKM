export interface IListEconomic {
  data : IlistEconomic;
}

export interface Icommon {
  id: string;
  name: string;
}

export interface Iincomes {
  incomesType: { id: string };
  incomesValue: { currency: string; amount: string };
}
/* export interface IreservedInformation{
  reservedType : { id: string };
  reservedValue : IreservedValue;
}

export interface IreservedValue{
  currency : string;
  amount : string;
  concept : string;
} */

export interface IworkPlace {
  workStartDate: string;
  activity: string;
  profesionPosition: Icommon;
}


export interface IlistEconomic{
  economicDataId: string;
  economicActivity: Icommon;
  occupationType: Icommon;
  incomes: Iincomes[];
/*   reservedInformation? : IreservedInformation[]; */
  workPlace: IworkPlace;
  employmentSituation: string;
}
