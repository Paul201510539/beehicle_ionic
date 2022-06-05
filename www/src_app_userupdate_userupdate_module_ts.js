(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_userupdate_userupdate_module_ts"],{

/***/ 2195:
/*!*********************************************************!*\
  !*** ./src/app/userupdate/userupdate-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserupdatePageRoutingModule": () => (/* binding */ UserupdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _userupdate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userupdate.page */ 1064);




const routes = [
    {
        path: '',
        component: _userupdate_page__WEBPACK_IMPORTED_MODULE_0__.UserupdatePage
    }
];
let UserupdatePageRoutingModule = class UserupdatePageRoutingModule {
};
UserupdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserupdatePageRoutingModule);



/***/ }),

/***/ 9897:
/*!*************************************************!*\
  !*** ./src/app/userupdate/userupdate.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserupdatePageModule": () => (/* binding */ UserupdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _userupdate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userupdate-routing.module */ 2195);
/* harmony import */ var _userupdate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userupdate.page */ 1064);







let UserupdatePageModule = class UserupdatePageModule {
};
UserupdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _userupdate_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserupdatePageRoutingModule
        ],
        declarations: [_userupdate_page__WEBPACK_IMPORTED_MODULE_1__.UserupdatePage]
    })
], UserupdatePageModule);



/***/ }),

/***/ 1064:
/*!***********************************************!*\
  !*** ./src/app/userupdate/userupdate.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserupdatePage": () => (/* binding */ UserupdatePage)
/* harmony export */ });
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_userupdate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./userupdate.page.html */ 1047);
/* harmony import */ var _userupdate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userupdate.page.scss */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/environments/environment */ 2340);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile.service */ 9181);











let UserupdatePage = class UserupdatePage {
  // name: String;
  // phone_number: String;
  // email: String;
  // birthday: Date;
  // address: String;
  constructor(loadingController, alertController, storage, navCtrl, router, globalFooService) {
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.storage = storage;
    this.navCtrl = navCtrl;
    this.router = router;
    this.globalFooService = globalFooService;
    this.user = {
      name: '',
      phone_number: '',
      email: '',
      birthday: new Date().toISOString(),
      address: ''
    };
    this.populate();
  }

  ngOnInit() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.populate();
    })();
  }

  populate() {
    var _this2 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const data = yield _this2.storage.get("data");
      _this2.user = {
        name: data.name,
        phone_number: data.phone_number,
        email: data.email,
        // birthday: '1994-11-26',
        birthday: new Date(data.birthday).toISOString(),
        address: data.address
      };
      console.log(data.name, new Date(data.birthday).toISOString());
    })();
  }

  submit() {
    var _this3 = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this3.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const form = _this3.user;

      try {
        const token = yield _this3.storage.get('access_token');
        const data = yield _this3.storage.get('data');
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
          }
        };
        const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.API_HOST}/profile/${data.id}`;
        console.log(form);
        const response = yield axios__WEBPACK_IMPORTED_MODULE_4___default().put(URL, form, config);
        yield _this3.storage.set('data', response.data.data);
        loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Profile Updated',
          buttons: ['OK']
        });
        yield alert.present();

        _this3.globalFooService.publishSomeData({
          data: response.data.data
        }); // this.navCtrl.back();


        _this3.router.navigate(["home"]);
      } catch (error) {
        loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Error',
          message: 'Please check fields',
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

};

UserupdatePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _services_profile_service__WEBPACK_IMPORTED_MODULE_5__.GlobalFooService
}];

UserupdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-userupdate',
  template: _raw_loader_userupdate_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_userupdate_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], UserupdatePage);


/***/ }),

/***/ 7432:
/*!*************************************************!*\
  !*** ./src/app/userupdate/userupdate.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".profile {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 500px;\n}\n\n.pname {\n  font-size: 2em;\n  width: 200px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJ1cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InVzZXJ1cGRhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwMHB4O1xyXG59XHJcblxyXG4ucG5hbWV7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 1047:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userupdate/userupdate.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"\">\r\n      Update Profile\r\n    </ion-title>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button name=\"arrow-back-outline\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n  <ion-content class=\"profile\">\r\n    <div align=\"center\">\r\n      <ion-avatar>\r\n        <img src=\"assets/imgs/pic1.jpg\" />\r\n        <ion-label><strong>\r\n            <h1>Aaron Paul</h1>\r\n          </strong></ion-label>\r\n      </ion-avatar>\r\n    </div>\r\n    <ion-item>\r\n      <ion-input placeholder=\"Name\" [(ngModel)] = \"user.name\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-input type=\"string\" placeholder=\"Phone Number\" [(ngModel)] = \"user.phone_number\"></ion-input>\r\n    </ion-item>\r\n\r\n\r\n    <ion-item>\r\n      <ion-input type=\"email\" placeholder=\"E-mail\" [(ngModel)] = \"user.email\"></ion-input>\r\n    </ion-item>\r\n<ion-item>Birthday</ion-item>\r\n    <ion-item>\r\n      <ion-datetime [(ngModel)]=\"user.birthday\" presentation=\"date\"></ion-datetime>\r\n      <!-- <ion-datetime ></ion-datetime> -->\r\n      <!-- <ion-input type=\"number\" placeholder=\"B\" [(ngModel)] = \"birthday\"></ion-input> -->\r\n    </ion-item>\r\n    \r\n    <ion-item>\r\n      <ion-input  placeholder=\"Address\" [(ngModel)] = \"user.address\"></ion-input>\r\n    </ion-item>\r\n\r\n    <!-- <ion-item>\r\n      <ion-label>birthday</ion-label>\r\n      <ion-datetime formControlName=\"bday\"\r\n        displayFormat=\"DD.MM.YYYY\"\r\n        presentation=\"date\"\r\n        [(ngModel)]=\"date\"\r\n      ></ion-datetime>\r\n    </ion-item> -->\r\n\r\n    \r\n\r\n    \r\n\r\n    \r\n    \r\n\r\n    <!-- <ion-list>\r\n      <ion-radio-group value=\"gender\">\r\n        <ion-list-header>\r\n          <ion-label>gender</ion-label>\r\n        </ion-list-header>\r\n\r\n        <ion-item>\r\n          <ion-label>Male</ion-label>\r\n          <ion-radio slot=\"start\" value=\"male\"></ion-radio>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>Female</ion-label>\r\n          <ion-radio slot=\"start\" value=\"female\"></ion-radio>\r\n        </ion-item>\r\n      </ion-radio-group>\r\n    </ion-list> -->\r\n\r\n    \r\n\r\n\r\n    \r\n      <ion-button expand=\"block\" type=\"submit\" (click) = \"submit()\">\r\n        <!-- <ion-icon name=\"add\"></ion-icon> -->\r\n        Update\r\n      </ion-button>\r\n  \r\n\r\n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_userupdate_userupdate_module_ts.js.map