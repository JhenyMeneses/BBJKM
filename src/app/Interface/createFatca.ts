export interface ICreateFatca{
    idFatca: string;
    indicators: Iindicators[];
    obligation: Iobligation[];
    oblifis: string;
    cantobl: string | number;
    descriptionCRS: string;
    dateFatca : IdateFatca[];
    estadoFatca: string;
 }

  export interface Iindicators{
    indicatorId?: string;
    name?: string;
    value?: string; 
  }

  export interface Iobligation{
    countryCode: string;
    idObligation: string;
  }

  export interface IdateFatca{
    dateId: string;
    dateName: string;
    dateValue: string;
  }
