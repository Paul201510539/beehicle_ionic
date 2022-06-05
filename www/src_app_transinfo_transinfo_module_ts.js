(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_transinfo_transinfo_module_ts"],{

/***/ 4040:
/*!*******************************************************!*\
  !*** ./src/app/transinfo/transinfo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransinfoPageRoutingModule": () => (/* binding */ TransinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _transinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transinfo.page */ 6580);




const routes = [
    {
        path: '',
        component: _transinfo_page__WEBPACK_IMPORTED_MODULE_0__.TransinfoPage
    }
];
let TransinfoPageRoutingModule = class TransinfoPageRoutingModule {
};
TransinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransinfoPageRoutingModule);



/***/ }),

/***/ 9858:
/*!***********************************************!*\
  !*** ./src/app/transinfo/transinfo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransinfoPageModule": () => (/* binding */ TransinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _transinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transinfo-routing.module */ 4040);
/* harmony import */ var _transinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transinfo.page */ 6580);







let TransinfoPageModule = class TransinfoPageModule {
};
TransinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransinfoPageRoutingModule
        ],
        declarations: [_transinfo_page__WEBPACK_IMPORTED_MODULE_1__.TransinfoPage]
    })
], TransinfoPageModule);



/***/ }),

/***/ 6580:
/*!*********************************************!*\
  !*** ./src/app/transinfo/transinfo.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransinfoPage": () => (/* binding */ TransinfoPage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_transinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./transinfo.page.html */ 4774);
/* harmony import */ var _transinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transinfo.page.scss */ 1297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);












let TransinfoPage = class TransinfoPage {
  constructor(geolocation, nativeGeocoder, zone, loadingController, alertController, storage, route, navCtrl) {
    this.geolocation = geolocation;
    this.nativeGeocoder = nativeGeocoder;
    this.zone = zone;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.storage = storage;
    this.route = route;
    this.navCtrl = navCtrl; // this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    // this.autocomplete = { input: '' };
    // this.autocompleteItems = [];
    // this.location = {
    //   from: '',
    //   to: ''
    // },
    // this.mode = '';
    // this.odometer = '';

    this.transaction_id = parseInt(this.route.snapshot.paramMap.get('transaction_id'));
    this.vehicle_id = parseInt(this.route.snapshot.paramMap.get('vehicle_id'));
    this.transaction = {
      address_start: '',
      address_end: '',
      odometer_start: '',
      odometer_end: '',
      datetime: new Date().toISOString()
    };
    this.loadTransaction();
  }

  loadTransaction() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this.storage.get("data");
      const transaction = sData.vehicles.find(x => x.id == _this.vehicle_id).travels.find(x => x.id == _this.transaction_id);
      _this.transaction['address_start'] = transaction.address_start;
      _this.transaction['address_end'] = transaction.address_end;
      _this.transaction['odometer_start'] = transaction.odometer_start;
      _this.transaction['odometer_end'] = transaction.odometer_end;
      _this.transaction['datetime'] = new Date(transaction['datetime']).toISOString(); // console.log(this.vehicle_id, this.transaction_id);
      // console.log(sData.vehicles.find(x=>x.id == this.vehicle_id));
      // console.log(this.transaction['datetime']);
      // this.transaction['datetime'] = new Date(this.transaction['datetime'])

      console.log(_this.transaction);
    })();
  }

  loadTransactionOld() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this2.storage.get("data");
      _this2.transaction = sData.vehicles.find(x => x.id == _this2.vehicle_id).transactions.find(x => x.id == _this2.transaction_id);
      _this2.location['from'] = _this2.transaction['from_address'];
      _this2['from'] = {
        lat: _this2.transaction['from_lat'],
        lng: _this2.transaction['from_lng']
      };
      console.log(_this2.transaction);
      _this2.location['to'] = _this2.transaction['to_address'];
      _this2['to'] = {
        lat: _this2.transaction['to_lat'],
        lng: _this2.transaction['to_lng']
      };
      _this2.name = _this2.transaction['name'];
    })();
  } //LOAD THE MAP ONINIT.


  ngOnInit() {// this.loadMap();   
    // const vehicles = await this.storage.get("vehicles")
    // console.log(vehicles);

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {})();
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
        // console.log('accuracy',this.map, this.map.center.lat());
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
        this.lat = this.map.center.lat();
        this.long = this.map.center.lng();
      });
    }).catch(error => {// console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    // console.log("getAddressFromCoords "+lattitude+" "+longitude);
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
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
      const geocoder = new google.maps.Geocoder();
      const {
        results
      } = yield geocoder.geocode({
        placeId: item.place_id
      }); // console.log(results)

      _this3[_this3.mode] = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      }; // console.log(item.place_id);
      // alert(JSON.stringify(item))      

      _this3.placeid = item.place_id;
      _this3.location[_this3.mode] = item.description;
      _this3.autocompleteItems = []; // console.log(this.autocompleteItems);
      // this.GoTo();
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

  submit() {
    var _this4 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this4.from == undefined || _this4.to == undefined || _this4.odometer == '' || _this4.name == '') {
        const alert = yield _this4.alertController.create({
          header: 'Alert',
          message: 'Please fill all fields',
          buttons: ['OK']
        });
        yield alert.present();
        return;
      }

      _this4.from['address'] = _this4.location['from'];
      _this4.to['address'] = _this4.location['to'];
      const form = {
        from: _this4.from,
        to: _this4.to,
        odometer: _this4.odometer,
        // vehicle_id: this.vehicle_id,
        name: _this4.name
      }; // console.log(form)

      const token = yield _this4.storage.get('access_token');
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.API_HOST}/transaction`;
      const loading = yield _this4.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();

      try {
        let {
          data
        } = yield axios__WEBPACK_IMPORTED_MODULE_5___default().post(URL, form, config);
        let sData = yield _this4.storage.get("data"); // sData.vehicles.find(x => x.id == this.vehicle_id).transactions.push(data.data);

        yield _this4.storage.set('data', sData);
        yield loading.dismiss();
        const alert = yield _this4.alertController.create({
          header: 'Success',
          message: 'Transaction Added',
          buttons: ['OK']
        });
        yield alert.present();

        _this4.navCtrl.back();
      } catch (error) {
        yield loading.dismiss();
        const alert = yield _this4.alertController.create({
          header: 'Alert',
          message: 'Error',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

};

TransinfoPage.ctorParameters = () => [{
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

TransinfoPage.propDecorators = {
  mapElement: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['map', {
      static: false
    }]
  }]
};
TransinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-transinfo',
  template: _raw_loader_transinfo_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_transinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], TransinfoPage);


/***/ }),

/***/ 1297:
/*!***********************************************!*\
  !*** ./src/app/transinfo/transinfo.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidHJhbnNpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZCAuY2VudGVyZWQtcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1JVxyXG4gIH0iXX0= */");

/***/ }),

/***/ 4774:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transinfo/transinfo.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">\r\n      <p class=\"centered-p\">Transaction</p>\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/translist\" name=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  \r\n    \r\n    <!-- <ion-searchbar [(ngModel)]=\"autocomplete.input\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('from')\" placeholder=\"From\"\r\n      (ionClear)=\"ClearAutocomplete()\"></ion-searchbar>\r\n    <ion-searchbar [(ngModel)]=\"autocomplete.input\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('to')\" placeholder=\"To\"\r\n      (ionClear)=\"ClearAutocomplete()\"></ion-searchbar> -->\r\n    <!-- <ion-searchbar [(ngModel)]=\"location.from\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('from')\" placeholder=\"From\"\r\n      (ionClear)=\"ClearAutocomplete('from')\"></ion-searchbar>\r\n    <ion-searchbar [(ngModel)]=\"location.to\" debounce = \"500\" (ionChange)=\"UpdateSearchResults('to')\" placeholder=\"To\"\r\n      (ionClear)=\"ClearAutocomplete('to')\"></ion-searchbar> -->\r\n  \r\n<!-- \r\n  <ion-list [hidden]=\"autocompleteItems.length == 0\">\r\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\r\n      {{ item.description }}\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n  <ion-row>\r\n    <!-- <ion-col size=\"6\">\r\n      <ion-text>Google & Ionic Map</ion-text>\r\n    </ion-col> -->\r\n    <!-- <ion-toolbar>\r\n      <ion-button style=\"background:#FFFFFF\" (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\r\n        <ion-icon slot=\"secondary\" name=\"locate\"></ion-icon>\r\n        Where i am\r\n      </ion-button>\r\n    </ion-toolbar>  -->\r\n    \r\n  </ion-row>\r\n</ion-header>\r\n<ion-content>\r\n  <!-- <ion-input [(ngModel)] = \"odometer\" placeholder=\"odometer\"></ion-input>\r\n  <ion-button (click) = \"submit()\" color=\"light\">Submit</ion-button> -->\r\n\r\n  <!-- \r\n    \r\n    <ion-fab-button (click)=\"ShowCords()\" ion-fab color=\"tertiary\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <div class=\"map-wrapper\" style=\"height: 100%;\">\r\n    <div id=\"map_center\">\r\n      <ion-icon name=\"pin\" size=\"large\" color=\"danger\"></ion-icon>\r\n    </div>\r\n    <div #map id=\"map\" style=\"height: 100%;\"></div>\r\n  </div> -->\r\n\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Starting point</ion-label>\r\n    <ion-input [(ngModel)]='transaction.address_start' ></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Starting odometer</ion-label>\r\n    <ion-input [(ngModel)]='transaction.odometer_start'></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Destination</ion-label>\r\n    <ion-input [(ngModel)]='transaction.address_end'></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Succeeding Odometer</ion-label>\r\n    <ion-input [(ngModel)]='transaction.odometer_end'></ion-input>\r\n  </ion-item>\r\n  \r\n  <ion-item>Date</ion-item>\r\n<ion-item>\r\n  <ion-datetime  presentation=\"time-date\" [(ngModel)]=\"transaction.datetime\">Date</ion-datetime>\r\n</ion-item>\r\n\r\n<!-- <ion-button slot=\"\" (click)=\"submit()\" color=\"warning\" expand=\"block\">Submit\r\n  <ion-icon slot=\"end\" name=\"add\"></ion-icon>\r\n</ion-button> -->\r\n\r\n  \r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_transinfo_transinfo_module_ts.js.map