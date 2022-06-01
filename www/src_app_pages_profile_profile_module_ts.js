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
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
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
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = _this.router.url.split('/');

      const sData = yield _this.storage.get('data');
      _this.user = sData;
      console.log('hey from ngOnInit');
      if (data[1] == 'home') _this.back = true;else _this.back = false;
    })();
  }

  ionOnViewWillEnter() {
    console.log('hey from ionOnViewWillEnter');
  }

  IonViewDidLeave() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content * {\n  font-family: Arial, Helvetica, sans-serif;\n}\nion-content .main-header {\n  height: 28vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-primary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  margin-left: -4.5vh;\n  margin-top: -5px;\n}\nion-content .main-header div {\n  transform: translateY(2vh);\n}\nion-content .main-header div ion-avatar {\n  width: 15vh;\n  height: 15vh;\n  background: var(--ion-color-white);\n  margin-bottom: 5px;\n  margin-right: 10px;\n  border: 7px solid var(--ion-color-primary);\n}\nion-content ion-row {\n  margin-top: -60px;\n}\nion-content ion-row ion-col ion-item {\n  width: 94%;\n  margin: auto;\n  border: 1px solid var(--ion-color-light);\n  box-shadow: 1px var(--ion-color-dark);\n  border-radius: 5px;\n}\nion-content ion-row ion-col ion-item ion-label {\n  font-size: 1.8rem;\n  font-weight: bold;\n}\nion-content ion-row ion-col ion-item ion-label p {\n  font-size: 0.7rem;\n}\nion-content ion-row ion-col ion-item ion-icon {\n  font-size: 3rem;\n}\nion-content ion-list ion-item {\n  margin-top: 1vh;\n}\nion-content ion-list ion-item ion-label {\n  font-size: 0.9rem;\n}\nion-content ion-list ion-item ion-label p {\n  margin-top: 5px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUNBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSw4RkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSwwQkFBQTtBQUNaO0FBQVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBRWhCO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBRVk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtBQUFoQjtBQUNnQjtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFDcEI7QUFBb0I7RUFDSSxpQkFBQTtBQUV4QjtBQUNnQjtFQUNJLGVBQUE7QUFDcEI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksaUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUZwQiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAqIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjh2aDtcbiAgICAgICAgd2lkdGg6IDEyMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00LjV2aDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgydmgpO1xuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1dmg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC02MHB4O1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button *ngIf=\"!back\"></ion-menu-button>\n      <ion-back-button *ngIf=\"back\" defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" routerLink=\"/userupdate\">EDIT</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-grid class=\"main-header\">\n    <div align=\"center\">\n      <ion-avatar>\n        <img src=\"assets/imgs/pic1.jpg\" />\n        <ion-label><strong><h1>{{user?.name}}</h1></strong></ion-label>\n      </ion-avatar>\n    </div>\n  </ion-grid>\n\n\n\n  <ion-list lines=\"full\">\n    <ion-item>\n      <ion-label>\n        <ion-text>Name</ion-text>\n        <p>\n          <ion-text color=\"dark\">{{user?.name }}</ion-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <!-- <ion-item>\n      <ion-label>\n        <ion-text>Vehicle</ion-text>\n        <p>\n          <ion-text color=\"dark\">Sample Vehicle Unit</ion-text>\n        </p>\n      </ion-label>\n    </ion-item> -->\n    <ion-item>\n      <ion-label>\n        <ion-text>Phone</ion-text>\n        <p>\n          <ion-text color=\"dark\">{{user?.phone_number}}</ion-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Email</ion-text>\n        <p>\n          <ion-text color=\"dark\">{{user?.email}}</ion-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Age</ion-text>\n        <p>\n          <ion-text color=\"dark\">{{user?.age}}</ion-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        <ion-text>Address</ion-text>\n        <p>\n          <ion-text color=\"dark\">{{user?.address}}</ion-text>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map