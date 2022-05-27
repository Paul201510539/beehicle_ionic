import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../../../src/environments/environment';  



@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})

export class SigninPage implements OnInit {

  form: FormGroup
  state: String;
  constructor(private router: Router, private storage: Storage, public loadingController: LoadingController, public alertController: AlertController) { 
    this.initForm();
    this.state = 'sign_in';
  }

  ngOnInit() {
    // console.log('init')

  }

  initForm() {
    
    this.form = new FormGroup({
      email: new FormControl('', { validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
    });
  }

    save(){
      console.log('clicked')
    }
  async onSubmit() {
    if(this.state == 'sign_in'){
      this.signIn()
    }else{
      this.resetPassword();
    }

  }

  async signIn(){
      const loading = await this.loadingController.create({message: 'Please wait'})
      await loading.present()

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*', 
        }
      };
      
      const URL = environment.API_HOST;;
      try{
        let res = await axios.post(`${URL}/user/login`, this.form.value, config);
        if (res.data.data.code==200){
          const token = res.data.data.access_token;
          await this.storage.set('access_token', token)
          const get_config = {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
              }
          }
          res = await axios.get(`${URL}/setup`, get_config)
          console.log(res)
          await this.storage.set('data', res.data.data)
          // await this.storage.set('vehicles', res.data.data.vehicles)
          await loading.dismiss();

          this.router.navigate(["/home"])
        }
    }catch(err){
      await loading.dismiss();
      const message = err.response.data.message;
      const alert = await this.alertController.create({
        header: 'Alert',
        message: message,
        buttons: ['OK'] 
      })
      await alert.present();

    }

      if(!this.form.valid) {
        this.form.markAllAsTouched();
        return;
      }
    }

  async resetPassword(){
    if(this.form.value.email == ''){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Please provide email',
        buttons: ['OK'] 
      })
      await alert.present();
      return;
    }

    try{
      const loading = await this.loadingController.create({message: 'Please wait'})
      await loading.present()

      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*', 
        }
      };
      
      const URL = environment.API_HOST;;
      console.log(environment, environment.API_HOST)

      const res = await axios.post(`${URL}/user/reset-password`, this.form.value, config)

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Please check your email and follow instructions',
        buttons: ['OK'] 
      })
      await alert.present();


      
    }catch(e){
      console.log(e)
    }
  }


  toggleState(){
    this.state = this.state == 'sign_in' ?'forgot_password' : 'sign_in';
  } 
}