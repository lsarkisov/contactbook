import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private contacts: any;
  private selected: Object;
  private newContact: boolean;

  constructor(
    private data: DataService,
  ) { }
  
  ngOnInit() {
    this.data.getAllContacts()
      .subscribe(ctx => this.contacts = ctx);
  }
  
  onOpen(id) {
    this.selected = this.contacts
      .filter(contact => contact.id === id)[0];
  }

  onSave(contact) {
    if (this.newContact) {
      this.data.addContact(contact)
        .subscribe(ctx => this.contacts = ctx);
      this.newContact = false;
    } else {
      this.data.updateContact(contact)
        .subscribe(ctx => this.contacts = ctx);
    }
  }

  onAddEntry(contact) {
    this.newContact = true;
  }

  delete(contact) {
    this.data.deleteContact(contact)
      .subscribe(ctx => this.contacts = ctx);
  }

}
