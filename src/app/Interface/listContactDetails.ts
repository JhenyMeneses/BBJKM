export interface IListContact {
    data: Idata[];
}

export interface Icommon {
    id: string;
    name: string;
}

export interface Idata {
    contactDetailId: string;
    contact: string;
    contactType: Icommon;
    country: Icommon;
    isPreferential: boolean;
    isChecked: boolean;

}