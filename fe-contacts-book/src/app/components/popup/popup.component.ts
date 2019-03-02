import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnChanges {

  @Input()
  contact;
  
  @Output()
  onSave = new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    id       : new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    phone    : new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnChanges(parent) {
    const { currentValue } = parent.contact;
    if (currentValue) {
      this.form.patchValue(currentValue);
    }
  }

  onClose() {
    this.form.reset();
  }

  save() {
    this.onSave.emit(this.form.value);
    this.onClose();
  }

}
