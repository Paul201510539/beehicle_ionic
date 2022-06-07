(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_vehicleinfo_vehicleinfo_module_ts"],{

/***/ 4631:
/*!*****************************************************************!*\
  !*** ./src/app/pages/vehicleinfo/vehicleinfo-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleinfoPageRoutingModule": () => (/* binding */ VehicleinfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _vehicleinfo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicleinfo.page */ 7161);




const routes = [
    {
        path: '',
        component: _vehicleinfo_page__WEBPACK_IMPORTED_MODULE_0__.VehicleinfoPage
    }
];
let VehicleinfoPageRoutingModule = class VehicleinfoPageRoutingModule {
};
VehicleinfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VehicleinfoPageRoutingModule);



/***/ }),

/***/ 2453:
/*!*********************************************************!*\
  !*** ./src/app/pages/vehicleinfo/vehicleinfo.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleinfoPageModule": () => (/* binding */ VehicleinfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _vehicleinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicleinfo-routing.module */ 4631);
/* harmony import */ var _vehicleinfo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicleinfo.page */ 7161);







let VehicleinfoPageModule = class VehicleinfoPageModule {
};
VehicleinfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vehicleinfo_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehicleinfoPageRoutingModule
        ],
        declarations: [_vehicleinfo_page__WEBPACK_IMPORTED_MODULE_1__.VehicleinfoPage]
    })
], VehicleinfoPageModule);



/***/ }),

/***/ 7161:
/*!*******************************************************!*\
  !*** ./src/app/pages/vehicleinfo/vehicleinfo.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleinfoPage": () => (/* binding */ VehicleinfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_vehicleinfo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vehicleinfo.page.html */ 4099);
/* harmony import */ var _vehicleinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicleinfo.page.scss */ 4250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let VehicleinfoPage = class VehicleinfoPage {
    constructor() { }
    ngOnInit() {
    }
};
VehicleinfoPage.ctorParameters = () => [];
VehicleinfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vehicleinfo',
        template: _raw_loader_vehicleinfo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vehicleinfo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VehicleinfoPage);



/***/ }),

/***/ 4250:
/*!*********************************************************!*\
  !*** ./src/app/pages/vehicleinfo/vehicleinfo.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWhpY2xlaW5mby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 4099:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vehicleinfo/vehicleinfo.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar color =\"primary\">\n    <ion-title class=\"ion-text-center\">\n  Vehicle Info\n    </ion-title>\n  <ion-buttons slot=\"start\"></ion-buttons>\n    <ion-menu-button menuId=\"custom-menu\"></ion-menu-button>\n  </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"presentAlert()\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p>hgdhdhdhdhdhh</p>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vehicleinfo_vehicleinfo_module_ts.js.map