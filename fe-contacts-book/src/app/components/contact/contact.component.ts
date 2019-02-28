import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { filter } from 'rxjs/operators';

class Entry {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
  ) {}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private contacts: any;
  private form: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
  private selected: Object;
  private isValid: boolean = true; //this.form.status === 'VALID';

  constructor(
    private modalService: NgbModal,
    private data: DataService,
  ) { }
  
  ngOnInit() {
    this.data.getAllContacts()
      .subscribe(ctx => this.contacts = ctx);
  }
  
  open(content, id) {
    console.log(content)
    this.selected = this.contacts
      .filter(contact => contact.id === id)[0];
    this.form.patchValue(this.selected);
    this.modalService.open(content);
  }
  
  close() {
    if (this.form.get('firstName').status) {
      console.log('First name: ', this.form.get('firstName'))
    }
    setTimeout(() => this.form.reset(), 10);
    this.modalService.dismissAll();
  }

  save() {
    if (this.isValid) {
      console.log('VALID!!!!!', this.form.status)
    }
    console.log(this.form.get('firstName').value)
    this.modalService.dismissAll();
  }

  addEntry(content) {
    this.form.reset();
    this.modalService.open(content);
  }

  delete(id) {
    console.log(id)
  }

}
