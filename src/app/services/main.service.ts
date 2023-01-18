

export abstract class MainService {
    urlBase! : string;
    urlTsec! : string;
    ConsultURL! : string;
    ConsultURL2! : string;
    CreateURL! : string;
    CreateURL2! : string;
    ConsultFatcaURL! : string;
    ConsultFatcaURL2! : string;
    CreateFatcaURL! : string;
    CreateFatcaURL2! : string;
    ListAddressURL! : string;
    ListAddressURL2! : string;
    ListContactURL! : string;
    ListContactURL2! : string;
    ListEconomicURL! : string;
    ListEconomicURL2! : string;
    UpdateURL! : string;
    ModAddressURL! : string;
    ModEconomicURL! : string;
    ModFatcaURL! : string;

    constructor(){
        this.urlBase = 'http://localhost:3000/';
        this.urlTsec = 'https://asodev.openmarket.bbva.com.co/cptv_sv/TechArchitecture/co/grantingTicket/V02';
        this.ConsultURL = this.urlBase + 'ConsultClient';
        this.ConsultURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customers/V00/customers/';
        this.CreateURL = this.urlBase + 'CreateClient';
        this.CreateURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customers/V00/customers';
        this.ConsultFatcaURL = this.urlBase + 'ConsultFatca';
        this.ConsultFatcaURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customersnet/V01/fatca/';
        this.CreateFatcaURL = this.urlBase + 'CreateFatca';
        this.CreateFatcaURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customersnet/V01/fatca';
        this.ListAddressURL = this.urlBase + 'ListAddress';
        this.ListAddressURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customers/V00/customers/'
        this.ListContactURL = this.urlBase + 'ListContact';
        this.ListContactURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customers/v0/customers/';
        this.ListEconomicURL = this.urlBase + 'ListEconomic';
        this.ListEconomicURL2 = 'https://asodev.openmarket.bbva.com.co/cptv_gt/customers/V00/customers/';
        this.UpdateURL = 'https://asodev.openmarket.bbva.com.co/cptv_sv/customers/V00/customers/';
        this.ModAddressURL = this.urlBase + 'ModAddress'; 
        this.ModEconomicURL = this.urlBase + 'ModEconomic';
        this.ModFatcaURL = this.urlBase + 'ModFatca';
    }
}