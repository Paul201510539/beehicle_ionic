import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import axios from 'axios';
import { environment } from '../../../src/environments/environment';  
import { Storage } from '@ionic/storage-angular';


declare var google;


@Component({
  selector: 'app-trans',
  templateUrl: './trans.page.html',
  styleUrls: ['./trans.page.scss'],
})
export class TransPage implements OnInit {

  @ViewChild('map',  {static: false}) mapElement: ElementRef;
  map: any;
  address:string;
  lat: string;
  long: string;  
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: Object;
  placeid: any;
  GoogleAutocomplete: any;
  from : string;
  to: Object;
  mode: string;
  odometer: String;
  vehicle_id: String;
  name: String;

  // new data
  address_start: String;
  address_end: String;
  odometer_end: any;
  odometer_start: any;
  datetime: String;
  errors : Array<Object>


  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,    
    public zone: NgZone,
    public loadingController: LoadingController, 
    public alertController: AlertController,
    private storage: Storage,
    private route : ActivatedRoute,
    private navCtrl: NavController
    
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
    this.location = {
      from: '',
      to: ''
    },
    this.mode = '';
    this.odometer = '';
    this.vehicle_id = this.route.snapshot.paramMap.get('id');
    this.name = '';

    this.address_start = '';
    this.address_end = '';
    this.odometer_start = '';
    this.odometer_end = '';
    // this.datetime = '1994-12-15T13:47'
    this.datetime = new Date().toISOString();
    this.errors = [];
  }
   

  
   //LOAD THE MAP ONINIT.
   async ngOnInit() {
    // this.loadMap();   
    const vehicles = await this.storage.get("vehicles")
    console.log(vehicles);
    const sData = await this.storage.get("data")
    this.vehicle_id = this.route.snapshot.paramMap.get('id');
    const vehicle = sData.vehicles.find(x => x.id == this.vehicle_id);
    this.odometer_start = vehicle.last_odometer
  }

    //LOADING THE MAP HAS 2 PARTS.
    loadMap() {
    
      //FIRST GET THE LOCATION FROM THE DEVICE.
      this.geolocation.getCurrentPosition().then((resp) => {
        let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        } 

         //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude); 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        this.lat = this.map.center.lat()
        this.long = this.map.center.lng()
      }); 
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5    
    }; 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value); 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
      }); 
  }

  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords(){
    // alert('lat' +this.lat+', long'+this.long )
  }
  
  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults( type :string ){
    const input = this.location[type]
    this.mode = type;
    if (input== '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: input, componentRestrictions: {country: 'ph'}},
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });

  }
  
  //wE CALL THIS FROM EACH ITEM.
  async SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    const geocoder = new google.maps.Geocoder();
    const {results} = await geocoder.geocode({placeId: item.place_id})

    console.log(results)
    this[this.mode] = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }
    // console.log(item.place_id);
    // alert(JSON.stringify(item))      
    this.placeid = item.place_id
    this.location[this.mode] = item.description;
    this.autocompleteItems = [];
    console.log(this.autocompleteItems);
    // this.GoTo();
  }
  
  
  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete(param:string){
    this.autocompleteItems = []
    this.autocomplete.input = ''

    this[param] =undefined
  }
 
  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo(){
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.placeid;
  }

  async submitOld(){

    if(this.from== undefined || this.to == undefined || this.odometer=='' || this.name == '')
    {
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Please fill all fields',
        buttons: ['OK'] 
      })
      await alert.present();
      return;
    }
    this.from['address'] = this.location['from'];
    this.to['address'] = this.location['to'];
    const form = {
      from: this.from,
      to: this.to,
      odometer: this.odometer,
      vehicle_id: this.vehicle_id,
      name: this.name
    }

    console.log(form)
    const token = await this.storage.get('access_token');

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*', 
        'Authorization': `Bearer ${token}`
      }
    };
    const URL = `${environment.API_HOST}/transaction`;

    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()

    try{
      
      let {data} = await axios.post(URL, form, config);
      let sData =  await this.storage.get("data")
      sData.vehicles.find(x => x.id == this.vehicle_id).transactions.push(data.data);
      await this.storage.set('data', sData)
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Success',
        message: 'Transaction Added',
        buttons: ['OK'] 
      })
      await alert.present();
      this.navCtrl.back();      
    }catch(error){
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Error',
        buttons: ['OK'] 
      })
      await alert.present();
    }
  }
  
  hasError(field){
    return this.errors.hasOwnProperty(field);
  }

  async submit()
  {

    const loading = await this.loadingController.create({message: 'Please wait'})
    await loading.present()

    const form = {
      address_start: this.address_start,
      address_end: this.address_end,
      odometer_start: this.odometer_start,
      odometer_end: this.odometer_end,
      datetime: this.datetime,
      vehicle_id: this.vehicle_id
    }

    try {
      const token = await this.storage.get('access_token');
  
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*', 
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = `${environment.API_HOST}/travels`;
      const response = await axios.post(URL, form, config);
      await this.storage.set('data', response.data.data)

      loading.dismiss()

      const alert = await this.alertController.create({
        header: 'Success',
        message: response.data.message,
        buttons: ['OK'] 
      })
      
      await alert.present();
      this.navCtrl.back();      

    } catch (error) {
      loading.dismiss()
      this.errors = error.response.data.data;
            const alert = await this.alertController.create({
        header: 'Failed',
        message: 'Please check values',
        buttons: ['OK'] 
      })
      await alert.present();
    }
  }

  travelled(){
    if(this.odometer_start != "" && this.odometer_end !=""){
      const start = parseInt(this.odometer_start);
      const end = parseInt(this.odometer_end);

      return 'Total Traveled: '+(end - start).toLocaleString()  + ' km';
      // return parseInt(thisodometer_end) - parseInt(this.odometer_start)
    }

    return "Total Traveled: 0 km";
  }
}

      
