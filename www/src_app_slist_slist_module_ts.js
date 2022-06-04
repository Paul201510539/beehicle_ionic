(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_slist_slist_module_ts"],{

/***/ 2324:
/*!*****************************************************!*\
  !*** ./src/app/modals/service/service.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceComponent": () => (/* binding */ ServiceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_service_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./service.component.html */ 9737);
/* harmony import */ var _service_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service.component.scss */ 7258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9122);





let ServiceComponent = class ServiceComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
ServiceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ServiceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-service',
        template: _raw_loader_service_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_service_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServiceComponent);



/***/ }),

/***/ 6839:
/*!***********************************************!*\
  !*** ./src/app/slist/slist-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlistPageRoutingModule": () => (/* binding */ SlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _slist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slist.page */ 3827);




const routes = [
    {
        path: '',
        component: _slist_page__WEBPACK_IMPORTED_MODULE_0__.SlistPage
    }
];
let SlistPageRoutingModule = class SlistPageRoutingModule {
};
SlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SlistPageRoutingModule);



/***/ }),

/***/ 5789:
/*!***************************************!*\
  !*** ./src/app/slist/slist.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlistPageModule": () => (/* binding */ SlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _slist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slist-routing.module */ 6839);
/* harmony import */ var _slist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slist.page */ 3827);







let SlistPageModule = class SlistPageModule {
};
SlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _slist_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlistPageRoutingModule
        ],
        declarations: [_slist_page__WEBPACK_IMPORTED_MODULE_1__.SlistPage]
    })
], SlistPageModule);



/***/ }),

/***/ 3827:
/*!*************************************!*\
  !*** ./src/app/slist/slist.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlistPage": () => (/* binding */ SlistPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_slist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./slist.page.html */ 4900);
/* harmony import */ var _slist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slist.page.scss */ 3751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _modals_service_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/service/service.component */ 2324);









let SlistPage = class SlistPage {
  constructor(route, storage, loadingController, modalController) {
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
    this.modalController = modalController;
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const sData = yield _this.storage.get("data");
      _this.services = sData.vehicles.find(x => x.id == _this.id).service_summary;
      loading.dismiss();
    })();
  }

  ionViewDidEnter() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this2.storage.get("data");
      _this2.services = sData.vehicles.find(x => x.id == _this2.id).service_summary;
    })();
  }

  presentModal() {
    this.showModal("Ready to use modal");
  }

  showModal(msg) {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
        component: _modals_service_service_component__WEBPACK_IMPORTED_MODULE_3__.ServiceComponent,
        componentProps: {
          message: msg
        },
        cssClass: 'alert-modal'
      });
      yield modal.present();
    })();
  }

};

SlistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

SlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-slist',
  template: _raw_loader_slist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_slist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SlistPage);


/***/ }),

/***/ 7258:
/*!*******************************************************!*\
  !*** ./src/app/modals/service/service.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-top: 30%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.container ion-icon {\n  padding: 10px 10px 0 0;\n  float: right;\n}\n.sub-container-upper {\n  font-size: 27px;\n  text-align: center;\n  border-radius: 20px 20px 0 0;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 5px 0 10px 0;\n  background-color: #ffffff;\n}\n.sub-container-upper img {\n  margin-top: 30px;\n  width: 90px;\n  height: 90px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.sub-container-lower {\n  color: #1C3C63;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  background-color: #FFC409;\n}\n.sub-container-lower .one {\n  font-size: 19px;\n  margin-bottom: 20px;\n}\n.sub-container-lower .two {\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-align: justify;\n}\n.sub-container-lower .two p {\n  color: #1C3C63;\n  text-indent: 35px;\n}\n.sub-container-footer {\n  border-radius: 0 0 20px 20px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  background-color: #FFC409;\n}\nion-label {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBR0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFDSTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUdBO0VBQ0ksNEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUFKO0FBR0E7RUFDSSxjQUFBO0FBQUoiLCJmaWxlIjoic2VydmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgXG4gICAgbWFyZ2luLXRvcDogMzAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cblxuLnN1Yi1jb250YWluZXItdXBwZXJ7XG4gICAgZm9udC1zaXplOiAyN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMCAxMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBpbWcge1xuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgfVxufVxuXG4uc3ViLWNvbnRhaW5lci1sb3dlcnsgXG4gICAgY29sb3I6ICMxQzNDNjM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzQwOTtcbiAgICAub25le1xuICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC50d297XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgcHtcbiAgICAgICAgICAgIGNvbG9yOiAjMUMzQzYzO1xuICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDM1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdWItY29udGFpbmVyLWZvb3RlcntcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDNDA5O1xufVxuXG5pb24tbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ 3751:
/*!***************************************!*\
  !*** ./src/app/slist/slist.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJzbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQgLmNlbnRlcmVkLXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTI1JVxuICB9Il19 */");

/***/ }),

/***/ 9737:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/service/service.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-icon name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n  <div class=\"sub-container-upper\"><img src=\"https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=2000\" alt=\"logo\">\n    <span> OTHER SERVICE WORK</span>\n  </div>\n  <div class=\"sub-container-lower\">\n    <ion-label class=\"one\">About us</ion-label>\n    <ion-label class=\"two\"><p>The service work(Other services) \n\n      Provides other services that needs to maintain for the vehicle that are not included on the PMS(Preventive Maintenance Schedule) It is a section of the Beehicle app where the user may record and track the recent car services.</p></ion-label>\n  </div>\n  <div class=\"sub-container-footer\">\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n    <ion-icon name=\"logo-instagram\"></ion-icon>\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\n    <ion-icon name=\"logo-youtube\"></ion-icon>\n  </div>\n</div>");

/***/ }),

/***/ 4900:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slist/slist.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">\n      <p class=\"centered-p\">Other Service</p>\n    </ion-title>\n\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/vinfo\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      \n      <ion-button fill=\"clear\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"information-circle\" style=\"padding-top: 10px; color: #f6e8b1;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\">\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/addservicelist',id]\">\n      <ion-icon name=\"add\"></ion-icon> \n    </ion-fab-button>\n  </ion-fab> \n \n  <ion-list lines=\"none\"> \n    <!-- <ion-item-group >\n\n      <ion-item routerLink=\"/addservices\">\n        <ion-label></ion-label>\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/imgs/pic1.jpg\">\n        </ion-avatar>\n        <ion-label>\n          <h2>click</h2>\n          <h3>for more info</h3>\n\n        </ion-label>\n      </ion-item>\n\n    </ion-item-group> -->\n    \n    <ion-item-sliding [routerLink]=\"['/viewservice', id,service.id,'edit']\" *ngFor=\"let service of services\">\n      <ion-item>\n        <ion-label>{{service.name}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <!-- <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>tune-up</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>fluid check</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>Engine</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>air filter</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>tire rotation</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>battery</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding> -->\n\n  \n    \n\n\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_slist_slist_module_ts.js.map