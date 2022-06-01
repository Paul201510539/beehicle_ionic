(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pmslist_pmslist_module_ts"],{

/***/ 1777:
/*!***************************************************!*\
  !*** ./src/app/pmslist/pmslist-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmslistPageRoutingModule": () => (/* binding */ PmslistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pmslist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmslist.page */ 5429);




const routes = [
    {
        path: '',
        component: _pmslist_page__WEBPACK_IMPORTED_MODULE_0__.PmslistPage
    }
];
let PmslistPageRoutingModule = class PmslistPageRoutingModule {
};
PmslistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PmslistPageRoutingModule);



/***/ }),

/***/ 6872:
/*!*******************************************!*\
  !*** ./src/app/pmslist/pmslist.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmslistPageModule": () => (/* binding */ PmslistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _pmslist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pmslist-routing.module */ 1777);
/* harmony import */ var _pmslist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pmslist.page */ 5429);







let PmslistPageModule = class PmslistPageModule {
};
PmslistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pmslist_routing_module__WEBPACK_IMPORTED_MODULE_0__.PmslistPageRoutingModule
        ],
        declarations: [_pmslist_page__WEBPACK_IMPORTED_MODULE_1__.PmslistPage]
    })
], PmslistPageModule);



/***/ }),

/***/ 5429:
/*!*****************************************!*\
  !*** ./src/app/pmslist/pmslist.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmslistPage": () => (/* binding */ PmslistPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pmslist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./pmslist.page.html */ 2169);
/* harmony import */ var _pmslist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pmslist.page.scss */ 1244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);








let PmslistPage = class PmslistPage {
  constructor(router, route, storage, loadingController, alertController) {
    this.router = router;
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.pms_list = [];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.vehicle_id = _this.route.snapshot.paramMap.get('vehicle_id');
      const sData = yield _this.storage.get('data');
      _this.pms_list = sData.vehicles.find(x => x.id == _this.vehicle_id).pms_records.filter(x => x.alert == true);
    })();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  getIcon(boolean) {
    return boolean ? 'checkmark-circle' : 'warning';
  }

  goTo(boolean, vehicle_id, pms_kms, item) {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const sData = yield _this2.storage.get('data');
      const pms_data = sData.vehicles.find(x => x.id == _this2.vehicle_id).pms.find(x => x.pms_kms == pms_kms); // const pms_data = sData.vehicles.find(x=>x.id == this.vehicle_id).pms
      // if(!pms_data){
      //   const alert = await this.alertController.create({
      //     header: 'Alert',
      //     message:'Not due for PMS',
      //     buttons: ['OK'] 
      //   })
      //   await alert.present();      
      //   return;
      // }
      // if(item.alert == true && item.done == true){
      //   // const alert = await this.alertController.create({
      //   //   header: 'Information',
      //   //   message:'PMS already finished',
      //   //   buttons: ['OK'] 
      //   // })
      //   // await alert.present();  
      //   this.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);
      //   return;
      // }

      if (pms_data) {
        _this2.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);

        return;
      }

      _this2.router.navigate([`/pms/${vehicle_id}/${pms_kms}`]);
    })();
  }

};

PmslistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}];

PmslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-pmslist',
  template: _raw_loader_pmslist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_pmslist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], PmslistPage);


/***/ }),

/***/ 1244:
/*!*******************************************!*\
  !*** ./src/app/pmslist/pmslist.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBtc2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InBtc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIC5jZW50ZXJlZC1wIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IC0yNSVcbiAgfSJdfQ== */");

/***/ }),

/***/ 2169:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pmslist/pmslist.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"\">\n      <p class=\"centered-p\">PMS List</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/slist\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of pms_list\">\n      <ion-icon slot=\"end\" name=\"{{getIcon(item.done, item)}}\"></ion-icon>\n      <ion-label (click) = \"goTo(item.alert,vehicle_id,item.pms_kms,item)\">PMS ({{ item.pms_kms.toString() }}KM)</ion-label>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-icon slot=\"end\" name=\"warning\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'1000']\">PMS (1,000KM)</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'5000']\">PMS (5,000KM)</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'10000']\">PMS (10,000KM)</ion-label>\n    </ion-item> -->\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pmslist_pmslist_module_ts.js.map