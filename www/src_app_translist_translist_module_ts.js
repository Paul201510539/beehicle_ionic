(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_translist_translist_module_ts"],{

/***/ 5790:
/*!*******************************************************!*\
  !*** ./src/app/translist/translist-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslistPageRoutingModule": () => (/* binding */ TranslistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _translist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translist.page */ 2748);




const routes = [
    {
        path: '',
        component: _translist_page__WEBPACK_IMPORTED_MODULE_0__.TranslistPage
    }
];
let TranslistPageRoutingModule = class TranslistPageRoutingModule {
};
TranslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TranslistPageRoutingModule);



/***/ }),

/***/ 2284:
/*!***********************************************!*\
  !*** ./src/app/translist/translist.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslistPageModule": () => (/* binding */ TranslistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _translist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translist-routing.module */ 5790);
/* harmony import */ var _translist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translist.page */ 2748);







let TranslistPageModule = class TranslistPageModule {
};
TranslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _translist_routing_module__WEBPACK_IMPORTED_MODULE_0__.TranslistPageRoutingModule
        ],
        declarations: [_translist_page__WEBPACK_IMPORTED_MODULE_1__.TranslistPage]
    })
], TranslistPageModule);



/***/ }),

/***/ 2748:
/*!*********************************************!*\
  !*** ./src/app/translist/translist.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslistPage": () => (/* binding */ TranslistPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_translist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./translist.page.html */ 7753);
/* harmony import */ var _translist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translist.page.scss */ 3715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);










let TranslistPage = class TranslistPage {
  constructor(router, route, loadingController, alertController, storage, navCtrl) {
    this.router = router;
    this.route = route;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.storage = storage;
    this.navCtrl = navCtrl;
    this.vehicle_id = this.route.snapshot.paramMap.get('vehicle_id');
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = yield _this.storage.get("data");
      _this.transactions = data.vehicles.find(x => x.id == _this.vehicle_id).travels.sort((a, b) => b.id - a.id);
    })();
  }

  ionViewDidEnter() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = yield _this2.storage.get("data");
      _this2.transactions = data.vehicles.find(x => x.id == _this2.vehicle_id).travels.sort((a, b) => b.id - a.id);
      _this2.vehicle = data.vehicles.find(x => x.id == _this2.vehicle_id);
    })();
  }

  delete(transaction_id) {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let decision = false;
      const alert = yield _this3.alertController.create({
        header: 'Alert',
        message: 'Do you really want to delete this record?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            decision = false;
          }
        }, {
          text: 'Yes',
          handler: function () {
            var _ref = (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
              const loading = yield _this3.loadingController.create({
                message: 'Please wait'
              });
              yield loading.present();

              try {
                const token = yield _this3.storage.get('access_token');
                const config = {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`
                  }
                };
                const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST}/travels/${transaction_id}`;
                const form = {
                  transaction_id: transaction_id
                };
                const response = yield axios__WEBPACK_IMPORTED_MODULE_4___default().delete(URL, {
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`
                  }
                });
                yield _this3.storage.set('data', response.data.data);
                loading.dismiss();
                const alert = yield _this3.alertController.create({
                  header: 'Deleted',
                  message: response.data.message,
                  buttons: ['OK']
                });
                yield alert.present();

                _this3.ionViewDidEnter();
              } catch (error) {
                loading.dismiss();
                const alert = yield _this3.alertController.create({
                  header: 'Error',
                  message: 'Please contact system Administrator',
                  buttons: ['OK']
                });
                yield alert.present();
              }
            });

            return function handler() {
              return _ref.apply(this, arguments);
            };
          }()
        }]
      });
      yield alert.present();
    })();
  }

};

TranslistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}];

TranslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-translist',
  template: _raw_loader_translist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_translist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], TranslistPage);


/***/ }),

/***/ 3715:
/*!***********************************************!*\
  !*** ./src/app/translist/translist.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidHJhbnNsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZCAuY2VudGVyZWQtcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMjUlXG4gIH0iXX0= */");

/***/ }),

/***/ 7753:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/translist/translist.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"\">\n      <p class=\"centered-p\">Travel record list</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/vinfo\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\"\n(ionScrollEnd)=\"logScrollEnd()\">\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button [routerLink]=\"['/trans',vehicle_id]\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-list>\n  <ion-item-sliding  *ngFor=\"let transaction of transactions\">\n    <ion-item>\n      <ion-label [routerLink]=\"['/transinfo', vehicle_id,transaction.id]\">[Fr]{{transaction.address_start}} - [To]{{transaction.address_end}}</ion-label>\n       <!-- <span item-end>{{(transaction.odometer_end  - transaction.odometer_start).toLocaleString()}} kms</span> -->\n       <span item-end>{{(transaction.odometer_end  - transaction.odometer_start).toLocaleString()}} kms</span>\n    </ion-item>\n    <ion-item-options side=\"end\">\n      <ion-item-option (click)=\"delete(transaction.id)\">Delete</ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n  <ion-item>\n    <ion-label></ion-label>\n     <span item-end>Total: {{vehicle?.last_odometer.toLocaleString()}} kms</span>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_translist_translist_module_ts.js.map