(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_trans_trans_module_ts"],{

/***/ 450:
/*!***********************************************!*\
  !*** ./src/app/trans/trans-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransPageRoutingModule": () => (/* binding */ TransPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _trans_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trans.page */ 7037);




// import { GoogleMap } from '@capacitor/google-maps';
// const apiKey = 'AIzaSyCimAQEHfarjsP_GqBWzFYDeaIBiMftfmA';
// const mapRef = document.getElementById('map');
// const newMap = await GoogleMap.create({
//   id: 'my-map', // Unique identifier for this map instance
//   element: mapRef, // reference to the capacitor-google-map element
//   apiKey: apiKey, // Your Google Maps API Key
//   config: {
//     center: {
//       // The initial position to be rendered by the map
//       lat: 33.6,
//       lng: -117.9,
//     },
//     zoom: 8, // The initial zoom level to be rendered by the map
//   },
// });
const routes = [
    {
        path: '',
        component: _trans_page__WEBPACK_IMPORTED_MODULE_0__.TransPage
    }
];
let TransPageRoutingModule = class TransPageRoutingModule {
};
TransPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransPageRoutingModule);



/***/ }),

/***/ 5090:
/*!***************************************!*\
  !*** ./src/app/trans/trans.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransPageModule": () => (/* binding */ TransPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _trans_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trans-routing.module */ 450);
/* harmony import */ var _trans_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trans.page */ 7037);







let TransPageModule = class TransPageModule {
};
TransPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _trans_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransPageRoutingModule
        ],
        declarations: [_trans_page__WEBPACK_IMPORTED_MODULE_1__.TransPage]
    })
], TransPageModule);



/***/ }),

/***/ 7037:
/*!*************************************!*\
  !*** ./src/app/trans/trans.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransPage": () => (/* binding */ TransPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_trans_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./trans.page.html */ 4119);
/* harmony import */ var _trans_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trans.page.scss */ 1709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);












let TransPage = class TransPage {
  constructor(geolocation, nativeGeocoder, zone, loadingController, alertController, storage, route, navCtrl) {
    this.geolocation = geolocation;
    this.nativeGeocoder = nativeGeocoder;
    this.zone = zone;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.storage = storage;
    this.route = route;
    this.navCtrl = navCtrl;
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.location = {
      from: '',
      to: ''
    }, this.mode = '';
    this.odometer = '';
    this.vehicle_id = this.route.snapshot.paramMap.get('id');
    this.name = '';
    this.address_start = '';
    this.address_end = '';
    this.odometer_start = '';
    this.odometer_end = ''; // this.datetime = '1994-12-15T13:47'

    this.datetime = new Date().toISOString();
    this.errors = [];
  } //LOAD THE MAP ONINIT.


  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // this.loadMap();   
      const vehicles = yield _this.storage.get("vehicles");
      console.log(vehicles);
      const sData = yield _this.storage.get("data");
      _this.vehicle_id = _this.route.snapshot.paramMap.get('id');
      const vehicle = sData.vehicles.find(x => x.id == _this.vehicle_id);
      _this.odometer_start = vehicle.last_odometer;
    })();
  } //LOADING THE MAP HAS 2 PARTS.


  loadMap() {
    //FIRST GET THE LOCATION FROM THE DEVICE.
    this.geolocation.getCurrentPosition().then(resp => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }; //LOAD THE MAP WITH THE PREVIOUS VALUES AS PARAMETERS.

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy', this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
        this.lat = this.map.center.lat();
        this.long = this.map.center.lng();
      });
    }).catch(error => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options).then(result => {
      this.address = "";
      let responseAddress = [];

      for (let [key, value] of Object.entries(result[0])) {
        if (value.length > 0) responseAddress.push(value);
      }

      responseAddress.reverse();

      for (let value of responseAddress) {
        this.address += value + ", ";
      }

      this.address = this.address.slice(0, -2);
    }).catch(error => {
      this.address = "Address Not Available!";
    });
  } //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP


  ShowCords() {// alert('lat' +this.lat+', long'+this.long )
  } //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.


  UpdateSearchResults(type) {
    const input = this.location[type];
    this.mode = type;

    if (input == '') {
      this.autocompleteItems = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({
      input: input,
      componentRestrictions: {
        country: 'ph'
      }
    }, (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach(prediction => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  } //wE CALL THIS FROM EACH ITEM.


  SelectSearchResult(item) {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
      const geocoder = new google.maps.Geocoder();
      const {
        results
      } = yield geocoder.geocode({
        placeId: item.place_id
      });
      console.log(results);
      _this2[_this2.mode] = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      }; // console.log(item.place_id);
      // alert(JSON.stringify(item))      

      _this2.placeid = item.place_id;
      _this2.location[_this2.mode] = item.description;
      _this2.autocompleteItems = [];
      console.log(_this2.autocompleteItems); // this.GoTo();
    })();
  } //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.


  ClearAutocomplete(param) {
    this.autocompleteItems = [];
    this.autocomplete.input = '';
    this[param] = undefined;
  } //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.


  GoTo() {
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
  }

  submitOld() {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.from == undefined || _this3.to == undefined || _this3.odometer == '' || _this3.name == '') {
        const alert = yield _this3.alertController.create({
          header: 'Alert',
          message: 'Please fill all fields',
          buttons: ['OK']
        });
        yield alert.present();
        return;
      }

      _this3.from['address'] = _this3.location['from'];
      _this3.to['address'] = _this3.location['to'];
      const form = {
        from: _this3.from,
        to: _this3.to,
        odometer: _this3.odometer,
        vehicle_id: _this3.vehicle_id,
        name: _this3.name
      };
      console.log(form);
      const token = yield _this3.storage.get('access_token');
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.API_HOST}/transaction`;
      const loading = yield _this3.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();

      try {
        let {
          data
        } = yield axios__WEBPACK_IMPORTED_MODULE_5___default().post(URL, form, config);
        let sData = yield _this3.storage.get("data");
        sData.vehicles.find(x => x.id == _this3.vehicle_id).transactions.push(data.data);
        yield _this3.storage.set('data', sData);
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Transaction Added',
          buttons: ['OK']
        });
        yield alert.present();

        _this3.navCtrl.back();
      } catch (error) {
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Alert',
          message: 'Error',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  hasError(field) {
    return this.errors.hasOwnProperty(field);
  }

  submit() {
    var _this4 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this4.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const form = {
        address_start: _this4.address_start,
        address_end: _this4.address_end,
        odometer_start: _this4.odometer_start,
        odometer_end: _this4.odometer_end,
        datetime: _this4.datetime,
        vehicle_id: _this4.vehicle_id
      };

      try {
        const token = yield _this4.storage.get('access_token');
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
          }
        };
        const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.API_HOST}/travels`;
        const response = yield axios__WEBPACK_IMPORTED_MODULE_5___default().post(URL, form, config);
        yield _this4.storage.set('data', response.data.data);
        loading.dismiss();
        const alert = yield _this4.alertController.create({
          header: 'Success',
          message: response.data.message,
          buttons: ['OK']
        });
        yield alert.present();

        _this4.navCtrl.back();
      } catch (error) {
        loading.dismiss();
        _this4.errors = error.response.data.data;
        const alert = yield _this4.alertController.create({
          header: 'Failed',
          message: 'Please check values',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  travelled() {
    if (this.odometer_start != "" && this.odometer_end != "") {
      const start = parseInt(this.odometer_start);
      const end = parseInt(this.odometer_end);
      return 'Total Traveled: ' + (end - start).toLocaleString() + ' km'; // return parseInt(thisodometer_end) - parseInt(this.odometer_start)
    }

    return "Total Traveled: 0 km";
  }

};

TransPage.ctorParameters = () => [{
  type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__.Storage
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}];

TransPage.propDecorators = {
  mapElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['map', {
      static: false
    }]
  }]
};
TransPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-trans',
  template: _raw_loader_trans_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_trans_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], TransPage);


/***/ }),

/***/ 1709:
/*!***************************************!*\
  !*** ./src/app/trans/trans.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n\ncapacitor-google-map {\n  display: inline-block;\n  width: 275px;\n  height: 400px;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 100px;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\n.map-wrapper .date-border {\n  --border-top-width: 2px;\n  --border-end-width: 3px;\n  --border-bottom-width: 2px;\n  --border-start-width: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtBQUFKOztBQUVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBTjs7QUFHRTtFQUVFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBRkoiLCJmaWxlIjoidHJhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIC5jZW50ZXJlZC1wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNSVcbiAgfVxuXG4gIGNhcGFjaXRvci1nb29nbGUtbWFwIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI3NXB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cblxuICAjbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgIFxuICAgXG4gICNhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAgXG4gICNtYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgIFxuICAubWFwLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICAgICNtYXBfY2VudGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjFweDtcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xuICAgIH1cblxuICAuZGF0ZS1ib3JkZXJ7XG5cbiAgICAtLWJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1lbmQtd2lkdGg6IDNweDtcbiAgICAtLWJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAtLWJvcmRlci1zdGFydC13aWR0aDogNnB4O1xuXG59XG4gIH0iXX0= */");

/***/ }),

/***/ 4119:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trans/trans.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">\n      <p class=\"centered-p\">Travel record</p>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/translist\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <!-- <ion-toolbar>\n    <ion-input placeholder=\"Transaction Name\" [(ngModel)] = 'name'></ion-input>\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('from')\" placeholder=\"From\"\n      (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('to')\" placeholder=\"To\"\n      (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\n    <ion-searchbar [(ngModel)]=\"location.from\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('from')\" placeholder=\"From\"\n      (ionClear)=\"ClearAutocomplete('from')\"></ion-searchbar>\n    <ion-searchbar [(ngModel)]=\"location.to\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('to')\" placeholder=\"To\"\n      (ionClear)=\"ClearAutocomplete('to')\"></ion-searchbar>\n  </ion-toolbar> -->\n\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <!-- <ion-col size=\"6\">\n      <ion-text>Google & Ionic Map</ion-text>\n    </ion-col> -->\n    <!-- <ion-toolbar>\n      <ion-button style=\"background:#FFFFFF\" (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\n        <ion-icon slot=\"secondary\" name=\"locate\"></ion-icon>\n        Where i am\n      </ion-button>\n    </ion-toolbar>  -->\n\n  </ion-row>\n</ion-header>\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">Starting Location</ion-label>\n    <ion-input [(ngModel)] = \"address_start\"></ion-input>\n    <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address_start')\">\n      {{errors['address_start'][0]}}\n    </ion-text>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Start Odometer</ion-label>\n\n    <ion-input position=\"floating\" [(ngModel)]=\"odometer_start\" type=\"number\"></ion-input>\n    <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('odometer_start')\">\n      {{errors['odometer_start'][0]}}\n    </ion-text>\n  </ion-item>\n  \n\n  <ion-item>\n    <ion-label position=\"floating\">Destination</ion-label>\n    <ion-input [(ngModel)] = \"address_end\"></ion-input>\n    <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address_end')\">\n      {{errors['address_end'][0]}}\n    </ion-text>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Succeeding Odometer \n    </ion-label>\n\n    <ion-input position=\"floating\" [(ngModel)]=\"odometer_end\" type=\"number\"></ion-input>\n    <span item-end>{{travelled()}}</span>\n    <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('odometer_end')\">\n      {{errors['odometer_end'][0]}}\n    </ion-text>\n  </ion-item>\n\n  <!-- <ion-item>\n  <ion-label>Date of Travel</ion-label>\n  <ion-datetime first-day-of-week=\"1\" ></ion-datetime>\n</ion-item>\n\n  <ion-item>\n    <ion-label>Time of Travel</ion-label>\n    <ion-datetime displayFormat=\"h:mm A\"></ion-datetime>\n  </ion-item> -->\n  <ion-item>Date</ion-item>\n  <ion-item>\n    <ion-datetime  presentation=\"time-date\" [(ngModel)]=\"datetime\">Date</ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('datetime')\">\n      {{errors['datetime'][0]}}\n    </ion-text>\n  </ion-item>\n  <ion-button slot=\"\" (click)=\"submit()\" color=\"warning\" expand=\"block\">Submit\n    <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n  </ion-button>\n\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"ShowCords()\" ion-fab color=\"tertiary\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <div class=\"map-wrapper\" style=\"height: 100%;\">\n    <div id=\"map_center\">\n      <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>\n    </div>\n    <div #map id=\"map\" style=\"height: 100%;\"></div>\n  </div> -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_trans_trans_module_ts.js.map