import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../../../src/environments/environment';  
import { Router } from '@angular/router';
import axios from 'axios';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.page.html',
  styleUrls: ['./addvehicle.page.scss'],
})
export class AddvehiclePage implements OnInit {
  form: FormGroup;
  public coding: string;
  vehicle_image_ORCR: string;
  vehicle_image_car: string;

  constructor(
    public formBuilder: FormBuilder, 
    private storage: Storage, 
    public loadingController: LoadingController, 
    public alertController: AlertController,
    public fileService: FileService, 
    private router: Router
    ) {
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
      vehicle_image_orcr: new FormControl(''),
      vehicle_image_car: new FormControl(''),
    });
  }
  autoCoding(){
    var plate_number = this.form.value['plate_number']
    var code = plate_number.substr(plate_number.length - 1); // => "1"
    
    var coding;
    if(code == 1 || code == 2){
      coding = "Monday"
    }
    if(code == 3 || code == 4){
      coding = "Tuesday"
    }
    if(code == 5 || code == 6){
      coding = "Wednesday"
    }
    if(code == 7 || code == 8){
      coding = "Thursday"
    }
    if(code == 9 || code == 0){
      coding = "Friday"
    }

    this.form.patchValue({
      coding : coding
    })
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
    this.form.patchValue({
      vehicle_image_orcr: this.vehicle_image_ORCR,
      vehicle_image_car: this.vehicle_image_car
    })
    
    try{
      const sData = await this.storage.get("data");
  
      console.log(this.form.value);
      const res = await axios.post(URL, this.form.value, config);
      // const vehicles = await this.storage.get("vehicles")
      
      // sData.vehicles.push(res.data.data.vehicle);
      await this.storage.set("data", res.data.data)
      // console.log('after', sData)
      await loading.dismiss();
      if (res.data.code==200){
        // await this.storage.set('access_token',res.data.data.access_token)
        this.router.navigate(["/home"])
        const alert = await this.alertController.create({
          cssClass: 'Success-alert',
          header: 'Success',
          message: 'Vehicle information created',
          buttons: ['OK']
        });
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

  async OraddPhotoToGallery() {
    const base64 = await this.fileService.addNewToGallery();
    this.vehicle_image_ORCR = `data:image/jpeg;base64, ${base64}`;
  }

  async CaraddPhotoToGallery() {
    const base64 = await this.fileService.addNewToGallery();
    this.vehicle_image_car = `data:image/jpeg;base64, ${base64}`;
  }

}