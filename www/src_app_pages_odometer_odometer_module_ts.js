(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_odometer_odometer_module_ts"],{

/***/ 3053:
/*!***********************************************************!*\
  !*** ./src/app/pages/odometer/odometer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdometerPageRoutingModule": () => (/* binding */ OdometerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _odometer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odometer.page */ 8914);




const routes = [
    {
        path: '',
        component: _odometer_page__WEBPACK_IMPORTED_MODULE_0__.OdometerPage
    }
];
let OdometerPageRoutingModule = class OdometerPageRoutingModule {
};
OdometerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OdometerPageRoutingModule);



/***/ }),

/***/ 5464:
/*!***************************************************!*\
  !*** ./src/app/pages/odometer/odometer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdometerPageModule": () => (/* binding */ OdometerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _odometer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./odometer-routing.module */ 3053);
/* harmony import */ var _odometer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odometer.page */ 8914);







let OdometerPageModule = class OdometerPageModule {
};
OdometerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _odometer_routing_module__WEBPACK_IMPORTED_MODULE_0__.OdometerPageRoutingModule
        ],
        declarations: [_odometer_page__WEBPACK_IMPORTED_MODULE_1__.OdometerPage]
    })
], OdometerPageModule);



/***/ }),

/***/ 8914:
/*!*************************************************!*\
  !*** ./src/app/pages/odometer/odometer.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdometerPage": () => (/* binding */ OdometerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_odometer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./odometer.page.html */ 311);
/* harmony import */ var _odometer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./odometer.page.scss */ 8753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let OdometerPage = class OdometerPage {
    constructor() { }
    ngOnInit() {
    }
};
OdometerPage.ctorParameters = () => [];
OdometerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-odometer',
        template: _raw_loader_odometer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_odometer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OdometerPage);



/***/ }),

/***/ 8753:
/*!***************************************************!*\
  !*** ./src/app/pages/odometer/odometer.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZG9tZXRlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 311:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/odometer/odometer.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color =\"primary\">\n    <ion-title class=\"ion-text-center\">\n Odometer\n    </ion-title>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button menuId=\"custom-menu\"></ion-menu-button>\n  </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"presentAlert()\">\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\n      </ion-button>  \n    </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n<div></div>\n\n\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_odometer_odometer_module_ts.js.map