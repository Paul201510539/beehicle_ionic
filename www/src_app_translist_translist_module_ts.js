(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_translist_translist_module_ts"],{

/***/ 1242:
/*!***************************************************!*\
  !*** ./src/app/modals/travel/travel.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelComponent": () => (/* binding */ TravelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_travel_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./travel.component.html */ 4685);
/* harmony import */ var _travel_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel.component.scss */ 3640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9122);





let TravelComponent = class TravelComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
TravelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
TravelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-travel',
        template: _raw_loader_travel_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_travel_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TravelComponent);



/***/ }),

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
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_translist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./translist.page.html */ 7753);
/* harmony import */ var _translist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translist.page.scss */ 3715);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modals_travel_travel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/travel/travel.component */ 1242);











let TranslistPage = class TranslistPage {
  constructor(router, route, loadingController, alertController, storage, navCtrl, modalController) {
    this.router = router;
    this.route = route;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.storage = storage;
    this.navCtrl = navCtrl;
    this.modalController = modalController;
    this.vehicle_id = this.route.snapshot.paramMap.get('vehicle_id');
  }

  ngOnInit() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = yield _this.storage.get("data");
      _this.transactions = data.vehicles.find(x => x.id == _this.vehicle_id).travels.sort((a, b) => b.id - a.id);
    })();
  }

  ionViewDidEnter() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = yield _this2.storage.get("data");
      _this2.transactions = data.vehicles.find(x => x.id == _this2.vehicle_id).travels.sort((a, b) => b.id - a.id);
      _this2.vehicle = data.vehicles.find(x => x.id == _this2.vehicle_id);
    })();
  }

  delete(transaction_id) {
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
            var _ref = (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

  presentModal() {
    this.showModal("Ready to use modal");
  }

  showModal(msg) {
    var _this4 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this4.modalController.create({
        component: _modals_travel_travel_component__WEBPACK_IMPORTED_MODULE_5__.TravelComponent,
        componentProps: {
          message: msg
        },
        cssClass: 'alert-modal'
      });
      yield modal.present();
    })();
  }

};

TranslistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}];

TranslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-translist',
  template: _raw_loader_translist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_translist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], TranslistPage);


/***/ }),

/***/ 3640:
/*!*****************************************************!*\
  !*** ./src/app/modals/travel/travel.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-top: 30%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.container ion-icon {\n  padding: 10px 10px 0 0;\n  float: right;\n}\n.sub-container-upper {\n  font-size: 27px;\n  text-align: center;\n  border-radius: 20px 20px 0 0;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 5px 0 10px 0;\n  background-color: #ffffff;\n}\n.sub-container-upper img {\n  margin-top: 30px;\n  width: 90px;\n  height: 90px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.sub-container-lower {\n  color: #1C3C63;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  background-color: #FFC409;\n}\n.sub-container-lower .one {\n  font-size: 19px;\n  margin-bottom: 20px;\n}\n.sub-container-lower .two {\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-align: justify;\n}\n.sub-container-lower .two p {\n  color: #1C3C63;\n  text-indent: 35px;\n}\n.sub-container-footer {\n  border-radius: 0 0 20px 20px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  background-color: #FFC409;\n}\nion-label {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUVaO0FBR0E7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJ0cmF2ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgXHJcbiAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGlvbi1pY29ue1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3ViLWNvbnRhaW5lci11cHBlcntcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4IDAgMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxufVxyXG5cclxuLnN1Yi1jb250YWluZXItbG93ZXJ7IFxyXG4gICAgY29sb3I6ICMxQzNDNjM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM0MDk7XHJcbiAgICAub25le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnR3b3tcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMUMzQzYzO1xyXG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMzVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWItY29udGFpbmVyLWZvb3RlcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzQwOTtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoidHJhbnNsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZCAuY2VudGVyZWQtcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1JVxyXG4gIH0iXX0= */");

/***/ }),

/***/ 4685:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/travel/travel.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <ion-icon name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\r\n  <div class=\"sub-container-upper\"><img src=\"https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=2000\" alt=\"logo\">\r\n    <span>TRAVEL WORK</span>\r\n  </div>\r\n  <div class=\"sub-container-lower\">\r\n    <ion-label class=\"one\">About us</ion-label>\r\n    <ion-label class=\"two\"><p>PMS(Preventive Maintenance Schedule) system detect when the vehicle needs to maintenance for first 1000km, 5000km and so on. After submitting the travel record it will automatically detect the PMS, also the vehicle owners can edit/update the record after completing the maintenance that needs for the vehicle.</p></ion-label>\r\n  </div>\r\n  <div class=\"sub-container-footer\">\r\n    <ion-icon name=\"logo-facebook\"></ion-icon>\r\n    <ion-icon name=\"logo-twitter\"></ion-icon>\r\n    <ion-icon name=\"logo-instagram\"></ion-icon>\r\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\r\n    <ion-icon name=\"logo-youtube\"></ion-icon>\r\n  </div>\r\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"\">\r\n      <p class=\"centered-p\">Travel record</p>\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/vinfo\" name=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"presentModal()\">\r\n        <ion-icon slot=\"icon-only\" name=\"information-circle\" style=\"padding-top: 10px; color: #f6e8b1;\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\"\r\n(ionScrollEnd)=\"logScrollEnd()\">\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button [routerLink]=\"['/trans',vehicle_id]\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-list>\r\n  <ion-item-sliding  *ngFor=\"let transaction of transactions\">\r\n    <ion-item>\r\n      <ion-label [routerLink]=\"['/transinfo', vehicle_id,transaction.id]\">[Fr]{{transaction.address_start}} - [To]{{transaction.address_end}}</ion-label>\r\n       <!-- <span item-end>{{(transaction.odometer_end  - transaction.odometer_start).toLocaleString()}} kms</span> -->\r\n       <span item-end>{{(transaction.odometer_end  - transaction.odometer_start).toLocaleString()}} kms</span>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option (click)=\"delete(transaction.id)\">Delete</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n  <ion-item>\r\n    <ion-label></ion-label>\r\n     <span item-end>Total: {{vehicle?.last_odometer.toLocaleString()}} kms</span>\r\n  </ion-item>\r\n</ion-list>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_translist_translist_module_ts.js.map