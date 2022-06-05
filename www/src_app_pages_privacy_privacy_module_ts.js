(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_privacy_privacy_module_ts"],{

/***/ 7881:
/*!*********************************************************!*\
  !*** ./src/app/pages/privacy/privacy-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageRoutingModule": () => (/* binding */ PrivacyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.page */ 4509);




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPage
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ 2886:
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPageModule": () => (/* binding */ PrivacyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-routing.module */ 7881);
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page */ 4509);







let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPageRoutingModule
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_1__.PrivacyPage]
    })
], PrivacyPageModule);



/***/ }),

/***/ 4509:
/*!***********************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPage": () => (/* binding */ PrivacyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacy.page.html */ 8637);
/* harmony import */ var _privacy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy.page.scss */ 6659);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PrivacyPage = class PrivacyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPage.ctorParameters = () => [];
PrivacyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-privacy',
        template: _raw_loader_privacy_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacy_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacyPage);



/***/ }),

/***/ 6659:
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 8637:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color =\"primary\">\r\n    <ion-title class=\"ion-text-center\">\r\n  Odometer\r\n    </ion-title>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button menuId=\"custom-menu\"></ion-menu-button>\r\n  </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"presentAlert()\">\r\n        <ion-icon slot=\"icon-only\" name=\"ellipsis-vertical-outline\"></ion-icon>\r\n      </ion-button>  \r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_privacy_privacy_module_ts.js.map