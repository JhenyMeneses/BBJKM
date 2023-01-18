export interface IConsultFatca {
    idFatca: string;
    indicators: Iindicators[];
    obligation: Iobligation[];
    oblifis: string;
    cantobl: string|number;
    descriptionFatca: string;
    descriptionCRS: string;
    dateFatca : IdateFatca[];
  }

  export interface Iindicators{
    indicatorId: string;
    name: string;
    value?: string;
    //el signo de pregunta indica que el campo puede venir o no
    // la tercera condicion | quiere decir que no sabes que viene, entonces colocas any 
  }

  export interface Iobligation{
    countryCode?: string;
    idObligation?: string;
  }

  export interface IdateFatca{
    dateId: string;
    dateName: string;
    dateValue: string;
  }