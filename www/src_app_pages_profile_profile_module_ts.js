(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9291);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ 2777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);







let ProfilePage = class ProfilePage {
  constructor(router, storage) {
    this.router = router;
    this.storage = storage;
    console.log('hey from constructor'); // this.ngOnInit()
  }

  ngOnInit() {
    const data = this.router.url.split('/');
    this.loadData();
    console.log('hey from ngOnInit');
    if (data[1] == 'home') this.back = true;else this.back = false;
  }

  loadData() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = _this.router.url.split('/');

      const sData = yield _this.storage.get('data');
      _this.user = sData;
    })();
  }

  ionOnViewWillEnter() {
    this.loadData();
    console.log('hey from ionOnViewWillEnter');
  }

  IonViewDidLeave() {
    this.loadData();
    console.log('hey from IonViewDidLeave');
  }

};

ProfilePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
}];

ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-profile',
  template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], ProfilePage);


/***/ }),

/***/ 2777:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content * {\n  font-family: Arial, Helvetica, sans-serif;\n}\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\nion-content .main-header div {\n  transform: translateY(2vh);\n}\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-white);\n  margin-bottom: 5px;\n  margin-right: 10px;\n  border: 7px solid var(--ion-color-primary);\n}\nion-content ion-row {\n  margin-top: -60px;\n}\nion-content ion-row ion-col ion-item {\n  width: 94%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\nion-content ion-list ion-item ion-label {\n  font-size: 0.9rem;\n}\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUNBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw4RkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSwwQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRWhCO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBRVk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFBb0I7RUFDSSxpQkFBQTtBQUV4QjtBQUNnQjtFQUNJLGVBQUE7QUFDcEI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksaUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUZwQiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgICoge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLm1haW4taGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI4dmg7XHJcbiAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMCUsIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSAxMDAlKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00LjV2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpO1xyXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXZoO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 9291:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button *ngIf=\"!back\"></ion-menu-button>\r\n      <ion-back-button *ngIf=\"back\" defaultHref=\"/home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" routerLink=\"/userupdate\">EDIT</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n  <ion-grid class=\"main-header\">\r\n    <div align=\"center\">\r\n      <ion-avatar>\r\n        <img src=\"assets/imgs/pic1.jpg\" />\r\n        <ion-label><strong><h1>{{user?.name}}</h1></strong></ion-label>\r\n      </ion-avatar>\r\n    </div>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <ion-list lines=\"full\">\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-text>Name</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">{{user?.name }}</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item>\r\n      <ion-label>\r\n        <ion-text>Vehicle</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">Sample Vehicle Unit</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item> -->\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-text>Phone</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">{{user?.phone_number}}</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-text>Email</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">{{user?.email}}</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-text>Age</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">{{user?.age}}</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-text>Address</ion-text>\r\n        <p>\r\n          <ion-text color=\"dark\">{{user?.address}}</ion-text>\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map