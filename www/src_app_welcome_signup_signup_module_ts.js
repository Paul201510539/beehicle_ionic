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
/* harmony import */ var D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1615);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ 6170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 8686);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);










let SignupPage = class SignupPage {
  constructor(loadingController, alertController, router) {
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.initForm();
    this.errors = [];
  }

  ngOnInit() {}

  initForm() {
    this.agreed = false;
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
      }),
      agreed: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false)
    });
  }

  onSubmit() {
    var _this = this;

    return (0,D_projects_ionic_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log(_this.form.value['agreed']);

      if (!_this.form.value['agreed']) {
        const alert = yield _this.alertController.create({
          header: 'Alert',
          message: 'You must agree to our Terms & Conditions',
          buttons: ['OK']
        });
        yield alert.present();
        return;
      }

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
            buttons: [{
              text: 'Ok',
              cssClass: 'secondary',
              handler: () => {
                _this.router.navigate(['/welcome']);
              }
            }]
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
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-primary);\n}\nion-header ion-toolbar, ion-header ion-item {\n  --background: transparent;\n}\nion-header ion-button {\n  text-transform: none;\n}\nion-header ion-label {\n  padding: 0 5px;\n}\nion-header ion-label .title {\n  font-weight: 800;\n  font-size: 1.5em;\n}\nion-header ion-label p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-top: 1vh;\n}\nion-content ion-list {\n  height: 100%;\n  border-radius: 20px 20px 0 0;\n}\nion-content ion-list p {\n  font-size: 0.8em;\n}\nion-content ion-list ion-item {\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-input {\n  font-size: 0.9em;\n}\nion-content ion-list .username {\n  margin: 20px 0 10px 0;\n}\nion-content ion-list .formUser {\n  margin-bottom: 10px;\n}\nion-content ion-list ion-button {\n  margin-top: 3vh;\n}\nion-content ion-list ion-button ion-text {\n  font-size: 0.8em;\n}\nion-content ion-list .group {\n  background: var(--ion-color-light);\n  height: 100%;\n}\nion-content ion-list .group ion-item {\n  box-shadow: 0 6px 4px -1px var(--ion-color-medium);\n}\nion-content ion-list .group ion-item ion-label {\n  font-weight: bold;\n  font-size: 1em;\n}\n.term_conditions ion-label {\n  color: red;\n  font-size: 13px;\n  color: gray;\n}\n.error {\n  font-size: 0.75em;\n  margin-left: 1.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFHSSxrREFBQTtBQUVoQjtBQURnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUdwQjtBQU1RO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSFo7QUFPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBpb24tdG9vbGJhciwgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXZoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDEwcHggMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm1Vc2VyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgICAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JvdXAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNHB4IC0xcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgNnB4IDRweCAtMXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggNHB4IC0xcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGVybV9jb25kaXRpb25ze1xyXG4gICAgLy8gbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9ICBcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNXZoO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/welcome\" color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n    <h1> Sign Up</h1>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button routerLink=\"/welcome/signin\" fill=\"clear\" strong=\"true\" color=\"dark\">Login</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content overflow-scroll=\"true\">\r\n\r\n  <form [formGroup]=\"form\">\r\n  <ion-list>\r\n    <ion-item-group class=\"ion-padding\">\r\n        \r\n        <ion-item-group>\r\n          \r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Name\" formControlName=\"name\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('name')\">\r\n            {{errors['name'][0]}}\r\n          </ion-text>\r\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('name').valid && form.get('name').touched\">\r\n            Please enter your Name\r\n          </ion-text> -->\r\n        </ion-item-group>\r\n        <ion-item style=\"color: gray; padding-bottom: 0; margin-bottom: 0;\">Date of birth</ion-item>\r\n        <ion-item>\r\n          <ion-datetime slot=\"left\" slot=\"end\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\" formControlName=\"birthday\">Date of birth</ion-datetime>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('birthday')\">\r\n            {{errors['birthday'][0]}}\r\n          </ion-text>\r\n        </ion-item>\r\n\r\n        \r\n\r\n        <ion-item-group class=\"formUser\">\r\n\r\n          <!-- <ion-text \r\n              class=\"error\" \r\n              color=\"danger\"\r\n              *ngIf=\"!form.get('age').valid && form.get('age').touched\">\r\n            Please enter your Age\r\n          </ion-text>  -->\r\n        </ion-item-group>\r\n\r\n        <ion-item-group class=\"formUser\">\r\n          <ion-item color=\"light\">\r\n            <ion-select required placeholder=\"Sex (Select One)\" class=\"ion-margin-horizontal\" formControlName=\"gender\">\r\n              <ion-select-option value=\"Female\">Female</ion-select-option>\r\n              <ion-select-option value=\"Male\">Male</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('gender')\">\r\n            {{errors['gender'][0]}}\r\n          </ion-text>\r\n          <!-- <ion-text \r\n              class=\"error\" \r\n              color=\"danger\"\r\n              formControlName=\"gender\" \r\n              *ngIf=\"!form.get('gender').valid && form.get('gender').touched\">\r\n            Please enter your Gender\r\n          </ion-text>  -->\r\n        </ion-item-group>\r\n\r\n\r\n\r\n        <ion-item-group class=\"formUser\">\r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" placeholder=\"Phone No.\" type=\"number\" required formControlName=\"phone_number\"> \r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('phone_number')\">\r\n            {{errors['phone_number'][0]}}\r\n          </ion-text>\r\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('phoneno').valid && form.get('phoneno').touched\">\r\n            Please enter your Number\r\n          </ion-text>  -->\r\n        </ion-item-group>\r\n\r\n        <ion-item-group class=\"formUser\">\r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Address\" required formControlName=\"address\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\r\n            {{errors['address'][0]}}\r\n          </ion-text>\r\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('address').valid && form.get('address').touched\">\r\n            Please enter your Address\r\n          </ion-text> -->\r\n        </ion-item-group>\r\n\r\n\r\n\r\n        <ion-item-group class=\"formUser\">\r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" required type=\"email\" formControlName=\"email\"\r\n              placeholder=\"Email\" >\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('email')\">\r\n            {{errors['email'][0]}}\r\n          </ion-text>\r\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('email').valid && form.get('email').touched\">\r\n            Please enter your Email\r\n          </ion-text>  -->\r\n        </ion-item-group>\r\n\r\n        <ion-item-group class=\"ion-margin-bottom\">\r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"> \r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\r\n            {{errors['password'][0]}}\r\n          </ion-text>\r\n\r\n          <ion-item color=\"light\">\r\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\"\r\n              placeholder=\"Confirm password\" formControlName=\"password_confirmation\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-text *ngIf=\"!form.get('password').valid && form.get('password').touched\">\r\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('required')\">\r\n              Please enter the Password\r\n            </ion-text>\r\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('minlength') \r\n                && !form.get('password').hasError('required')\">\r\n              Password must be of atleast 8 characters\r\n            </ion-text>\r\n          </ion-text>\r\n        </ion-item-group>\r\n\r\n        <ion-item class=\"term_conditions\">\r\n          <ion-checkbox color=\"primary\" formControlName=\"agreed\"></ion-checkbox>\r\n          <ion-label style=\" padding-left: 10px;\">I agree to <a href=\"#\">terms & conditions</a> of Beehicle</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-button size=\"large\" expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"onSubmit()\">\r\n\r\n          <ion-text>Sign Up</ion-text>\r\n        </ion-button>\r\n      </ion-item-group>\r\n      \r\n    </ion-list>\r\n  </form>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_signup_signup_module_ts.js.map