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

  vehicle_image_ORCR: string;
  vehicle_image_car: string;

  id: any;
  pms_badge: any;
  

  public vehicle: {
    brand: '',
    plate_number:'',
    vehicle_type: '',
    date_purchased: '',
    chasis: '',
    coding: '',
    notes: '',
    vehicle_image_car: '',
    vehicle_image_orcr: ''

  };
  public vehicles;
  vehicle_id: any;
  

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
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.vehicle_id = parseInt(this.route.snapshot.paramMap.get('id'));
    const sData  = await this.storage.get("data")

    this.vehicle = sData.vehicles.find(x=>x.id==this.id)
    console.log(sData.vehicles.find(x=>x.id==this.id));
    this.pms_badge = sData.vehicles.find(x=>x.id==this.id).pms_records.filter(x=> x.alert == true && x.done == false).length

    console.log(this.vehicle);

    this.form = new FormGroup({
      brand: new FormControl(this.vehicle.brand, { validators: [Validators.required] }),
      plate_number: new FormControl(this.vehicle.plate_number, { validators: [Validators.required] }),
      vehicle_type: new FormControl(this.vehicle.vehicle_type, { validators: [Validators.required] }),
      date_purchased: new FormControl(new Date(this.vehicle.date_purchased).toISOString(), { validators: [Validators.required] }),
      chasis: new FormControl(this.vehicle.chasis, { validators: [Validators.required] }),
      coding: new FormControl(this.vehicle.coding, { validators: [Validators.required] }),
      notes: new FormControl(this.vehicle.notes, { validators: [Validators.required] }),
      vehicle_image_orcr: new FormControl(this.vehicle.vehicle_image_orcr),
      vehicle_image_car: new FormControl(this.vehicle.vehicle_image_car),
    })  
    this.vehicle_image_ORCR = this.vehicle.vehicle_image_orcr;
    this.vehicle_image_car = this.vehicle.vehicle_image_car;

    loading.dismiss();
  }
  async ngOnInit() {
    this.getVehicle()
    // this.form = new FormGroup({
    //   brand: new FormControl('', { validators: [Validators.required] }),
    //   plate_number: new FormControl('', { validators: [Validators.required] }),
    //   vehicle_type: new FormControl('', { validators: [Validators.required] }),
    //   date_purchased: new FormControl('', { validators: [Validators.required] }),
    //   chasis: new FormControl('', { validators: [Validators.required] }),
    //   coding: new FormControl('', { validators: [Validators.required] }),
    //   notes: new FormControl('', { validators: [Validators.required] }),
      
    // })

  }

  ionViewWillEnter(){
    this.getVehicle()
  }

  // ionViewDidEnter(){
  //   console.log('ionViewDidEnter')
  // }

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
        const data = res.data.data;
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Success',
          message: 'Changes saved',
          buttons: ['OK']
        })
        // var vehicles = await this.storage.get('data')
        // const index = vehicles.findIndex(x=>x.id == vehicle.id)
        // console.log(vehicles)
        // vehicles[index] = vehicle
        await this.storage.set('data', data )
        // console.log(vehicles)
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
