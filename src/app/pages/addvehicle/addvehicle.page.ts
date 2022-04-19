import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../../../src/environments/environment';  
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})
export class AddvehiclePage implements OnInit {
  form: FormGroup;
  public coding: string;
  constructor(public formBuilder: FormBuilder, private storage: Storage, public loadingController: LoadingController, public alertController: AlertController,private router: Router) {
    this.initForm();
  }

  ngOnInit() {
    console.log('test');
  }

  initForm() {
    this.form = new FormGroup({
      brand: new FormControl('', { validators: [Validators.required] }),
      plate_number: new FormControl('', { validators: [Validators.required] }),
      vehicle_type: new FormControl('', { validators: [Validators.required] }),
      date_purchased: new FormControl('', { validators: [Validators.required] }),
      chasis: new FormControl('', { validators: [Validators.required] }),
      coding: new FormControl('', { validators: [Validators.required] }),
      notes: new FormControl('', { validators: [Validators.required] }),

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
    const URL = environment.API_HOST + '/vehicles/create';
    console.log(environment, environment.API_HOST)
    try{
      const res = await axios.post(URL, this.form.value, config);
      const vehicles = await this.storage.get("vehicles")
      vehicles.push(res.data.data.vehicle);
      await this.storage.set("vehicles", vehicles)
      await loading.dismiss();
      if (res.data.code==200){
        // await this.storage.set('access_token',res.data.data.access_token)
        this.router.navigate(["/home"])
      }
  }catch(err){
    await loading.dismiss();
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Invalid Fields',
      buttons: ['OK']
    })
    await alert.present();

  }
  }

  getCoding(){
    return 'Monday';
  }

}
