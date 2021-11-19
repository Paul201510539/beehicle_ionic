import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup

  constructor() { 
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      username: new FormControl('', {validators: [Validators.required]}),
      age: new FormControl('', {validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required]}),
      gender: new FormControl('', {validators: [Validators.required]}),
      uploadid: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(8)]}),
      phoneno: new FormControl('', {validators: [Validators.required, Validators.minLength(11)]}),
    });
  }

  onSubmit() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
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