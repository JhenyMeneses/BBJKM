export interface IModFatca {
    idFatca: string;
    indicators: Iindicators[];
    obligation: Iobligation[];
    oblifis: string;
    cantobl: string | number;
    descriptionFatca: string;
    descriptionCRS: string;
    dateFatca : IdateFatca[];
    estadoFatca: string;
    estadoCRS: string;
    origen: string;//No estan en el mapeo pero si en el Json
    centro: string;//
    termina: string;//
    usuario: string;//
  }

  export interface Iindicators{
    indicatorId: string;
    name: string;
    value: string | number;
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