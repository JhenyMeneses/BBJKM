import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IListContact } from 'src/app/Interface/listContactDetails';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  fgConsultContact : FormGroup;
  dataListContact! : IListContact;

  constructor(private ServiceCustomer : CustomerService, private fbConsultContact : FormBuilder) { 
    this.fgConsultContact = this.fbConsultContact.group({
      contact : new FormControl({value: '',disabled: true}),
      contactType : new FormControl({value: '',disabled: true}),
      country : new FormControl({value: '',disabled: true}),
      isPreferential : new FormControl({value: '',disabled: true}),
      isChecked : new FormControl({value: '',disabled: true}),
    })
  }

  ngOnInit(): void {
    this.getListContact();
  }

  getListContact(){
    this.ServiceCustomer.getContact().subscribe(dataListContact => {
      console.log(dataListContact);

/*       this.fgConsultContact.setValue({
        contact : dataListContact[0]['contact'],
        contactType : dataListContact[0]['contactType']['name'],
        country : dataListContact[0]['country']['name'],
        isPreferential : dataListContact[0]['isPreferential'],
        isChecked : dataListContact[0]['isChecked'],

      }) */
    })
  }

}
