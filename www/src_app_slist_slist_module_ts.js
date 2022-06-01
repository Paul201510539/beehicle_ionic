(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_slist_slist_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_slist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./slist.page.html */ 4900);
/* harmony import */ var _slist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slist.page.scss */ 3751);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);








let SlistPage = class SlistPage {
  constructor(route, storage, loadingController) {
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
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

};

SlistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}];

SlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-slist',
  template: _raw_loader_slist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_slist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SlistPage);


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">\n      <p class=\"centered-p\">Other Service List</p>\n    </ion-title>\n\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/vinfo\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\">\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/addservicelist',id]\">\n      <ion-icon name=\"add\"></ion-icon> \n    </ion-fab-button>\n  </ion-fab> \n \n  <ion-list lines=\"none\"> \n    <!-- <ion-item-group >\n\n      <ion-item routerLink=\"/addservices\">\n        <ion-label></ion-label>\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/imgs/pic1.jpg\">\n        </ion-avatar>\n        <ion-label>\n          <h2>click</h2>\n          <h3>for more info</h3>\n\n        </ion-label>\n      </ion-item>\n\n    </ion-item-group> -->\n    \n    <ion-item-sliding [routerLink]=\"['/viewservice', id,service.id,'edit']\" *ngFor=\"let service of services\">\n      <ion-item>\n        <ion-label>{{service.name}}</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <!-- <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>tune-up</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>fluid check</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>Engine</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>air filter</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>tire rotation</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding routerLink=\"/addservices\">\n      <ion-item>\n        <ion-label>battery</ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding> -->\n\n  \n    \n\n\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_slist_slist_module_ts.js.map