import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { environment } from '../../../src/environments/environment';  
import axios from 'axios';
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.page.html',
  styleUrls: ['./userupdate.page.scss'],
})
export class UserupdatePage implements OnInit {
  user: Object ;
  // name: String;
  // phone_number: String;
  // email: String;
  // birthday: Date;
  // address: String;
  constructor(
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.user = {
      name: '',
      phone_number: '',
      email: '',
      birthday : null,
      address: ''
    }
  }


  async ngOnInit() {
    await this.populate();

  }

  async populate() {
    const data  = await this.storage.get("data")
    this.user = {
      name : data.name,
      phone_number: data.phone_number,
      email: data.email,
      birthday: new Date(data.birthday).toISOString(),
      address: data.address
    }
    console.log(data.name,data.birthday);
  }

  async submit()
  {
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()

    const form = this.user

    try{
      const token = await this.storage.get('access_token');
      const data = await this.storage.get('data');
  
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*', 
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = `${environment.API_HOST}/profile/${data.id}`;
      const response = await axios.put(URL, form, config);

      await this.storage.set('data', response.data.data)

      loading.dismiss()

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Profile Updated',
        buttons: ['OK'] 
      })
      
      await alert.present();
    }catch(error){
      loading.dismiss()

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Please check fields',
        buttons: ['OK'] 
      })
      
      await alert.present();
    }
  }
}
