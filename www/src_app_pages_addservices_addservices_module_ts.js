(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_addservices_addservices_module_ts"],{

/***/ 7234:
/*!*****************************************************************!*\
  !*** ./src/app/pages/addservices/addservices-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicesPageRoutingModule": () => (/* binding */ AddservicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _addservices_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservices.page */ 3102);




const routes = [
    {
        path: '',
        component: _addservices_page__WEBPACK_IMPORTED_MODULE_0__.AddservicesPage
    }
];
let AddservicesPageRoutingModule = class AddservicesPageRoutingModule {
};
AddservicesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddservicesPageRoutingModule);



/***/ }),

/***/ 5949:
/*!*********************************************************!*\
  !*** ./src/app/pages/addservices/addservices.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicesPageModule": () => (/* binding */ AddservicesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _addservices_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservices-routing.module */ 7234);
/* harmony import */ var _addservices_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addservices.page */ 3102);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 2880);








let AddservicesPageModule = class AddservicesPageModule {
};
AddservicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _addservices_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddservicesPageRoutingModule
        ],
        providers: [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__.ImagePicker,],
        declarations: [_addservices_page__WEBPACK_IMPORTED_MODULE_1__.AddservicesPage]
    })
], AddservicesPageModule);



/***/ }),

/***/ 3102:
/*!*******************************************************!*\
  !*** ./src/app/pages/addservices/addservices.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicesPage": () => (/* binding */ AddservicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_addservices_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addservices.page.html */ 3919);
/* harmony import */ var _addservices_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addservices.page.scss */ 9085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);





let AddservicesPage = class AddservicesPage {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.initForm();
    }
    ngOnInit() {
        console.log('test');
    }
    initForm() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            service_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
            service_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(['Water', 'Oil'], { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
            date_service: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(new Date(), { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
            service_providers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl([], { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
            service_notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
            service_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required] }),
        });
    }
    submitForm() {
        console.log('submitted');
        console.log(this.form.value);
    }
};
AddservicesPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
AddservicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-addservices',
        template: _raw_loader_addservices_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addservices_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddservicesPage);



/***/ }),

/***/ 9085:
/*!*********************************************************!*\
  !*** ./src/app/pages/addservices/addservices.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".md .centered-p {\n  text-align: center;\n  margin-left: -25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHNlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSiIsImZpbGUiOiJhZGRzZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQgLmNlbnRlcmVkLXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLTI1JVxuICB9Il19 */");

/***/ }),

/***/ 3919:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/addservices/addservices.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"\">\n      <p class=\"centered-p\">Service Info</p>\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/slist\" name=\"arrow-back-outline\"></ion-back-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header> \n\n\n<ion-content>\n  <!-- <form [formGroup]=\"form\">\n\n<ion-item>\n  <ion-input placeholder=\"brand name\" type=\"text\"></ion-input>\n</ion-item>\n\n\n<ion-item>\n  <ion-label position=\"floating\">Plate Number</ion-label>\n  <ion-input ></ion-input>\n</ion-item>\n\n\n<ion-item>\n<p>\n  <ion-label>Vehicle Type</ion-label>\n</p>\n<ion-select value=\"4\" slot=\"end\" >\n  <ion-select-option value=\"01\">two wheels</ion-select-option>\n  <ion-select-option value=\"02\">four wheels</ion-select-option>\n  <ion-select-option value=\"03\">three wheels</ion-select-option>\n  \n </ion-select>\n</ion-item>\n\n\n\n<ion-item >\n  <ion-label >Vehicle Year</ion-label>\n  <ion-datetime slot=\"end\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\"></ion-datetime>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Chasis No.</ion-label>\n  <ion-input ></ion-input>\n</ion-item>\n\n\n\n<ion-item>\n \n  <p>\n    <ion-label >Coding Schedule</ion-label>\n  </p>\n  <ion-select value=\"4\" slot=\"end\" >\n    <ion-select-option value=\"01\">monday</ion-select-option>\n    <ion-select-option value=\"02\">tuesday</ion-select-option>\n    <ion-select-option value=\"03\">wednesday</ion-select-option>\n    <ion-select-option value=\"04\">thursday</ion-select-option>\n    <ion-select-option value=\"04\">friday</ion-select-option>\n    <ion-select-option value=\"04\">saturday</ion-select-option>\n    <ion-select-option value=\"04\">sunday</ion-select-option>\n   </ion-select>\n  </ion-item>\n\n \n\n  <ion-item>\n    <ion-label>Notes:</ion-label>\n    <ion-textarea rows=\"6\" cols=\"20\" placeholder=\"Enter any notes here...\" ></ion-textarea>\n  </ion-item>\n\n  <div >\n    <p class=\"sukat\">Upload image of receipt/warranty</p>\n    <ion-button color=\"warning\"><ion-label color=\"light\">Pick File</ion-label></ion-button>\n    <div>\n      {{returnpath}}\n    </div>\n  </div>\n\n</form> -->\n\n  <ion-list>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"submitForm()\" novalidate>\n\n      <!-- <ion-item>\n      <ion-label position=\"floating\">service name</ion-label>\n      <ion-input formControlName=\"service_name\" type=\"text\" required></ion-input>\n    </ion-item> -->\n\n      <!-- <ion-item>\n      <ion-label>services</ion-label>\n      <ion-select multiple=\"true\" value=\"'oil_change', 'tune-up', 'fluid_check', 'engine', 'air filter', 'tire_rotation', 'battery'\" formControlName=\"service_name\"> \n        <ion-select-option value=\"oil_change\">oil change</ion-select-option>\n        <ion-select-option value=\"tune-up\">tune-up</ion-select-option>\n        <ion-select-option value=\"'fluid_check\">fluid check</ion-select-option>\n        <ion-select-option value=\"engine\">engine</ion-select-option>\n        <ion-select-option value=\"air filter\">air filter</ion-select-option>\n        <ion-select-option value=\"tire_rotation\">tire rotation</ion-select-option>\n        <ion-select-option value=\"battery'\">battery</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n      <ion-item>\n        <ion-label position=\"floating\">Service Name</ion-label>\n        <ion-input formControlName=\"service_name\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Service Type</ion-label>\n        <ion-select multiple formControlName=\"service_type\">\n          <ion-select-option *ngFor =\"let service of services\" value=\"{{service}}\">{{service}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Date of Service</ion-label>\n        <ion-datetime formControlName=\"date_service\" displayFormat=\"DD.MM.YYYY\" presentation=\"date\" [(ngModel)]=\"date\">\n        </ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Service Provider</ion-label>\n        <ion-select formControlName=\"service_providers\">\n          <ion-select-option value=\"yokohama\">yokohama</ion-select-option>\n          <ion-select-option value=\"mitsubishi\">mitsubishi</ion-select-option>\n          <ion-select-option value=\"autokid\">autokid</ion-select-option>\n          <ion-select-option value=\"autofix\">autofix</ion-select-option>\n          <ion-select-option value=\"fixauto\">fixauto</ion-select-option>\n        </ion-select>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Cost</ion-label>\n        <ion-input placeholder=\"₱0.00\" inputmode=\"decimal\" [(ngModel)]=\"entry\" name=\"amount\"\n          formControlName=\"service_cost\"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Notes</ion-label>\n        <ion-textarea rows=\"10\" cols=\"20\" placeholder=\"Enter any notes here...\" formControlName=\"service_notes\">\n        </ion-textarea>\n      </ion-item>\n\n\n      <ion-button type=\"submit\" color=\"warning\" expand=\"block\">\n        <ion-label color=\"light\">Submit</ion-label>\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </form>\n\n\n\n\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_addservices_addservices_module_ts.js.map