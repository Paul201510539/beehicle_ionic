import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../src/environments/environment';  
import { LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-addservicelist',
  templateUrl: './addservicelist.page.html',
  styleUrls: ['./addservicelist.page.scss'],
})
export class AddservicelistPage implements OnInit {
  form: FormGroup;
  public services : [
      'Oil Filter',
      'Air',
      'Gas',
      'Battery',
      'Engine',
      'Water',
      'Oil',
      'Belts'
  ];
  public vehicle_id;
  constructor(public formBuilder: FormBuilder, private route: ActivatedRoute, private storage: Storage, public loadingController: LoadingController, public alertController: AlertController) { 
    this.initForm();
  }

  ngOnInit() {
    this.vehicle_id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  initForm() {
    
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      service_ids: new FormControl([], { validators: [Validators.required] }),
      date: new FormControl(new Date(), { validators: [Validators.required] }),
      provider_id: new FormControl([], { validators: [Validators.required] }),
      notes: new FormControl(null, { validators: [Validators.required] }),
      cost: new FormControl(null, { validators: [Validators.required] }),
      
    }); 
  }

  async submitForm(){
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()


    const token = await this.storage.get('access_token');
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      },
    };
    const URL = environment.API_HOST;;
    try{
      
      const form = this.form.value;
      form.vehicle_id = this.vehicle_id;
      console.log(form);
      const res = await axios.post(`${URL}/vehicles/${this.vehicle_id}/services/create`, form, config)
      await loading.dismiss();
    }
    catch(e){
      await loading.dismiss();


    }
  }
  

}
