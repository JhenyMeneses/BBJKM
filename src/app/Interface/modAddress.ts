export interface IModAddress {
  isPreferential: boolean;
  addressType: Icommon;
  ownershipType: Icommon;
  location: Ilocation;
}

interface Icommon {
  id: string;
}

export interface Igeolocation {
  latitude: number;
  longitude: number;
}

export interface Ilocation {
  addressName: string;
  city: string;
  state: Icommon;
  country: Icommon;
  zipCode: string;
  geolocation: Igeolocation;
  additionalInformation?: string;
  geographicGroups: IgeographicGroups[];
  meta: Imeta;
}

export interface IgeographicGroups {
  geographicGroupType: Icommon;
  code?: string;
  name?: string;
}

export interface Imeta {
  stratum: string;
}
