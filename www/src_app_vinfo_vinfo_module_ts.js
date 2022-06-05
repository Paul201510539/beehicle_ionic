(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_vinfo_vinfo_module_ts"],{

/***/ 8839:
/*!***********************************************!*\
  !*** ./src/app/vinfo/vinfo-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinfoPageRoutingModule": () => (/* binding */ VinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _vinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinfo.page */ 6846);




const routes = [
    {
        path: '',
        component: _vinfo_page__WEBPACK_IMPORTED_MODULE_0__.VinfoPage
    }
];
let VinfoPageRoutingModule = class VinfoPageRoutingModule {
};
VinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VinfoPageRoutingModule);



/***/ }),

/***/ 5039:
/*!***************************************!*\
  !*** ./src/app/vinfo/vinfo.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinfoPageModule": () => (/* binding */ VinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _vinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vinfo-routing.module */ 8839);
/* harmony import */ var _vinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vinfo.page */ 6846);







let VinfoPageModule = class VinfoPageModule {
};
VinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.VinfoPageRoutingModule
        ],
        declarations: [_vinfo_page__WEBPACK_IMPORTED_MODULE_1__.VinfoPage]
    })
], VinfoPageModule);



/***/ }),

/***/ 6846:
/*!*************************************!*\
  !*** ./src/app/vinfo/vinfo.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VinfoPage": () => (/* binding */ VinfoPage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_vinfo_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./vinfo.page.html */ 8872);
/* harmony import */ var _vinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vinfo.page.scss */ 4163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/file.service */ 5031);












let VinfoPage = class VinfoPage {
  constructor(router, storage, formBuilder, route, loadingController, alertController, fileService) {
    this.router = router;
    this.storage = storage;
    this.formBuilder = formBuilder;
    this.route = route;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.fileService = fileService;
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      plate_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      date_purchased: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date().toISOString(), {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      chasis: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      coding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      vehicle_image_orcr: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      vehicle_image_car: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
  }

  getVehicle() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      _this.id = parseInt(_this.route.snapshot.paramMap.get('id'));
      _this.vehicle_id = parseInt(_this.route.snapshot.paramMap.get('id'));
      const sData = yield _this.storage.get("data");
      _this.vehicle = sData.vehicles.find(x => x.id == _this.id);
      _this.pms_badge = sData.vehicles.find(x => x.id == _this.id).pms_records.filter(x => x.alert == true && x.done == false).length;
      console.log('vehicle is');
      console.log('-----');
      console.log(_this.vehicle.date_purchased);
      console.log('-----');
      console.log('vehicle is'); // this.form = new FormGroup({
      //   brand: new FormControl(this.vehicle.brand, { validators: [Validators.required] }),
      //   plate_number: new FormControl(this.vehicle.plate_number, { validators: [Validators.required] }),
      //   vehicle_type: new FormControl(this.vehicle.vehicle_type, { validators: [Validators.required] }),
      //   date_purchased: (new Date(this.vehicle.date_purchased), { validators: [Validators.required] }),
      //   chasis: new FormControl(this.vehicle.chasis, { validators: [Validators.required] }),
      //   coding: new FormControl(this.vehicle.coding, { validators: [Validators.required] }),
      //   notes: new FormControl(this.vehicle.notes, { validators: [Validators.required] }),
      //   vehicle_image_orcr: new FormControl(this.vehicle.vehicle_image_orcr),
      //   vehicle_image_car: new FormControl(this.vehicle.vehicle_image_car),
      // })  

      _this.form.patchValue({
        brand: _this.vehicle.brand,
        plate_number: _this.vehicle.plate_number,
        vehicle_type: _this.vehicle.vehicle_type,
        date_purchased: new Date(_this.vehicle.date_purchased).toISOString(),
        chasis: _this.vehicle.chasis,
        coding: _this.vehicle.coding,
        notes: _this.vehicle.notes,
        vehicle_image_orcr: _this.vehicle.vehicle_image_orcr,
        vehicle_image_car: _this.vehicle.vehicle_image_car
      });

      _this.vehicle_image_ORCR = _this.vehicle.vehicle_image_orcr;
      _this.vehicle_image_car = _this.vehicle.vehicle_image_car;
      loading.dismiss();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.getVehicle(); // this.form = new FormGroup({
      //   brand: new FormControl('', { validators: [Validators.required] }),
      //   plate_number: new FormControl('', { validators: [Validators.required] }),
      //   vehicle_type: new FormControl('', { validators: [Validators.required] }),
      //   date_purchased: new FormControl('', { validators: [Validators.required] }),
      //   chasis: new FormControl('', { validators: [Validators.required] }),
      //   coding: new FormControl('', { validators: [Validators.required] }),
      //   notes: new FormControl('', { validators: [Validators.required] }),
      // })

    })();
  }

  ionViewWillEnter() {// this.getVehicle()
  } // ionViewDidEnter(){
  //   console.log('ionViewDidEnter')
  // }


  submitForm() {
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const token = yield _this3.storage.get('access_token');
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST;

      try {
        const res = yield axios__WEBPACK_IMPORTED_MODULE_4___default().put(`${URL}/vehicles/${_this3.id}/update`, _this3.form.value, config);
        const data = res.data.data;
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Changes saved',
          buttons: ['OK']
        }); // var vehicles = await this.storage.get('data')
        // const index = vehicles.findIndex(x=>x.id == vehicle.id)
        // console.log(vehicles)
        // vehicles[index] = vehicle

        yield _this3.storage.set('data', data); // console.log(vehicles)

        yield alert.present();

        _this3.router.navigate(["/home"]);
      } catch (err) {
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Alert',
          message: 'Invalid Credentials',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  save() {
    console.log('clicked');
  }

  OraddPhotoToGallery() {
    var _this4 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const base64 = yield _this4.fileService.addNewToGallery();
      _this4.vehicle_image_ORCR = `data:image/jpeg;base64, ${base64}`;
    })();
  }

  CaraddPhotoToGallery() {
    var _this5 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const base64 = yield _this5.fileService.addNewToGallery();
      _this5.vehicle_image_car = `data:image/jpeg;base64, ${base64}`;
    })();
  }

  initForm() {}

};

VinfoPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _services_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService
}];

VinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-vinfo',
  template: _raw_loader_vinfo_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_vinfo_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], VinfoPage);


/***/ }),

/***/ 4163:
/*!***************************************!*\
  !*** ./src/app/vinfo/vinfo.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n\nion-item ion-label {\n  color: #949494;\n}\n\n.photoPicker ion-label {\n  font-size: 14px;\n  font-style: italic;\n  color: gray;\n}\n\n.photoPicker .button {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGNBQUE7QUFESjs7QUFNSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFLSTtFQUNFLGVBQUE7QUFITiIsImZpbGUiOiJ2aW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQgLmNlbnRlcmVkLXAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNSU7XHJcbiAgICBcclxuICB9XHJcblxyXG5pb24taXRlbXtcclxuICBpb24tbGFiZWx7XHJcbiAgICBjb2xvcjogIzk0OTQ5NDtcclxuICB9XHJcbn1cclxuXHJcbiAgLnBob3RvUGlja2Vye1xyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9ue1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAiXX0= */");

/***/ }),

/***/ 8872:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vinfo/vinfo.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      <p class=\"centered-p\">Vehicle Info</p>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\" name=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Vehicle Brand</ion-label>\r\n      <ion-input formControlName=\"brand\" type=\"text\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-img [src]=\"vehicle_image_ORCR\"></ion-img>\r\n    </ion-item>\r\n      \r\n    <ion-item class=\"photoPicker\">\r\n      <ion-label position=\"floating\">*upload a photo of your OR/CR</ion-label>\r\n      <ion-button (click)=\"OraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-img [src]=\"vehicle_image_car\"></ion-img>\r\n    </ion-item>\r\n  \r\n    <ion-item class=\"photoPicker\">\r\n      <ion-label position=\"floating\">*upload a photo of your Car</ion-label>\r\n      <ion-button (click)=\"CaraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Plate Number</ion-label>\r\n      <ion-input formControlName=\"plate_number\" type=\"text\" required></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <!-- <ion-item >\r\n    <ion-label>Vehicle type</ion-label>\r\n    <ion-select  formControlName=\"vehicle_type\">\r\n      <ion-select-option value=\"4 wheels\">4 wheels</ion-select-option>\r\n      <ion-select-option value=\"3 wheels\">3 wheels</ion-select-option>\r\n      <ion-select-option value=\"2 wheels\">2 wheels</ion-select-option>\r\n    </ion-select>\r\n  </ion-item> -->\r\n\r\n\r\n  <ion-item>Date of purchased</ion-item>\r\n  <ion-item>\r\n    <ion-datetime formControlName=\"date_purchased\"  presentation=\"time-date\" displayFormat=\"MMM DD, h:mm A\">Date</ion-datetime>\r\n  </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Chassis number</ion-label>\r\n      <ion-input formControlName=\"chasis\" type=\"text\" required></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Number Coding</ion-label>\r\n      <ion-input formControlName=\"coding\" type=\"text\" required [(ngModel)]='coding' value=\"{{coding}}\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item >\r\n    <ion-label>coding</ion-label>\r\n    <ion-select multiple=\"true\" [value]=\"['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']\" formControlName=\"vehicle_coding\">\r\n      <ion-select-option value=\"Monday\">monday</ion-select-option>\r\n      <ion-select-option value=\"tuesday\">tuesday</ion-select-option>\r\n      <ion-select-option value=\"wednesday\">wednesday</ion-select-option>\r\n      <ion-select-option value=\"thursday\">thursday</ion-select-option>\r\n      <ion-select-option value=\"friday\">friday</ion-select-option>\r\n      <ion-select-option value=\"saturday\">saturday</ion-select-option>\r\n      <ion-select-option value=\"sunday\">sunday</ion-select-option>\r\n    </ion-select>\r\n  </ion-item> -->\r\n\r\n\r\n    <ion-item>\r\n      <ion-label>Notes</ion-label>\r\n      <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" formControlName=\"notes\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-button type=\"submit\" color=\"warning\" expand=\"block\">\r\n      <ion-label color=\"light\">Update</ion-label>\r\n\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n<ion-toolbar>\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button [routerLink]=\"['/slist', id]\">\r\n        <ion-icon name=\"car-outline\"></ion-icon>\r\n        <ion-label>Services</ion-label>\r\n        <ion-badge>6</ion-badge>\r\n      </ion-tab-button>\r\n      <ion-tab-button [routerLink]=\"['/translist', id]\">\r\n        <ion-icon name=\"book-outline\"></ion-icon>\r\n        <ion-label>Travel</ion-label>\r\n      </ion-tab-button>\r\n      <ion-tab-button [routerLink]=\"['/pmslist', id]\">\r\n        <ion-icon name=\"speedometer-outline\"></ion-icon>\r\n        <ion-label>PMS</ion-label>\r\n        <ion-badge *ngIf=\"pms_badge > 0\">{{pms_badge}}</ion-badge>\r\n\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_vinfo_vinfo_module_ts.js.map