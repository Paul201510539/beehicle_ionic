import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.page.html',
  styleUrls: ['./userupdate.page.scss'],
})
export class UserupdatePage implements OnInit {
  form: FormGroup;
  public coding: string;

  constructor(public formBuilder: FormBuilder) {
    this.initForm();
   }

  ngOnInit() {
    console.log('test');
  }
  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      brand: new FormControl('', { validators: [Validators.required] }),
      phoneno: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required] }),
      age: new FormControl('', { validators: [Validators.required] }),
      address: new FormControl('', { validators: [Validators.required] }),
      

    });
  }

}
