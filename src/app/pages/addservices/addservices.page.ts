import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.page.html',
  styleUrls: ['./addservices.page.scss'],
})
export class AddservicesPage implements OnInit {
  form: FormGroup;
  services : [
      'Tulog',
      'Oil Filter',
      'Air',
      'Gas',
      'Battery',
      'Engine',
      'Water',
      'Oil',
      'Belts'
  ];
  constructor(public formBuilder: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    console.log('test');
  }
  initForm() {
    this.form = new FormGroup({
      service_name: new FormControl(null, { validators: [Validators.required] }),
      service_type: new FormControl(['Water','Oil'], { validators: [Validators.required] }),
      date_service: new FormControl(new Date(), { validators: [Validators.required] }),
      service_providers: new FormControl([], { validators: [Validators.required] }),
      service_notes: new FormControl(null, { validators: [Validators.required] }),
      service_cost: new FormControl(null, { validators: [Validators.required] }),
      
    }); 
  }
  
  submitForm(){
    console.log('submitted')
    console.log(this.form.value)
  }

  
}
