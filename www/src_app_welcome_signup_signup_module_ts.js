(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_welcome_signup_signup_module_ts"],{

/***/ 4086:
/*!*********************************************************!*\
  !*** ./src/app/welcome/signup/signup-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 5499);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 3066:
/*!*************************************************!*\
  !*** ./src/app/welcome/signup/signup.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 4086);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 5499);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 5499:
/*!***********************************************!*\
  !*** ./src/app/welcome/signup/signup.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1615);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ 6170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);









let SignupPage = class SignupPage {
  constructor(loadingController, alertController) {
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.initForm();
    this.errors = [];
  }

  ngOnInit() {}

  initForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      address: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
      }),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]
      }),
      password_confirmation: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(8)]
      }),
      phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(11)]
      })
    });
  }

  onSubmit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }; // const URL = environment.API_HOST;;

      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();

      try {
        const URL = `${_src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.API_HOST}/user/register`; // const URL = 'http://beehicle.test/api/user/register';

        const res = yield axios__WEBPACK_IMPORTED_MODULE_3___default().post(URL, _this.form.value, config);

        if (res.data.data.code == 200) {
          yield loading.dismiss();
          const alert = yield _this.alertController.create({
            header: 'Success',
            message: 'Success. Please check your email and verify your account',
            buttons: ['OK']
          });
          yield alert.present();
        }
      } catch (err) {
        yield loading.dismiss();
        const message = err.response.data.message;
        _this.errors = err.response.data.data;
        console.log(_this.errors);
        const alert = yield _this.alertController.create({
          header: 'Alert',
          message: message,
          buttons: ['OK']
        });
        yield alert.present();
      }
    })();
  }

  hasError(field) {
    return this.errors.hasOwnProperty(field);
  }

};

SignupPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-signup',
  template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], SignupPage);


/***/ }),

/***/ 6170:
/*!*************************************************!*\
  !*** ./src/app/welcome/signup/signup.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-primary);\n}\nion-header ion-toolbar, ion-header ion-item {\n  --background: transparent;\n}\nion-header ion-button {\n  text-transform: none;\n}\nion-header ion-label {\n  padding: 0 5px;\n}\nion-header ion-label .title {\n  font-weight: 800;\n  font-size: 1.5em;\n}\nion-header ion-label p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-top: 1vh;\n}\nion-content ion-list {\n  height: 100%;\n  border-radius: 20px 20px 0 0;\n}\nion-content ion-list p {\n  font-size: 0.8em;\n}\nion-content ion-list ion-item {\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-input {\n  font-size: 0.9em;\n}\nion-content ion-list .username {\n  margin: 20px 0 10px 0;\n}\nion-content ion-list .formUser {\n  margin-bottom: 10px;\n}\nion-content ion-list ion-button {\n  margin-top: 3vh;\n}\nion-content ion-list ion-button ion-text {\n  font-size: 0.8em;\n}\nion-content ion-list .group {\n  background: var(--ion-color-light);\n  height: 100%;\n}\nion-content ion-list .group ion-item {\n  box-shadow: 0 6px 4px -1px var(--ion-color-medium);\n}\nion-content ion-list .group ion-item ion-label {\n  font-weight: bold;\n  font-size: 1em;\n}\n.error {\n  font-size: 0.75em;\n  margin-left: 1.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFHSSxrREFBQTtBQUVoQjtBQURnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUdwQjtBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgaW9uLXRvb2xiYXIsIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlcm5hbWUge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtVXNlciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3ZoO1xuICAgICAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCA0cHggLTFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDRweCAtMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5lcnJvciB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXZoO1xufSJdfQ== */");

/***/ }),

/***/ 1615:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/signup/signup.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/welcome\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/welcome/signin\" fill=\"clear\" strong=\"true\" color=\"dark\">Login</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content overflow-scroll=\"true\">\n\n  <ion-list>\n    <ion-item-group class=\"ion-padding\">\n      <form [formGroup]=\"form\">\n        \n        <ion-item-group>\n          \n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Name\" formControlName=\"name\">\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('name')\">\n            {{errors['name'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n            Please enter your Name\n          </ion-text> -->\n        </ion-item-group>\n\n        <ion-item>\n          <ion-datetime slot=\"left\" placeholder=\"Birthday\" slot=\"end\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\" formControlName=\"birthday\"></ion-datetime>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('birthday')\">\n            {{errors['birthday'][0]}}\n          </ion-text>\n        </ion-item>\n\n        \n\n        <ion-item-group class=\"formUser\">\n\n          <!-- <ion-text \n              class=\"error\" \n              color=\"danger\"\n              *ngIf=\"!form.get('age').valid && form.get('age').touched\">\n            Please enter your Age\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-select required placeholder=\"Gender (Select One)\" class=\"ion-margin-horizontal\" formControlName=\"gender\">\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('gender')\">\n            {{errors['gender'][0]}}\n          </ion-text>\n          <!-- <ion-text \n              class=\"error\" \n              color=\"danger\"\n              formControlName=\"gender\" \n              *ngIf=\"!form.get('gender').valid && form.get('gender').touched\">\n            Please enter your Gender\n          </ion-text>  -->\n        </ion-item-group>\n\n\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" placeholder=\"Phone No.\" type=\"number\" required formControlName=\"phone_number\"> \n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('number')\">\n            {{errors['number'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('phoneno').valid && form.get('phoneno').touched\">\n            Please enter your Number\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Address\" required formControlName=\"address\">\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\n            {{errors['address'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('address').valid && form.get('address').touched\">\n            Please enter your Address\n          </ion-text> -->\n        </ion-item-group>\n\n\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" required type=\"email\" formControlName=\"email\"\n              placeholder=\"Email\" >\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('email')\">\n            {{errors['email'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('email').valid && form.get('email').touched\">\n            Please enter your Email\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"ion-margin-bottom\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"> \n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\n            {{errors['password'][0]}}\n          </ion-text>\n\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\"\n              placeholder=\"Confirm password\" formControlName=\"password_confirmation\">\n            </ion-input>\n          </ion-item>\n\n          <ion-text *ngIf=\"!form.get('password').valid && form.get('password').touched\">\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('required')\">\n              Please enter the Password\n            </ion-text>\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('minlength') \n                && !form.get('password').hasError('required')\">\n              Password must be of atleast 8 characters\n            </ion-text>\n          </ion-text>\n        </ion-item-group>\n\n        \n\n        <ion-button size=\"large\" expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"onSubmit()\">\n\n          <ion-text>Sign Up</ion-text>\n        </ion-button>\n      </form>\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_signup_signup_module_ts.js.map