import { Component, OnInit } from '@angular/core';
import { environment } from '../../../src/environments/environment';  
import { LoadingController, AlertController , NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-pms',
  templateUrl: './pms.page.html',
  styleUrls: ['./pms.page.scss'],
})
export class PmsPage implements OnInit {
  pms_form: Array<any>
  pms_form_old: Array<any>
  pms_kms: String;
  pms: any;
  fields: Array<any>;
  vehicle_id: any;
  mode : String;
  pms_data: any;
  constructor(
    private route: ActivatedRoute, 
    private storage: Storage, 
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private navCtrl: NavController,
    private router: Router,
  ) {

  }
  
  async ngOnInit() {
    const sData = await this.storage.get('data');
    this.vehicle_id = (this.route.snapshot.paramMap.get('vehicle_id'));

    this.pms_kms = this.route.snapshot.paramMap.get('odometer').toString();
    this.pms_form_old = [
      {
        id: 1,
        label:'1,000km PMS',
        odometer:'1000',
        fields: [
          {
            code: 'break_system',
            label: 'Break System',
            value: false
          },
          {
            code: 'engine',
            label: 'Engine',
            value: false
          },
          {
            code: 'oil',
            label: 'Oil',
            value: false
          },
          {
            code: 'filters',
            label: 'Filters',
            value: false
          },
          {
            code: 'washer_fluid',
            label: 'Washer Fluid',
            value: false
          },
          {
            code: 'engine_coolant',
            label: 'Engine Coolant',
            value: false
          },
          {
            code: 'cost',
            label: 'Cost',
            value: false
          },
          {
            code :'notes',
            label: 'Notes',
            value: false
          },
          {
            code: 'date',
            label: 'Date',
            value: new Date().toISOString(),
          }
        ]
      },
      {
        id: 2,
        label: '5,000km PMS',
        odometer: '5000',
        fields : [
          {
            code: 'change_oil',
            label: 'Change Oil',
            value: false
          },
          {
            code: 'change_oil_filter',
            label: 'Change Oil Filter',
            value: false
          },
          {
            code: 'change_oil_leaks',
            label: 'Change Oil Leaks',
            value: false
          },
          {
            code: 'date',
            label:'Date',
            value: new Date().toISOString()
          }
        ]
      },
      {
        id: 3,
        label: '10,000km PMS',
        odometer: '10000',
        fields : [
          {
            code: 'mandatory_oil_change',
            label: 'Mandatory Change Oil',
            value: false
          },
          {
            code: 'brake_pads',
            label: 'Brake Pads',
            value: false
          },
          {
            code: 'axle_joints',
            label: 'Axle Joints',
            value: false
          },
          {
            code: 'parking_break',
            label: 'Parking Break',
            value: false
          },
          {
            code: 'clutch',
            label: 'Clutch',
            value: false
          },
          {
            code: 'steering',
            label: 'Steering',
            value: false
          },
          {
            code: 'suspension_system',
            label: 'Suspension System',
            value: false
          },
          {
            code: 'date',
            label:'Date',
            value:new Date().toISOString()
          }
        ]
      }
    ];
    this.pms_form = [
      {
        id: 1,
        label:'1,000km PMS',
        odometer:'1000',
        fields: [
          {
            code: 'break_system',
            label: 'Break System',
            value: false
          },
          {
            code: 'engine',
            label: 'Engine',
            value: false
          },
          {
            code: 'oil',
            label: 'Oil',
            value: false
          },
          {
            code: 'filters',
            label: 'Filters',
            value: false
          },
          {
            code: 'washer_fluid',
            label: 'Washer Fluid',
            value: false
          },
          {
            code: 'engine_coolant',
            label: 'Engine Coolant',
            value: false
          },
          {
            code: 'cost',
            label: 'Cost',
            value: false
          },
          // {
          //   code :'notes',
          //   label: 'Notes',
          //   value: false
          // },
          {
            code: 'date',
            label: 'Date',
            value: new Date().toISOString(),
          }
        ]
      },
      {
        id: 2,
        label: '5,000km PMS',
        odometer: '5000',
        fields : [
          {
            code: 'change_oil',
            label: 'Change Oil',
            value: false
          },
          {
            code: 'change_oil_filter',
            label: 'Change Oil Filter',
            value: false
          },
          {
            code: 'change_oil_leaks',
            label: 'Change Oil Leaks',
            value: false
          },
          {
            code: 'date',
            label:'Date',
            value: new Date().toISOString()
          }
        ]
      },
      {
        id: 3,
        label: '10,000km PMS',
        odometer: '10000',
        fields : [
          {
            code: 'mandatory_oil_change',
            label: 'Mandatory Change Oil',
            value: false
          },
          {
            code: 'brake_pads',
            label: 'Brake Pads',
            value: false
          },
          {
            code: 'axle_joints',
            label: 'Axle Joints',
            value: false
          },
          {
            code: 'parking_break',
            label: 'Parking Break',
            value: false
          },
          {
            code: 'clutch',
            label: 'Clutch',
            value: false
          },
          {
            code: 'steering',
            label: 'Steering',
            value: false
          },
          {
            code: 'suspension_system',
            label: 'Suspension System',
            value: false
          },
          {
            code: 'date',
            label:'Date',
            value:new Date().toISOString()
          }
        ]
      }
    ];
    this.pms = this.pms_form.find(x => x.odometer == this.pms_kms);
    
    // return;
    this.fields = this.pms.fields;

    const pms_data = sData.vehicles.find(x=>x.id == this.vehicle_id).pms.find(x=>x.pms_kms == this.pms_kms);
    this.mode = pms_data === undefined ? 'create' : 'update';
    if(this.mode=='update'){
      this.pms_data = JSON.parse(pms_data.data);
      this.loadFields();
    }
    
    
  }

  loadFields(){
   Object.keys(this.pms_data).map((key)=>{
     if(key=='date' || key=='cost' || key=='pms' || key =='vehicle_id'){

     }else{
      const field = this.fields.find(x=>x.code == key)
      // console.log(key, '---', value);
      // const obj_value = field.value > 0 ? true : false;

      if(field !== undefined){
        this.fields.find(x=>x.code == key).value = this.pms_data[key];
      }
    }
   })

  //  console.log('fields are',this.fields);
  }

  show(field){
    if(this.fields){
      return this.fields.findIndex(x=>x.code == field) < 0 ? false : true;
    }
    return false;
  }

  submit(){
   if(this.mode == 'create'){
     this.create();
   }else{
     this.update();
   }
  }

  async create(){
    const sData = await this.storage.get('data');
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present();

    const token = await this.storage.get('access_token');
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      },
    };
    const URL = environment.API_HOST;
    // let fields = [];
    const form = {}
    this.fields.map(x=> {
      form[x.code] = x.value
    })    
    form['vehicle_id'] = this.vehicle_id;
    form['pms'] = this.pms_kms;
    // fields['vehicle_id'] = this.vehicle_id
    // fields['pms'] = this.pms_kms;

    try{
      const res = await axios.post(`${URL}/pms  `, form, config)
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Success',
        message: res.data.message,
        buttons: ['OK'] 
      })
      await this.storage.set('data', res.data.data)
      await alert.present();

      this.navCtrl.back();
    }catch(e){
      console.log(e)
      await loading.dismiss();


      const alert = await this.alertController.create({
        header: 'Alert',
        message: e.response.data.message,
        buttons: ['OK'] 
      })
      await alert.present();

    }
  }
  async update(){
    
    const sData = await this.storage.get('data');
    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present();

    const token = await this.storage.get('access_token');
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
      },
    };
    const URL = environment.API_HOST;
    // let fields = [];
    const form = {}
    this.fields.map(x=> {
      form[x.code] = x.value
    })    
    form['vehicle_id'] = this.vehicle_id;
    form['pms'] = this.pms_kms;
    // fields['vehicle_id'] = this.vehicle_id
    // fields['pms'] = this.pms_kms;

    try{
      const res = await axios.put(`${URL}/pms/${this.vehicle_id}/${this.pms_kms}`, form, config)
      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Success',
        message: res.data.message,
        buttons: ['OK'] 
      })
      await this.storage.set('data', res.data.data)
      await alert.present();

      this.navCtrl.back();
    }catch(e){
      console.log(e)
      await loading.dismiss();


      const alert = await this.alertController.create({
        header: 'Alert',
        message: e.response.data.message,
        buttons: ['OK'] 
      })
      await alert.present();

    }
  }



}
