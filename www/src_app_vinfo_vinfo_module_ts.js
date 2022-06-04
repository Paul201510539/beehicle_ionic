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
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
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
    this.getVehicle();
  }

  getVehicle() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      _this.id = parseInt(_this.route.snapshot.paramMap.get('id'));
      _this.vehicle_id = parseInt(_this.route.snapshot.paramMap.get('id'));
      const sData = yield _this.storage.get("data");
      _this.vehicle = sData.vehicles.find(x => x.id == _this.id);
      console.log(sData.vehicles.find(x => x.id == _this.id));
      _this.pms_badge = sData.vehicles.find(x => x.id == _this.id).pms_records.filter(x => x.alert == true && x.done == false).length;
      console.log(_this.vehicle);
      _this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.brand, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        plate_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.plate_number, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.vehicle_type, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        date_purchased: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date(_this.vehicle.date_purchased).toISOString(), {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        chasis: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.chasis, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        coding: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.coding, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(_this.vehicle.notes, {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        })
      });
      loading.dismiss();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.getVehicle();

      _this2.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        plate_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        vehicle_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
          validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        }),
        date_purchased: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
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
        })
      });
    })();
  }

  ionViewWillEnter() {
    this.getVehicle();
  } // ionViewDidEnter(){
  //   console.log('ionViewDidEnter')
  // }


  submitForm() {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
        const vehicle = res.data.data.vehicle;
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Changes saved',
          buttons: ['OK']
        });
        var vehicles = yield _this3.storage.get('vehicles');
        const index = vehicles.findIndex(x => x.id == vehicle.id);
        console.log(vehicles);
        vehicles[index] = vehicle;
        yield _this3.storage.set('vehicles', vehicles);
        console.log(vehicles);
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

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const base64 = yield _this4.fileService.addNewToGallery();
      _this4.vehicle_image_ORCR = `data:image/jpeg;base64, ${base64}`;
    })();
  }

  CaraddPhotoToGallery() {
    var _this5 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n\nion-item ion-label {\n  color: #949494;\n}\n\n.photoPicker ion-label {\n  font-size: 14px;\n  font-style: italic;\n  color: gray;\n}\n\n.photoPicker .button {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFJRTtFQUNFLGNBQUE7QUFESjs7QUFNSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFLSTtFQUNFLGVBQUE7QUFITiIsImZpbGUiOiJ2aW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQgLmNlbnRlcmVkLXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTI1JTtcbiAgICBcbiAgfVxuXG5pb24taXRlbXtcbiAgaW9uLWxhYmVse1xuICAgIGNvbG9yOiAjOTQ5NDk0O1xuICB9XG59XG5cbiAgLnBob3RvUGlja2Vye1xuICAgIGlvbi1sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICAuYnV0dG9ue1xuICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIH1cbiAgfVxuXG4gICJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <p class=\"centered-p\">Vehicle Info</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-item>\n      <ion-label position=\"floating\">Vehicle Brand</ion-label>\n      <ion-input formControlName=\"brand\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-img [src]=\"vehicle_image_ORCR\"></ion-img>\n    </ion-item>\n      \n    <ion-item class=\"photoPicker\">\n      <ion-label position=\"floating\">*upload a photo of your OR/CR</ion-label>\n      <ion-button (click)=\"OraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\n    </ion-item>\n  \n    <ion-item>\n      <ion-img [src]=\"vehicle_image_car\"></ion-img>\n    </ion-item>\n  \n    <ion-item class=\"photoPicker\">\n      <ion-label position=\"floating\">*upload a photo of your Car</ion-label>\n      <ion-button (click)=\"CaraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Plate Number</ion-label>\n      <ion-input formControlName=\"plate_number\" type=\"text\" required></ion-input>\n    </ion-item>\n\n\n    <!-- <ion-item >\n    <ion-label>Vehicle type</ion-label>\n    <ion-select  formControlName=\"vehicle_type\">\n      <ion-select-option value=\"4 wheels\">4 wheels</ion-select-option>\n      <ion-select-option value=\"3 wheels\">3 wheels</ion-select-option>\n      <ion-select-option value=\"2 wheels\">2 wheels</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n\n  <ion-item>Date of purchased</ion-item>\n  <ion-item>\n    <ion-datetime formControlName=\"date_purchased\" presentation=\"date\" [(ngModel)]=\"date\">Date</ion-datetime>\n  </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"floating\">Chassis number</ion-label>\n      <ion-input formControlName=\"chasis\" type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Number Coding</ion-label>\n      <ion-input formControlName=\"coding\" type=\"text\" required [(ngModel)]='coding' value=\"{{coding}}\"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item >\n    <ion-label>coding</ion-label>\n    <ion-select multiple=\"true\" [value]=\"['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']\" formControlName=\"vehicle_coding\">\n      <ion-select-option value=\"Monday\">monday</ion-select-option>\n      <ion-select-option value=\"tuesday\">tuesday</ion-select-option>\n      <ion-select-option value=\"wednesday\">wednesday</ion-select-option>\n      <ion-select-option value=\"thursday\">thursday</ion-select-option>\n      <ion-select-option value=\"friday\">friday</ion-select-option>\n      <ion-select-option value=\"saturday\">saturday</ion-select-option>\n      <ion-select-option value=\"sunday\">sunday</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n\n    <ion-item>\n      <ion-label>Notes</ion-label>\n      <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" formControlName=\"notes\"></ion-textarea>\n    </ion-item>\n\n    <ion-button type=\"submit\" color=\"warning\" expand=\"block\">\n      <ion-label color=\"light\">Update</ion-label>\n\n    </ion-button>\n  </form>\n\n</ion-content>\n\n<ion-toolbar>\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button [routerLink]=\"['/slist', id]\">\n        <ion-icon name=\"car-outline\"></ion-icon>\n        <ion-label>Services</ion-label>\n        <ion-badge>6</ion-badge>\n      </ion-tab-button>\n      <ion-tab-button [routerLink]=\"['/translist', id]\">\n        <ion-icon name=\"book-outline\"></ion-icon>\n        <ion-label>Travel</ion-label>\n      </ion-tab-button>\n      <ion-tab-button [routerLink]=\"['/pmslist', id]\">\n        <ion-icon name=\"speedometer-outline\"></ion-icon>\n        <ion-label>PMS</ion-label>\n        <ion-badge *ngIf=\"pms_badge > 0\">{{pms_badge}}</ion-badge>\n\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n</ion-toolbar>");

/***/ })

}]);
//# sourceMappingURL=src_app_vinfo_vinfo_module_ts.js.map