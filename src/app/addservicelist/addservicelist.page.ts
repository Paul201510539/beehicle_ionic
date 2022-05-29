import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../src/environments/environment';  
import { LoadingController, AlertController , NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-addservicelist',
  templateUrl: './addservicelist.page.html',
  styleUrls: ['./addservicelist.page.scss'],
})
export class AddservicelistPage implements OnInit {
  form: FormGroup;
  services : Array<any>;
  name: String;
  selected_services: Array<any>;
  date: String;
  providers: Array<any>;
  selected_provider: Object;
  cost: String;
  notes: String;

  vehicle_id: Number;
  service_id: Number;
  mode: String;
  constructor(
    public formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private storage: Storage, 
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private navCtrl: NavController,
    private router: Router,
    ) { 
    this.initForm();
    this.services =[
        {
          id : 1,
          label: 'Air'
        },
        {
          id : 2,
          label: 'Tire Replacement'
        },
        {
          id : 3,
          label: 'Scratch'
        },
        {
          id : 4,
          label: 'Seat Cover'
        },
        {
          id : 5,
          label: 'Light'
        }
    ];

    this.providers = [
      {
        id: 1,
        label: 'Motortrade'
      },
      {
        id: 2,
        label: 'Toyota'
      },
      {
        id: 3,
        label: 'Hyundai'
      },
      {
        id: 4,
        label: 'Honda'
      },
      {
        id: 5,
        label: 'Mitsubishi'
      }
    ]

  }

  async ngOnInit() {
    console.log(this.router.url);
    this.vehicle_id = parseInt(this.route.snapshot.paramMap.get('vehicle_id'));
    this.service_id = parseInt(this.route.snapshot.paramMap.get('service_id'));
    this.mode = this.route.snapshot.paramMap.get('mode') != null ? this.route.snapshot.paramMap.get('mode') : 'create';
  }

  async initForm() {
    
    // this.form = new FormGroup({
    //   name: new FormControl(null, { validators: [Validators.required] }),
    //   service_ids: new FormControl([], { validators: [Validators.required] }),
    //   date: new FormControl(new Date().toISOString(), { validators: [Validators.required] }),
    //   provider_id: new FormControl([], { validators: [Validators.required] }),
    //   notes: new FormControl(null, { validators: [Validators.required] }),
    //   cost: new FormControl(null, { validators: [Validators.required] }),
      
    // }); 
    if(this.mode == 'create'){
      this.name = null;
      this.selected_services = [];
      this.date = null;
      this.selected_provider = {};
      this.cost = null;
      this.notes =  null;
    }else{
      const sData = await this.storage.get('data');
      const service = sData.vehicles.find(x => x.id == this.vehicle_id).service_summary.find(x=>x.id == this.service_id);
      // const service = sData.vehicles.find(x => x.id == this.vehicle_id);
      this.name = service.name;
      // this.selected_services = this.services.filter(service_list=> {
      //   return service.services.map(service=> service.service_id).includes(service_list['id'])
      // })
      this.selected_services = service.services.map(service=> service.service_id.toString())
      this.selected_provider = service.provider_id.toString()
      this.date = new Date(service.date).toISOString();
      this.cost = service.cost;
      this.notes = service.notes;
    }
  }

  async submitForm(){
    // console.log('provider', this.selected_provider)
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
      const form = {
        name: this.name,
        service_ids : this.selected_services,
        date : this.date,
        provider_id : this.selected_provider,
        cost : this.cost,
        notes : this.notes,
        vehicle_id: this.vehicle_id
      }
      // form.vehicle_id = this.vehicle_id;
      const res = await axios.post(`${URL}/vehicles/${this.vehicle_id}/services/create`, form, config)
      await loading.dismiss();
      const sData = await this.storage.get('data');
      console.log('before', sData);
      sData.vehicles.find(x=>x.id == this.vehicle_id).service_summary.push(res.data.data.service)
      console.log(sData.vehicles.find(x=>x.id == this.vehicle_id))
      await this.storage.set('data',sData);
      console.log('after',sData);
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Service Added',
        buttons: ['OK'] 
      })
      await alert.present();
      this.navCtrl.back();      
    }
    catch(e){
      console.log(e);
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Error',
        buttons: ['OK'] 
      })
      await alert.present();
    }
  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
