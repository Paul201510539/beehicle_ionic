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
  pms_kms: String;
  pms: any;
  fields: Array<any>;
  vehicle_id: any;
  
  constructor(
    private route: ActivatedRoute, 
    private storage: Storage, 
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private navCtrl: NavController,
    private router: Router,
  ) {

  }
  
  ngOnInit() {
    this.pms_kms = this.route.snapshot.paramMap.get('odometer').toString();
    this.pms_form = [
      {
        id: 1,
        label:'1,000km PMS',
        odometer:'1000',
        fields: [
          {
            code: 'break_system',
            label: 'Break System',
            value: ''
          },
          {
            code: 'engine',
            label: 'Engine',
            value: ''
          },
          {
            code: 'oil',
            label: 'Oil',
            value: ''
          },
          {
            code: 'filters',
            label: 'Filters',
            value: ''
          },
          {
            code: 'washer_fluid',
            label: 'Washer Fluid',
            value: ''
          },
          {
            code: 'engine_coolant',
            label: 'Engine Coolant',
            value: ''
          },
          {
            code: 'cost',
            label: 'Cost',
            value: ''
          },
          {
            code :'notes',
            label: 'Notes',
            value: ''
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
            value: ''
          },
          {
            code: 'change_oil_filter',
            label: 'Change Oil Filter',
            value: ''
          },
          {
            code: 'change_oil_leaks',
            label: 'Change Oil Leaks',
            value: ''
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
            value: ''
          },
          {
            code: 'brake_pads',
            label: 'Brake Pads',
            value: ''
          },
          {
            code: 'axle_joints',
            label: 'Axle Joints',
            value: ''
          },
          {
            code: 'parking_break',
            label: 'Parking Break',
            value: ''
          },
          {
            code: 'clutch',
            label: 'Clutch',
            value: ''
          },
          {
            code: 'steering',
            label: 'Steering',
            value: ''
          },
          {
            code: 'suspension_system',
            label: 'Suspension System',
            value: ''
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
    this.fields = this.pms.fields;
    this.vehicle_id = (this.route.snapshot.paramMap.get('vehicle_id'));
    console.log(this.storage.get('data'));
  }

  show(field){
    return this.fields.findIndex(x=>x.code == field) < 0 ? false : true;
  }

  async submit(){
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

    console.log(form)
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

}
