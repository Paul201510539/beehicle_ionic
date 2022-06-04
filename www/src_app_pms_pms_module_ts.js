(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pms_pms_module_ts"],{

/***/ 3096:
/*!*******************************************!*\
  !*** ./src/app/pms/pms-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmsPageRoutingModule": () => (/* binding */ PmsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pms.page */ 7611);




const routes = [
    {
        path: '',
        component: _pms_page__WEBPACK_IMPORTED_MODULE_0__.PmsPage
    }
];
let PmsPageRoutingModule = class PmsPageRoutingModule {
};
PmsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PmsPageRoutingModule);



/***/ }),

/***/ 7309:
/*!***********************************!*\
  !*** ./src/app/pms/pms.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmsPageModule": () => (/* binding */ PmsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _pms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pms-routing.module */ 3096);
/* harmony import */ var _pms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pms.page */ 7611);







let PmsPageModule = class PmsPageModule {
};
PmsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pms_routing_module__WEBPACK_IMPORTED_MODULE_0__.PmsPageRoutingModule
        ],
        declarations: [_pms_page__WEBPACK_IMPORTED_MODULE_1__.PmsPage]
    })
], PmsPageModule);



/***/ }),

/***/ 7611:
/*!*********************************!*\
  !*** ./src/app/pms/pms.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmsPage": () => (/* binding */ PmsPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pms_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./pms.page.html */ 7600);
/* harmony import */ var _pms_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pms.page.scss */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);










let PmsPage = class PmsPage {
  constructor(route, storage, loadingController, alertController, navCtrl, router) {
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.router = router;
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this.storage.get('data');
      _this.vehicle_id = _this.route.snapshot.paramMap.get('vehicle_id');
      _this.pms_kms = _this.route.snapshot.paramMap.get('odometer').toString();
      _this.pms_form_old = [{
        id: 1,
        label: '1,000km PMS',
        odometer: '1000',
        fields: [{
          code: 'break_system',
          label: 'Break System',
          value: false
        }, {
          code: 'engine',
          label: 'Engine',
          value: false
        }, {
          code: 'oil',
          label: 'Oil',
          value: false
        }, {
          code: 'filters',
          label: 'Filters',
          value: false
        }, {
          code: 'washer_fluid',
          label: 'Washer Fluid',
          value: false
        }, {
          code: 'engine_coolant',
          label: 'Engine Coolant',
          value: false
        }, {
          code: 'notes',
          label: 'Notes',
          value: false
        }, {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }, {
        id: 2,
        label: '5,000km PMS',
        odometer: '5000',
        fields: [{
          code: 'change_oil',
          label: 'Change Oil',
          value: false
        }, {
          code: 'change_oil_filter',
          label: 'Change Oil Filter',
          value: false
        }, {
          code: 'change_oil_leaks',
          label: 'Change Oil Leaks',
          value: false
        }, {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }, {
        id: 3,
        label: '10,000km PMS',
        odometer: '10000',
        fields: [{
          code: 'mandatory_oil_change',
          label: 'Mandatory Change Oil',
          value: false
        }, {
          code: 'brake_pads',
          label: 'Brake Pads',
          value: false
        }, {
          code: 'axle_joints',
          label: 'Axle Joints',
          value: false
        }, {
          code: 'parking_break',
          label: 'Parking Break',
          value: false
        }, {
          code: 'clutch',
          label: 'Clutch',
          value: false
        }, {
          code: 'steering',
          label: 'Steering',
          value: false
        }, {
          code: 'suspension_system',
          label: 'Suspension System',
          value: false
        }, {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }];
      _this.pms_form = [{
        id: 1,
        label: '1,000km PMS',
        odometer: '1000',
        fields: [{
          code: 'break_system',
          label: 'Break System',
          value: false
        }, {
          code: 'engine',
          label: 'Engine',
          value: false
        }, {
          code: 'oil',
          label: 'Oil',
          value: false
        }, {
          code: 'filters',
          label: 'Filters',
          value: false
        }, {
          code: 'washer_fluid',
          label: 'Washer Fluid',
          value: false
        }, {
          code: 'engine_coolant',
          label: 'Engine Coolant',
          value: false
        }, {
          code: 'cost',
          label: 'Cost',
          value: false
        }, // {
        //   code :'notes',
        //   label: 'Notes',
        //   value: false
        // },
        {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }, {
        id: 2,
        label: '5,000km PMS',
        odometer: '5000',
        fields: [{
          code: 'change_oil',
          label: 'Change Oil',
          value: false
        }, {
          code: 'change_oil_filter',
          label: 'Change Oil Filter',
          value: false
        }, {
          code: 'change_oil_leaks',
          label: 'Change Oil Leaks',
          value: false
        }, {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }, {
        id: 3,
        label: '10,000km PMS',
        odometer: '10000',
        fields: [{
          code: 'mandatory_oil_change',
          label: 'Mandatory Change Oil',
          value: false
        }, {
          code: 'brake_pads',
          label: 'Brake Pads',
          value: false
        }, {
          code: 'axle_joints',
          label: 'Axle Joints',
          value: false
        }, {
          code: 'parking_break',
          label: 'Parking Break',
          value: false
        }, {
          code: 'clutch',
          label: 'Clutch',
          value: false
        }, {
          code: 'steering',
          label: 'Steering',
          value: false
        }, {
          code: 'suspension_system',
          label: 'Suspension System',
          value: false
        }, {
          code: 'date',
          label: 'Date',
          value: new Date().toISOString()
        }]
      }];
      _this.pms = _this.pms_form.find(x => x.odometer == _this.pms_kms); // return;

      _this.fields = _this.pms.fields;
      const pms_data = sData.vehicles.find(x => x.id == _this.vehicle_id).pms.find(x => x.pms_kms == _this.pms_kms);
      _this.mode = pms_data === undefined ? 'create' : 'update';

      if (_this.mode == 'update') {
        _this.pms_data = JSON.parse(pms_data.data);

        _this.loadFields();
      }
    })();
  }

  loadFields() {
    Object.keys(this.pms_data).map(key => {
      if (key == 'date' || key == 'cost' || key == 'pms' || key == 'vehicle_id') {} else {
        const field = this.fields.find(x => x.code == key); // console.log(key, '---', value);
        // const obj_value = field.value > 0 ? true : false;

        if (field !== undefined) {
          this.fields.find(x => x.code == key).value = this.pms_data[key];
        }
      }
    }); //  console.log('fields are',this.fields);
  }

  show(field) {
    if (this.fields) {
      return this.fields.findIndex(x => x.code == field) < 0 ? false : true;
    }

    return false;
  }

  submit() {
    if (this.mode == 'create') {
      this.create();
    } else {
      this.update();
    }
  }

  create() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this2.storage.get('data');
      const loading = yield _this2.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const token = yield _this2.storage.get('access_token');
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        }
      };
      const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST; // let fields = [];

      const form = {};

      _this2.fields.map(x => {
        form[x.code] = x.value;
      });

      form['vehicle_id'] = _this2.vehicle_id;
      form['pms'] = _this2.pms_kms; // fields['vehicle_id'] = this.vehicle_id
      // fields['pms'] = this.pms_kms;

      try {
        const res = yield axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${URL}/pms  `, form, config);
        yield loading.dismiss();
        const alert = yield _this2.alertController.create({
          header: 'Success',
          message: res.data.message,
          buttons: ['OK']
        });
        yield _this2.storage.set('data', res.data.data);
        yield alert.present();

        _this2.navCtrl.back();
      } catch (e) {
        console.log(e);
        yield loading.dismiss();
        const alert = yield _this2.alertController.create({
          header: 'Alert',
          message: e.response.data.message,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  update() {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this3.storage.get('data');
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
      const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST; // let fields = [];

      const form = {};

      _this3.fields.map(x => {
        form[x.code] = x.value;
      });

      form['vehicle_id'] = _this3.vehicle_id;
      form['pms'] = _this3.pms_kms; // fields['vehicle_id'] = this.vehicle_id
      // fields['pms'] = this.pms_kms;

      try {
        const res = yield axios__WEBPACK_IMPORTED_MODULE_4___default().put(`${URL}/pms/${_this3.vehicle_id}/${_this3.pms_kms}`, form, config);
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: res.data.message,
          buttons: ['OK']
        });
        yield _this3.storage.set('data', res.data.data);
        yield alert.present();

        _this3.navCtrl.back();
      } catch (e) {
        console.log(e);
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Alert',
          message: e.response.data.message,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

};

PmsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

PmsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-pms',
  template: _raw_loader_pms_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_pms_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], PmsPage);


/***/ }),

/***/ 8396:
/*!***********************************!*\
  !*** ./src/app/pms/pms.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoicG1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZCAuY2VudGVyZWQtcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUlXG4gIH0iXX0= */");

/***/ }),

/***/ 7600:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pms/pms.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      <p class=\"centered-p\">PMS</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item>\n    <ion-label><strong>First 1000km</strong></ion-label>\n  </ion-item>\n  <ion-item  *ngIf =\"show('break_system')\">\n    <ion-label position=\"floating\">Break System</ion-label>\n    <ion-textarea autogrow></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf =\"show('engine')\">\n    <ion-label position=\"floating\">Engine</ion-label>\n    <ion-textarea autogrow></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf =\"show('oil')\">\n    <ion-label position=\"floating\">Oil</ion-label>\n    <ion-textarea auto-grow></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf =\"show('filters')\">\n    <ion-label position=\"floating\">Filters</ion-label>\n    <ion-textarea autogrow></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf =\"show('washer_fluid')\">\n    <ion-label position=\"floating\">Washer Fluid</ion-label>\n    <ion-textarea autogrow></ion-textarea>\n  </ion-item>\n  <ion-item *ngIf =\"show('engine_coolant')\">\n    <ion-label position=\"floating\">Engine Coolant</ion-label>\n    <ion-textarea autogrow></ion-textarea>\n  </ion-item> -->\n  <ion-item *ngFor=\"let field of fields\" >\n    \n    <!-- <ion-label *ngIf=\"field.code!='date'\">{{field.label}}</ion-label>\n    <ion-textarea autogrow [(ngModel)]=\"field.value\" *ngIf=\"field.code!='date'\"></ion-textarea> -->\n    <ion-checkbox slot=\"start\" [(ngModel)]=\"field.value\"  *ngIf=\"field.code!='date'\"></ion-checkbox>\n\n    <ion-label>{{field.label}}</ion-label>\n\n    <ion-label *ngIf=\"field.code=='date'\">{{field.label}}</ion-label>\n    <ion-datetime autogrow  [(ngModel)]=\"field.value\" *ngIf=\"field.code=='date'\"></ion-datetime>\n    \n  </ion-item>\n\n  <!-- <ion-list *ngFor=\"let field of fields\"></ion-list> -->\n  <ion-item *ngIf =\"show('amount')\">\n    <ion-label>Cost</ion-label>\n    <ion-input placeholder=\"0.00\" inputmode=\"decimal\" [(ngModel)]=\"field.amount\" name=\"amount\"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf =\"show('notes')\">\n    <ion-label>Notes</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" ></ion-textarea>\n  </ion-item>\n\n  <ion-button type=\"submit\" color=\"warning\" expand=\"block\" (click)=\"submit()\">\n    <ion-label color=\"light\">Update</ion-label>\n\n  </ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pms_pms_module_ts.js.map