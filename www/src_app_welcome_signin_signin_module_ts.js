(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_welcome_signin_signin_module_ts"],{

/***/ 3029:
/*!*********************************************************!*\
  !*** ./src/app/welcome/signin/signin-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageRoutingModule": () => (/* binding */ SigninPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.page */ 4985);




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_0__.SigninPage
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ 3118:
/*!*************************************************!*\
  !*** ./src/app/welcome/signin/signin.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPageModule": () => (/* binding */ SigninPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin-routing.module */ 3029);
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.page */ 4985);







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_0__.SigninPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_1__.SigninPage]
    })
], SigninPageModule);



/***/ }),

/***/ 4985:
/*!***********************************************!*\
  !*** ./src/app/welcome/signin/signin.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninPage": () => (/* binding */ SigninPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./signin.page.html */ 2373);
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page.scss */ 522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/environments/environment */ 2340);











let SigninPage = class SigninPage {
  constructor(router, storage, loadingController, alertController) {
    this.router = router;
    this.storage = storage;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.initForm();
    this.state = 'sign_in';
  }

  ngOnInit() {// console.log('init')
  }

  initForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]
      })
    });
  }

  save() {
    console.log('clicked');
  }

  onSubmit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.state == 'sign_in') {
        _this.signIn();
      } else {
        _this.resetPassword();
      }
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this2.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      };
      const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.API_HOST;
      ;

      try {
        let res = yield axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${URL}/user/login`, _this2.form.value, config);

        if (res.data.data.code == 200) {
          const token = res.data.data.access_token;
          yield _this2.storage.set('access_token', token);
          const get_config = {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization': `Bearer ${token}`
            }
          };
          res = yield axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${URL}/setup`, get_config);
          console.log(res);
          yield _this2.storage.set('data', res.data.data); // await this.storage.set('vehicles', res.data.data.vehicles)

          yield loading.dismiss();

          _this2.router.navigate(["/home"]);
        }
      } catch (err) {
        yield loading.dismiss();
        const message = err.response.data.message;
        const alert = yield _this2.alertController.create({
          header: 'Alert',
          message: message,
          buttons: ['OK']
        });
        yield alert.present();
      }

      if (!_this2.form.valid) {
        _this2.form.markAllAsTouched();

        return;
      }
    })();
  }

  resetPassword() {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.form.value.email == '') {
        const alert = yield _this3.alertController.create({
          header: 'Alert',
          message: 'Please provide email',
          buttons: ['OK']
        });
        yield alert.present();
        return;
      }

      try {
        const loading = yield _this3.loadingController.create({
          message: 'Please wait'
        });
        yield loading.present();
        const config = {
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        };
        const URL = _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.API_HOST;
        ;
        console.log(_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment, _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.API_HOST);
        const res = yield axios__WEBPACK_IMPORTED_MODULE_3___default().post(`${URL}/user/reset-password`, _this3.form.value, config);
        yield loading.dismiss();
        const alert = yield _this3.alertController.create({
          header: 'Success',
          message: 'Please check your email and follow instructions',
          buttons: ['OK']
        });
        yield alert.present();
      } catch (e) {
        console.log(e);
      }
    })();
  }

  toggleState() {
    this.state = this.state == 'sign_in' ? 'forgot_password' : 'sign_in';
  }

};

SigninPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}];

SigninPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-signin',
  template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SigninPage);


/***/ }),

/***/ 522:
/*!*************************************************!*\
  !*** ./src/app/welcome/signin/signin.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-primary);\n}\nion-header ion-toolbar, ion-header ion-item {\n  --background: transparent;\n}\nion-header ion-button {\n  text-transform: none;\n}\nion-header ion-label {\n  padding: 0 5px;\n}\nion-header ion-label .title {\n  font-weight: 800;\n  font-size: 1.5em;\n}\nion-header ion-label p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-top: 1vh;\n}\nion-content ion-list {\n  height: 100%;\n  border-radius: 20px 20px 0 0;\n}\nion-content ion-list p {\n  font-size: 0.8em;\n}\nion-content ion-list ion-item {\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-input {\n  font-size: 0.9em;\n}\nion-content ion-list .username {\n  margin: 20px 0 10px 0;\n}\nion-content ion-list ion-button {\n  margin-top: 3vh;\n}\nion-content ion-list ion-button ion-text {\n  font-size: 0.8em;\n}\nion-content ion-list .group {\n  background: var(--ion-color-light);\n  height: 100%;\n}\nion-content ion-list .group ion-item {\n  box-shadow: 0 6px 4px -1px var(--ion-color-medium);\n}\nion-content ion-list .group ion-item ion-label {\n  font-weight: bold;\n  font-size: 1em;\n}\n.error {\n  font-size: 0.75em;\n  margin-left: 1.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFHSSxrREFBQTtBQUVoQjtBQURnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUdwQjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InNpZ25pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaW9uLXRvb2xiYXIsIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA0cHggLTFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDRweCAtMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXZoO1xufSJdfQ== */");

/***/ }),

/***/ 2373:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/signin/signin.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/welcome\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/welcome/signup\" fill=\"clear\" strong=\"true\" color=\"dark\">Register</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  \n  <ion-item lines=\"none\">\n    <ion-label color=\"dark\">\n      <h1><span >Sign In</span></h1>\n    </ion-label>\n  </ion-item>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" color=\"primary\">\n\n  <ion-list lines=\"none\">\n    <ion-item-group class=\"ion-padding\">\n      <form [formGroup]=\"form\">\n        <ion-item-group class=\"username\">\n          <ion-item color=\"light\">\n            <ion-input \n              class=\"ion-margin-horizontal\"\n              formControlName=\"email\"\n              type=\"text\"\n              placeholder=\"Email\"\n              (click)=\"save()\"\n              >\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('email').valid && form.get('email').touched\">\n            Please enter your Username\n          </ion-text>\n        </ion-item-group>\n\n        <ion-item-group class=\"ion-margin-bottom\" *ngIf=\"state=='sign_in'\">\n          <ion-item color=\"light\">\n            <ion-input \n              class=\"ion-margin-horizontal\"\n              formControlName=\"password\"\n              type=\"password\"\n              placeholder=\"Password\">\n            </ion-input>\n          </ion-item>\n          <ion-text *ngIf=\"!form.get('password').valid && form.get('password').touched\">\n            <ion-text class=\"error\" color=\"danger\"\n              *ngIf=\"form.get('password').hasError('required')\">\n                Please enter the Password\n            </ion-text>\n            <ion-text class=\"error\" color=\"danger\"\n              *ngIf=\"form.get('password').hasError('minlength') \n                && !form.get('password').hasError('required')\">\n                Password must be of atleast 8 characters\n            </ion-text>\n          </ion-text>\n        </ion-item-group>\n\n        <p class=\"ion-text-right\" (click) = \"toggleState()\">\n          <ion-text *ngIf=\"state=='sign_in'\">Forgot Password?</ion-text>\n          <ion-text *ngIf=\"state=='forgot_password'\">Sign In</ion-text>\n        </p>\n\n        <ion-button size=\"large\" expand=\"block\" shape=\"round\" color=\"dark\"\n          (click)=\"onSubmit()\"  >\n\n          <!--  [disabled]=\"!form?.valid\" -->\n          <ion-text *ngIf=\"state=='sign_in'\">Sign In</ion-text>\n          <ion-text *ngIf=\"state=='forgot_password'\">Reset Password</ion-text>\n\n        </ion-button>\n      </form>\n    </ion-item-group>\n\n  \n  </ion-list>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_signin_signin_module_ts.js.map