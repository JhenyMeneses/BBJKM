import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsultClientComponent } from './consult-client/consult-client.component';
import { CreateFatcaComponent } from './create-fatca/create-fatca.component';
import { ConsultFatcaComponent } from './components-services/consult-fatca/consult-fatca.component';
import { ListEconomicComponent } from './components-services/list-economic/list-economic.component';
import { ListAddressComponent } from './components-services/list-address/list-address.component';
import { ListContactComponent } from './components-services/list-contact/list-contact.component';
import { ModClientComponent } from './mod-client/mod-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    DashboardComponent,
    ConsultClientComponent,
    CreateFatcaComponent,
    ConsultFatcaComponent,
    ListEconomicComponent,
    ListAddressComponent,
    ListContactComponent,
    ModClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
