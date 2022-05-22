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
  selector: 'app-transinfo',
  templateUrl: './transinfo.page.html',
  styleUrls: ['./transinfo.page.scss'],
})
export class TransinfoPage implements OnInit {

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
  from : Object;
  to: Object;
  mode: string;
  odometer: String;
  transaction_id: Number;
  vehicle_id: Number;
  name: String;
  transaction: Object;


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
    this.transaction_id = parseInt(this.route.snapshot.paramMap.get('transaction_id'));
    this.vehicle_id = parseInt(this.route.snapshot.paramMap.get('vehicle_id'));
    this.name = '';
    this.transaction_id


    this.loadTransaction()
  }
   

  async loadTransaction()
  {
    const sData = await this.storage.get("data")

    this.transaction = sData.vehicles.find(x=>x.id == this.vehicle_id).transactions.find(x=>x.id == this.transaction_id);
    
    this.location['from']  =  this.transaction['from_address'];
    this['from'] =  {
      lat: this.transaction['from_lat'],
      lng: this.transaction['from_lng']
    }
    console.log(this.transaction)
    this.location['to']  =  this.transaction['to_address'];

    this['to'] =  {
      lat: this.transaction['to_lat'],
      lng: this.transaction['to_lng']
    }
    this.name = this.transaction['name'];
  }
   //LOAD THE MAP ONINIT.
   async ngOnInit() {
    this.loadMap();   
    // const vehicles = await this.storage.get("vehicles")
    // console.log(vehicles);
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
        // console.log('accuracy',this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        this.lat = this.map.center.lat()
        this.long = this.map.center.lng()
      }); 
    }).catch((error) => {
      // console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    // console.log("getAddressFromCoords "+lattitude+" "+longitude);
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

    // console.log(results)
    this[this.mode] = {
      lat: results[0].geometry.location.lat(),
      lng: results[0].geometry.location.lng(),
    }
    // console.log(item.place_id);
    // alert(JSON.stringify(item))      
    this.placeid = item.place_id
    this.location[this.mode] = item.description;
    this.autocompleteItems = [];
    // console.log(this.autocompleteItems);
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

  async submit(){

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
      // vehicle_id: this.vehicle_id,
      name: this.name
    }

    // console.log(form)
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
      // sData.vehicles.find(x => x.id == this.vehicle_id).transactions.push(data.data);
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
  
}
