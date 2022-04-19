import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addservicelist',
  templateUrl: './addservicelist.page.html',
  styleUrls: ['./addservicelist.page.scss'],
})
export class AddservicelistPage implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder) { 
    this.initForm();
  }

  ngOnInit() {
    console.log('test');
  }

  initForm() {
    this.form = new FormGroup({
      service_names: new FormControl(null, { validators: [Validators.required] }),
      service_type: new FormControl(['Water','Oil'], { validators: [Validators.required] }),
      date_service: new FormControl(new Date(), { validators: [Validators.required] }),
      service_providers: new FormControl([], { validators: [Validators.required] }),
      service_notes: new FormControl(null, { validators: [Validators.required] }),
      service_cost: new FormControl(null, { validators: [Validators.required] }),
      
    }); 
  }
  

}
