export interface IListAddress{
    data : Idata[];
}

export interface Icommon{
    id : string;
    name : string;
}

export interface IgeoLocation{
    latitude : number;
    longitude : number;
 }

export interface Ilocation{
    addressName : string;
    city : string;
    state : Icommon;
    country : Icommon;
    zipCode : string;
    geoLocation : IgeoLocation;
    additionalInformation? : string;
    stratum : string;
 }

export interface Idata{
    addressId : string;
    addressType : Icommon;
    ownershipType : Icommon;   
    location : Ilocation;
    antiquity : string;
}