import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { environment } from '../../../../src/environments/environment';  
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;
  errors : Array<Object>
  agreed: boolean;
  constructor(
    public loadingController: LoadingController, 
    public alertController: AlertController,
    public router: Router
  ) {
    this.initForm();
    this.errors = [];
  }

  ngOnInit() {}

  initForm() {
    this.agreed = false;
    this.form = new FormGroup({
      name: new FormControl('', { validators: [Validators.required] }),
      email: new FormControl('', { validators: [Validators.required] }),
      address: new FormControl('', { validators: [Validators.required] }),
      gender: new FormControl('', { validators: [Validators.required] }),
      birthday: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      password_confirmation: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      phone_number: new FormControl('', {
        validators: [Validators.required, Validators.minLength(11)],
      }),
      agreed : new FormControl(false)

    });
  }

  async onSubmit() {
    console.log(this.form.value['agreed']);
    if(!this.form.value['agreed']){
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'You must agree to our Terms & Conditions',
        buttons: ['OK'] 
      })
      await alert.present();
      return;
    }
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    // const URL = environment.API_HOST;;
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()
    try{
      const URL = `${environment.API_HOST}/user/register`;
      // const URL = 'http://beehicle.test/api/user/register';
      const res = await axios.post(URL, this.form.value, config);
      if (res.data.data.code==200){
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Success. Please check your email and verify your account',
          buttons: [ {
            text: 'Ok',
            cssClass: 'secondary',
            handler: () => {
              this.router.navigate(['/welcome'])
            }
          }]    
        })
        await alert.present();
      }

    }catch(err){
      await loading.dismiss();

      const message = err.response.data.message;
      this.errors = err.response.data.data;
      console.log(this.errors);
      const alert = await this.alertController.create({
        header: 'Alert',
        message: message,
        buttons: ['OK'] 
      })
      await alert.present();
    }
  }

  hasError(field){
    return this.errors.hasOwnProperty(field);
  }
  //For uploading ID Verification //

  // loadImageFromDevice(event) {

  //   const file = event.target.files[0];

  //   const reader = new FileReader();

  //   reader.readAsArrayBuffer(file);

  //   reader.onload = () => {

  //     let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

  //     let blobURL: string = URL.createObjectURL(blob);

  //   };

  //   reader.onerror = (error) => {

  //   };
  // };
}
