(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pmslist_pmslist_module_ts"],{

/***/ 6382:
/*!*********************************************!*\
  !*** ./src/app/modals/pms/pms.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PmsComponent": () => (/* binding */ PmsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pms_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pms.component.html */ 371);
/* harmony import */ var _pms_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pms.component.scss */ 666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9122);





let PmsComponent = class PmsComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
PmsComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
PmsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-pms',
        template: _raw_loader_pms_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pms_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PmsComponent);



/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pmslist_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./pmslist.page.html */ 2169);
/* harmony import */ var _pmslist_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pmslist.page.scss */ 1244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _modals_pms_pms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/pms/pms.component */ 6382);









let PmslistPage = class PmslistPage {
  constructor(router, route, storage, loadingController, alertController, modalController) {
    this.router = router;
    this.route = route;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.modalController = modalController;
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

  presentModal() {
    this.showModal("Ready to use modal");
  }

  showModal(msg) {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this3.modalController.create({
        component: _modals_pms_pms_component__WEBPACK_IMPORTED_MODULE_3__.PmsComponent,
        componentProps: {
          message: msg
        },
        cssClass: 'alert-modal'
      });
      yield modal.present();
    })();
  }

};

PmslistPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

PmslistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-pmslist',
  template: _raw_loader_pmslist_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_pmslist_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], PmslistPage);


/***/ }),

/***/ 666:
/*!***********************************************!*\
  !*** ./src/app/modals/pms/pms.component.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-top: 30%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.container ion-icon {\n  padding: 10px 10px 0 0;\n  float: right;\n}\n.sub-container-upper {\n  font-size: 27px;\n  text-align: center;\n  border-radius: 20px 20px 0 0;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 5px 0 10px 0;\n  background-color: #ffffff;\n}\n.sub-container-upper img {\n  margin-top: 30px;\n  width: 90px;\n  height: 90px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.sub-container-lower {\n  color: #1C3C63;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  background-color: #FFC409;\n}\n.sub-container-lower .one {\n  font-size: 19px;\n  margin-bottom: 20px;\n}\n.sub-container-lower .two {\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-align: justify;\n}\n.sub-container-lower .two p {\n  color: #1C3C63;\n  text-indent: 35px;\n}\n.sub-container-footer {\n  border-radius: 0 0 20px 20px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  background-color: #FFC409;\n}\nion-label {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUNSO0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUVaO0FBR0E7RUFDSSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7QUFBSiIsImZpbGUiOiJwbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIFxuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgaW9uLWljb257XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDA7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG5cbi5zdWItY29udGFpbmVyLXVwcGVye1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNXB4IDAgMTBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIH1cbn1cblxuLnN1Yi1jb250YWluZXItbG93ZXJ7IFxuICAgIGNvbG9yOiAjMUMzQzYzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM0MDk7XG4gICAgLm9uZXtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAudHdve1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogIzFDM0M2MztcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAzNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc3ViLWNvbnRhaW5lci1mb290ZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzQwOTtcbn1cblxuaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBtc2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InBtc2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kIC5jZW50ZXJlZC1wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTI1JVxufSJdfQ== */");

/***/ }),

/***/ 371:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/pms/pms.component.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-icon name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n  <div class=\"sub-container-upper\"><img src=\"https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=2000\" alt=\"logo\">\n    <span>PMS WORK</span>\n  </div>\n  <div class=\"sub-container-lower\">\n    <ion-label class=\"one\"></ion-label>\n    <ion-label class=\"two\"><p>Our PMS(Preventive Maintenance Schedule) system detect when the vehicle needs to maintence for first 1000km, 5000km and so on. After you record your travel it will automatically detect the PMS that you need and you can edit/update when you complete the maintenance that you need for the vehicle.</p></ion-label>\n  </div>\n  <div class=\"sub-container-footer\">\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n    <ion-icon name=\"logo-instagram\"></ion-icon>\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\n    <ion-icon name=\"logo-youtube\"></ion-icon>\n  </div>\n</div>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"\">\n      <p class=\"centered-p\">PMS List</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/slist\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      \n      <ion-button fill=\"clear\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"information-circle\" style=\"padding-top: 10px; color: #f6e8b1;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of pms_list\">\n      <ion-icon slot=\"end\" name=\"{{getIcon(item.done, item)}}\"></ion-icon>\n      <ion-label (click) = \"goTo(item.alert,vehicle_id,item.pms_kms,item)\">PMS ({{ item.pms_kms.toString() }}KM)</ion-label>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-icon slot=\"end\" name=\"warning\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'1000']\">PMS (1,000KM)</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'5000']\">PMS (5,000KM)</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon slot=\"end\" name=\"alert-circle-sharp\"></ion-icon>\n      <ion-label [routerLink]=\"['/pms/',vehicle_id,'10000']\">PMS (10,000KM)</ion-label>\n    </ion-item> -->\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pmslist_pmslist_module_ts.js.map