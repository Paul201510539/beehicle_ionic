import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { environment } from '../../../src/environments/environment';  
import axios from 'axios';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-vinfo',
  templateUrl: './vinfo.page.html',
  styleUrls: ['./vinfo.page.scss'],
})
export class VinfoPage implements OnInit {
  form: FormGroup;
  public id;
  vehicle_image_ORCR: string;
  vehicle_image_car: string;
  public vehicle: {
    brand: '',
    plate_number:'',
    vehicle_type: '',
    date_purchased: '',
    chasis: '',
    coding: '',
    notes: ''

  };
  public vehicles;
  
  constructor(
    private router: Router, 
    private storage: Storage, 
    public formBuilder: FormBuilder, 
    private route : ActivatedRoute, 
    public loadingController: LoadingController, 
    public alertController: AlertController,
    public fileService: FileService
    ) {

    this.getVehicle();
  }

  async getVehicle(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    
    const sData  = await this.storage.get("data")

    this.vehicle = sData.vehicles.find(x=>x.id==this.id)
    console.log(this.vehicle);

    this.form = new FormGroup({
      brand: new FormControl(this.vehicle.brand, { validators: [Validators.required] }),
      plate_number: new FormControl(this.vehicle.plate_number, { validators: [Validators.required] }),
      vehicle_type: new FormControl(this.vehicle.vehicle_type, { validators: [Validators.required] }),
      date_purchased: new FormControl(this.vehicle.date_purchased, { validators: [Validators.required] }),
      chasis: new FormControl(this.vehicle.chasis, { validators: [Validators.required] }),
      coding: new FormControl(this.vehicle.coding, { validators: [Validators.required] }),
      notes: new FormControl(this.vehicle.notes, { validators: [Validators.required] }),
    })  

    console.log(this.form.value)
  }
  async ngOnInit() {
    this.form = new FormGroup({
      brand: new FormControl('', { validators: [Validators.required] }),
      plate_number: new FormControl('', { validators: [Validators.required] }),
      vehicle_type: new FormControl('', { validators: [Validators.required] }),
      date_purchased: new FormControl('', { validators: [Validators.required] }),
      chasis: new FormControl('', { validators: [Validators.required] }),
      coding: new FormControl('', { validators: [Validators.required] }),
      notes: new FormControl('', { validators: [Validators.required] }),
    })
  }

  async submitForm(){
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()

    const token = await this.storage.get('access_token')
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Authorization': `Bearer ${token}`
      }
    };
    const URL = environment.API_HOST;
    try{
        const res = await axios.put(`${URL}/vehicles/${this.id}/update`,this.form.value, config)
        const vehicle = res.data.data.vehicle;
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Alert',
          message: 'Success',
          buttons: ['OK']
        })
        var vehicles = await this.storage.get('vehicles')
        const index = vehicles.findIndex(x=>x.id == vehicle.id)
        console.log(vehicles)
        vehicles[index] = vehicle
        await this.storage.set('vehicles', vehicles )
        console.log(vehicles)
        await alert.present();
        this.router.navigate(["/home"])
      
  }catch(err){
    await loading.dismiss();
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Invalid Credentials',
      buttons: ['OK']
    })
    await alert.present();

  }
  }
  save(){
    console.log('clicked')
  }

  async OraddPhotoToGallery() {
    const base64 = await this.fileService.addNewToGallery();
    this.vehicle_image_ORCR = `data:image/jpeg;base64, ${base64}`;
  }

  async CaraddPhotoToGallery() {
    const base64 = await this.fileService.addNewToGallery();
    this.vehicle_image_car = `data:image/jpeg;base64, ${base64}`;
  }

  initForm() {
    
    
  }

}
