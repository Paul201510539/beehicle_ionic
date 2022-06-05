(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_addvehicle_addvehicle_module_ts"],{

/***/ 6912:
/*!***************************************************************!*\
  !*** ./src/app/pages/addvehicle/addvehicle-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvehiclePageRoutingModule": () => (/* binding */ AddvehiclePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _addvehicle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addvehicle.page */ 4736);




const routes = [
    {
        path: '',
        component: _addvehicle_page__WEBPACK_IMPORTED_MODULE_0__.AddvehiclePage
    }
];
let AddvehiclePageRoutingModule = class AddvehiclePageRoutingModule {
};
AddvehiclePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddvehiclePageRoutingModule);



/***/ }),

/***/ 7251:
/*!*******************************************************!*\
  !*** ./src/app/pages/addvehicle/addvehicle.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvehiclePageModule": () => (/* binding */ AddvehiclePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _addvehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addvehicle-routing.module */ 6912);
/* harmony import */ var _addvehicle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addvehicle.page */ 4736);







let AddvehiclePageModule = class AddvehiclePageModule {
};
AddvehiclePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addvehicle_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddvehiclePageRoutingModule
        ],
        declarations: [_addvehicle_page__WEBPACK_IMPORTED_MODULE_1__.AddvehiclePage]
    })
], AddvehiclePageModule);



/***/ }),

/***/ 4736:
/*!*****************************************************!*\
  !*** ./src/app/pages/addvehicle/addvehicle.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddvehiclePage": () => (/* binding */ AddvehiclePage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addvehicle_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./addvehicle.page.html */ 154);
/* harmony import */ var _addvehicle_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addvehicle.page.scss */ 3);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/environments/environment */ 2340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/file.service */ 5031);












let AddvehiclePage = class AddvehiclePage {
  constructor(formBuilder, storage, loadingController, alertController, fileService, router) {
    this.formBuilder = formBuilder;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.fileService = fileService;
    this.router = router;
    this.initForm();
  }

  ngOnInit() {
    console.log('test');
  }

  initForm() {
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
      }),
      vehicle_image_orcr: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      vehicle_image_car: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
  }

  submitForm() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const token = yield _this.storage.get('access_token');
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST + '/vehicles/create';
      console.log(_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment, _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST);

      _this.form.patchValue({
        vehicle_image_orcr: _this.vehicle_image_ORCR,
        vehicle_image_car: _this.vehicle_image_car
      });

      try {
        const sData = yield _this.storage.get("data");
        console.log(_this.form.value);
        const res = yield axios__WEBPACK_IMPORTED_MODULE_4___default().post(URL, _this.form.value, config); // const vehicles = await this.storage.get("vehicles")
        // sData.vehicles.push(res.data.data.vehicle);

        yield _this.storage.set("data", res.data.data); // console.log('after', sData)

        yield loading.dismiss();

        if (res.data.code == 200) {
          // await this.storage.set('access_token',res.data.data.access_token)
          _this.router.navigate(["/home"]);

          const alert = yield _this.alertController.create({
            cssClass: 'Success-alert',
            header: 'Success',
            message: 'Vehicle information created',
            buttons: ['OK']
          });
        }
      } catch (err) {
        yield loading.dismiss();
        const alert = yield _this.alertController.create({
          header: 'Alert',
          message: 'Invalid Fields',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  getCoding() {
    return 'Monday';
  }

  OraddPhotoToGallery() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const base64 = yield _this2.fileService.addNewToGallery();
      _this2.vehicle_image_ORCR = `data:image/jpeg;base64, ${base64}`;
    })();
  }

  CaraddPhotoToGallery() {
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const base64 = yield _this3.fileService.addNewToGallery();
      _this3.vehicle_image_car = `data:image/jpeg;base64, ${base64}`;
    })();
  }

};

AddvehiclePage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__.FileService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

AddvehiclePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-addvehicle',
  template: _raw_loader_addvehicle_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_addvehicle_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], AddvehiclePage);


/***/ }),

/***/ 3:
/*!*******************************************************!*\
  !*** ./src/app/pages/addvehicle/addvehicle.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n\nion-item ion-label {\n  color: #949494;\n}\n\n.photoPicker ion-label {\n  font-size: 14px;\n  font-style: italic;\n  color: gray;\n}\n\n.photoPicker .button {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHZlaGljbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdJO0VBQ0UsY0FBQTtBQUFOOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlFO0VBQ0UsZUFBQTtBQUZKIiwiZmlsZSI6ImFkZHZlaGljbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIC5jZW50ZXJlZC1wIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjUlXHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6ICM5NDk0OTQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnBob3RvUGlja2Vye1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ 154:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addvehicle/addvehicle.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color =\"primary\">\r\n    <ion-title class=\"ion-text-center\">\r\n      <p class=\"centered-p\">Add Vehicle</p>\r\n    </ion-title>\r\n    \r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/home\"name=\"arrow-back-outline\" ></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <!-- <form [formGroup]=\"form\">\r\n    \r\n<ion-item>\r\n  <ion-input placeholder=\"brand name\" type=\"text\"></ion-input>\r\n</ion-item>\r\n\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Plate Number</ion-label>\r\n  <ion-input ></ion-input>\r\n</ion-item>\r\n\r\n\r\n<ion-item>\r\n<p>\r\n  <ion-label>Vehicle Type</ion-label>\r\n</p>\r\n<ion-select value=\"4\" slot=\"end\" >\r\n  <ion-select-option value=\"01\">two wheels</ion-select-option>\r\n  <ion-select-option value=\"02\">four wheels</ion-select-option>\r\n  <ion-select-option value=\"03\">three wheels</ion-select-option>\r\n  \r\n </ion-select>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item >\r\n  <ion-label >Vehicle Year</ion-label>\r\n  <ion-datetime slot=\"end\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\r\n</ion-item>\r\n\r\n<ion-item>\r\n  <ion-label position=\"floating\">Chasis No.</ion-label>\r\n  <ion-input ></ion-input>\r\n</ion-item>\r\n\r\n\r\n\r\n<ion-item>\r\n \r\n  <p>\r\n    <ion-label >Coding Schedule</ion-label>\r\n  </p>\r\n  <ion-select value=\"4\" slot=\"end\" >\r\n    <ion-select-option value=\"01\">monday</ion-select-option>\r\n    <ion-select-option value=\"02\">tuesday</ion-select-option>\r\n    <ion-select-option value=\"03\">wednesday</ion-select-option>\r\n    <ion-select-option value=\"04\">thursday</ion-select-option>\r\n    <ion-select-option value=\"04\">friday</ion-select-option>\r\n    <ion-select-option value=\"04\">saturday</ion-select-option>\r\n    <ion-select-option value=\"04\">sunday</ion-select-option>\r\n   </ion-select>\r\n  </ion-item>\r\n\r\n \r\n\r\n  <ion-item>\r\n    <ion-label>Notes:</ion-label>\r\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" ></ion-textarea>\r\n  </ion-item>\r\n\r\n  <div >\r\n    <p class=\"sukat\">Upload image of receipt/warranty</p>\r\n    <ion-button color=\"warning\"><ion-label color=\"light\">Pick File</ion-label></ion-button>\r\n    <div>\r\n      {{returnpath}}\r\n    </div>\r\n  </div>\r\n\r\n</form> -->\r\n\r\n\r\n<form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Vehicle Brand</ion-label>\r\n    <ion-input formControlName=\"brand\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Plate Number</ion-label>\r\n    <ion-input formControlName=\"plate_number\" type=\"text\" required></ion-input>\r\n  </ion-item> \r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Vehicle Type</ion-label>\r\n    <ion-select  formControlName=\"vehicle_type\">\r\n      <ion-select-option value=\"4 wheels\">4 wheels</ion-select-option>\r\n      <ion-select-option value=\"3 wheels\">3 wheels</ion-select-option>\r\n      <ion-select-option value=\"2 wheels\">2 wheels</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <ion-item>Date of purchased</ion-item>\r\n  <ion-item>\r\n\r\n  <ion-datetime formControlName=\"date_purchased\" presentation=\"date\" [(ngModel)]=\"date\">Date of purchased</ion-datetime>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label position=\"floating\">Chassis number</ion-label>\r\n    <ion-input formControlName=\"chasis\" type=\"text\" required></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- <ion-item >\r\n    <ion-label position=\"floating\">Coding</ion-label>\r\n    <ion-input formControlName=\"coding\" type=\"text\" required [(ngModel)]='coding' value=\"{{coding}}\"></ion-input>\r\n  </ion-item> -->\r\n\r\n  <ion-item >\r\n    <ion-label>Number Coding</ion-label>\r\n    <ion-select  formControlName=\"coding\">\r\n      <ion-select-option value=\"Monday\">monday</ion-select-option>\r\n      <ion-select-option value=\"Tuesday\">tuesday</ion-select-option>\r\n      <ion-select-option value=\"Wednesday\">wednesday</ion-select-option>\r\n      <ion-select-option value=\"Thursday\">Thursday</ion-select-option>\r\n      <ion-select-option value=\"Friday\">friday</ion-select-option>\r\n      <ion-select-option value=\"Saturday\">saturday</ion-select-option>\r\n      <ion-select-option value=\"Sunday\">sunday</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n\r\n  <!-- <ion-item >\r\n    <ion-label>coding</ion-label>\r\n    <ion-select multiple=\"true\" [value]=\"['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']\" formControlName=\"vehicle_coding\">\r\n      <ion-select-option value=\"Monday\">monday</ion-select-option>\r\n      <ion-select-option value=\"tuesday\">tuesday</ion-select-option>\r\n      <ion-select-option value=\"wednesday\">wednesday</ion-select-option>\r\n      <ion-select-option value=\"thursday\">thursday</ion-select-option>\r\n      <ion-select-option value=\"friday\">friday</ion-select-option>\r\n      <ion-select-option value=\"saturday\">saturday</ion-select-option>\r\n      <ion-select-option value=\"sunday\">sunday</ion-select-option>\r\n    </ion-select>\r\n  </ion-item> -->\r\n  \r\n  <ion-item>\r\n    <ion-img [src]=\"vehicle_image_ORCR\"></ion-img>\r\n  </ion-item>\r\n    \r\n  <ion-item class=\"photoPicker\">\r\n    <ion-label position=\"floating\">*upload a photo of your OR/CR</ion-label>\r\n    <ion-button (click)=\"OraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-img [src]=\"vehicle_image_car\"></ion-img>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"photoPicker\">\r\n    <ion-label position=\"floating\">*upload a photo of your Car</ion-label>\r\n    <ion-button (click)=\"CaraddPhotoToGallery()\" class=\"button\">Select Images</ion-button>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label>Notes</ion-label>\r\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" formControlName=\"notes\"></ion-textarea>\r\n  </ion-item>\r\n  \r\n\r\n  <ion-button  type=\"submit\" color=\"warning\" expand=\"block\"> <ion-label color=\"light\">Submit</ion-label>\r\n    <ion-icon slot=\"end\" name=\"add\"></ion-icon>\r\n  </ion-button>\r\n</form>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_addvehicle_addvehicle_module_ts.js.map