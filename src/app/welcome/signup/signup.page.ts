import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { environment } from '../../../../src/environments/environment';  

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
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
    });
  }

  async onSubmit() {
    console.log(this.form.value);
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    const URL = 'https://beehicle.xyz/api/user/register';
    // const URL = environment.API_HOST;;

    const res = await axios.post(URL, this.form.value, config);
    console.log(res);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    // const URL ='http://127.0.0.1:8000/api/user/register';
    // const res = await axios.post(URL,this.form.value, config)
    // console.log(res);
    // const res = await axios.get('https://api.sampleapis.com/futurama/info', config)
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
