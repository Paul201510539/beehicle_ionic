(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_addservicelist_addservicelist_module_ts"],{

/***/ 5433:
/*!*****************************************************************!*\
  !*** ./src/app/addservicelist/addservicelist-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicelistPageRoutingModule": () => (/* binding */ AddservicelistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _addservicelist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservicelist.page */ 6789);




const routes = [
    {
        path: '',
        component: _addservicelist_page__WEBPACK_IMPORTED_MODULE_0__.AddservicelistPage
    }
];
let AddservicelistPageRoutingModule = class AddservicelistPageRoutingModule {
};
AddservicelistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddservicelistPageRoutingModule);



/***/ }),

/***/ 7952:
/*!*********************************************************!*\
  !*** ./src/app/addservicelist/addservicelist.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicelistPageModule": () => (/* binding */ AddservicelistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _addservicelist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservicelist-routing.module */ 5433);
/* harmony import */ var _addservicelist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addservicelist.page */ 6789);







let AddservicelistPageModule = class AddservicelistPageModule {
};
AddservicelistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _addservicelist_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddservicelistPageRoutingModule
        ],
        declarations: [_addservicelist_page__WEBPACK_IMPORTED_MODULE_1__.AddservicelistPage]
    })
], AddservicelistPageModule);



/***/ }),

/***/ 6789:
/*!*******************************************************!*\
  !*** ./src/app/addservicelist/addservicelist.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicelistPage": () => (/* binding */ AddservicelistPage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addservicelist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./addservicelist.page.html */ 1317);
/* harmony import */ var _addservicelist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addservicelist.page.scss */ 2849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);











let AddservicelistPage = class AddservicelistPage {
  constructor(formBuilder, route, storage, loadingController, alertController, navCtrl, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.router = router;
    this.initForm();
    this.services = [{
      id: 1,
      label: 'Air'
    }, {
      id: 2,
      label: 'Tire Replacement'
    }, {
      id: 3,
      label: 'Scratch'
    }, {
      id: 4,
      label: 'Seat Cover'
    }, {
      id: 5,
      label: 'Light'
    }];
    this.providers = [{
      id: 1,
      label: 'Motortrade'
    }, {
      id: 2,
      label: 'Toyota'
    }, {
      id: 3,
      label: 'Hyundai'
    }, {
      id: 4,
      label: 'Honda'
    }, {
      id: 5,
      label: 'Mitsubishi'
    }];
  }

  ngOnInit() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.vehicle_id = parseInt(_this.route.snapshot.paramMap.get('vehicle_id'));
      _this.service_id = parseInt(_this.route.snapshot.paramMap.get('service_id'));
      _this.mode = _this.route.snapshot.paramMap.get('mode') != null ? _this.route.snapshot.paramMap.get('mode') : 'create';
    })();
  }

  initForm() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.mode = _this2.route.snapshot.paramMap.get('mode') != null ? _this2.route.snapshot.paramMap.get('mode') : 'create';

      if (_this2.mode == 'create') {
        _this2.name = null;
        _this2.selected_services = [];
        _this2.date = null;
        _this2.selected_provider = {};
        _this2.cost = null;
        _this2.notes = null;
      } else {
        const sData = yield _this2.storage.get('data');
        const service = sData.vehicles.find(x => x.id == _this2.vehicle_id).service_summary.find(x => x.id == _this2.service_id);
        _this2.name = service.name;
        _this2.selected_services = service.services.map(service => service.service_id.toString());
        _this2.selected_provider = service.provider_id.toString();
        _this2.date = new Date(service.date).toISOString();
        _this2.cost = service.cost;
        _this2.notes = service.notes;
      }
    })();
  }

  submitForm() {
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // console.log('provider', this.selected_provider)
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
      ;

      try {
        const form = {
          name: _this3.name,
          service_ids: _this3.selected_services,
          date: _this3.date,
          provider_id: _this3.selected_provider,
          cost: _this3.cost,
          notes: _this3.notes,
          vehicle_id: _this3.vehicle_id
        }; // form.vehicle_id = this.vehicle_id;

        const res = yield axios__WEBPACK_IMPORTED_MODULE_4___default().post(`${URL}/vehicles/${_this3.vehicle_id}/services/create`, form, config);
        yield loading.dismiss();
        const sData = yield _this3.storage.get('data');
        console.log('before', sData);
        sData.vehicles.find(x => x.id == _this3.vehicle_id).service_summary.push(res.data.data.service);
        console.log(sData.vehicles.find(x => x.id == _this3.vehicle_id));
        yield _this3.storage.set('data', sData);
        console.log('after', sData);
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Service Added',
          buttons: ['OK']
        });
        yield alert.present();

        _this3.navCtrl.back();
      } catch (e) {
        console.log(e);
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

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

};

AddservicelistPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

AddservicelistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-addservicelist',
  template: _raw_loader_addservicelist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_addservicelist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], AddservicelistPage);


/***/ }),

/***/ 2849:
/*!*********************************************************!*\
  !*** ./src/app/addservicelist/addservicelist.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHNlcnZpY2VsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiYWRkc2VydmljZWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIC5jZW50ZXJlZC1wIHtcclxuICAgIHRleHQtYWxpZ246IGF1dG87XHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 1317:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/addservicelist/addservicelist.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"\">\r\n      <p class=\"centered-p\">Other Services</p>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/slist\" name=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab> -->\r\n\r\n  <ion-list lines=\"none\">\r\n\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Owners Name</ion-label>\r\n        <ion-input [(ngModel)]=\"name\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n\r\n\r\n      <ion-item>\r\n        <ion-label> Other Service Type/s</ion-label>\r\n        <ion-select multiple [(ngModel)]=\"selected_services\" >\r\n          <ion-select-option \r\n          *ngFor=\"let service of services\" \r\n          value=\"{{service.id}}\"\r\n          >{{service.label}}</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>Date of Service</ion-item>\r\n      <ion-item>\r\n        <ion-label>Date of Service</ion-label>\r\n        <ion-datetime [(ngModel)]=\"date\" displayFormat=\"DD.MM.YYYY\" presentation=\"date\"></ion-datetime>\r\n      </ion-item>\r\n\r\n        <!-- <ion-item>\r\n          <ion-label>Service Provider</ion-label>\r\n          <ion-select [(ngModel)]=\"provider_id\">\r\n            <ion-select-option value=\"1\">Motortrade</ion-select-option>\r\n            <ion-select-option value=\"2\">Toyota</ion-select-option>\r\n            <ion-select-option value=\"3\">Hyundai</ion-select-option>\r\n            <ion-select-option value=\"4\">Honda</ion-select-option>\r\n            <ion-select-option value=\"5\">Mitsubish</ion-select-option>\r\n          </ion-select>\r\n        </ion-item> -->\r\n\r\n        <ion-item >\r\n          <ion-label position=\"floating\">Service Provider</ion-label>\r\n          <!-- <ion-input [(ngModel)]=\"provider_id\"></ion-input> -->\r\n          <ion-select [(ngModel)]=\"selected_provider\" >\r\n            <ion-select-option *ngFor=\"let provider of providers\" value=\"{{provider.id}}\" >{{provider.label}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Cost</ion-label>\r\n        <ion-input  placeholder=\"₱0.00\" inputmode=\"decimal\"  name=\"amount\" [(ngModel)]=\"cost\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label>Notes</ion-label>\r\n        <ion-textarea [(ngModel)]=\"notes\" rows=\"9\" cols=\"20\" placeholder=\"Enter any notes here...\">\r\n        </ion-textarea>\r\n      </ion-item>\r\n      <ion-button size=\"large\" expand=\"block\" shape=\"round\" color=\"dark\" *ngIf=\"mode=='create'\"\r\n      (click)=\"submitForm()\"  >\r\n      <!--  [disabled]=\"!form?.valid\" -->\r\n      <ion-text>Submit</ion-text>\r\n    </ion-button>\r\n  </ion-list>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_addservicelist_addservicelist_module_ts.js.map