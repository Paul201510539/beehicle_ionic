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

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-primary);\n}\nion-header ion-toolbar, ion-header ion-item {\n  --background: transparent;\n}\nion-header ion-button {\n  text-transform: none;\n}\nion-header ion-label {\n  padding: 0 5px;\n}\nion-header ion-label .title {\n  font-weight: 800;\n  font-size: 1.5em;\n}\nion-header ion-label p {\n  font-weight: bold;\n  font-size: 1em;\n  margin-top: 1vh;\n}\nion-content ion-list {\n  height: 100%;\n  border-radius: 20px 20px 0 0;\n}\nion-content ion-list p {\n  font-size: 0.8em;\n}\nion-content ion-list ion-item {\n  border-radius: 20px;\n}\nion-content ion-list ion-item ion-input {\n  font-size: 0.9em;\n}\nion-content ion-list .username {\n  margin: 20px 0 10px 0;\n}\nion-content ion-list .formUser {\n  margin-bottom: 10px;\n}\nion-content ion-list ion-button {\n  margin-top: 3vh;\n}\nion-content ion-list ion-button ion-text {\n  font-size: 0.8em;\n}\nion-content ion-list .group {\n  background: var(--ion-color-light);\n  height: 100%;\n}\nion-content ion-list .group ion-item {\n  box-shadow: 0 6px 4px -1px var(--ion-color-medium);\n}\nion-content ion-list .group ion-item ion-label {\n  font-weight: bold;\n  font-size: 1em;\n}\n.term_conditions ion-label {\n  color: red;\n  font-size: 13px;\n  color: gray;\n}\n.error {\n  font-size: 0.75em;\n  margin-left: 1.5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxvQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7QUFDWjtBQUNRO0VBQ0ksbUJBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7QUFDUTtFQUNJLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUFZO0VBQ0ksZ0JBQUE7QUFFaEI7QUFDUTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtBQUNaO0FBQVk7RUFHSSxrREFBQTtBQUVoQjtBQURnQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUdwQjtBQU1RO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSFo7QUFPQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGlvbi10b29sYmFyLCBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJuYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9ybVVzZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDN2aDtcbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ncm91cCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggNHB4IC0xcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDZweCA0cHggLTFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCA0cHggLTFweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGVybV9jb25kaXRpb25ze1xuICAgIC8vIG1heC13aWR0aDogODBweDtcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9ICBcbn1cblxuLmVycm9yIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBtYXJnaW4tbGVmdDogMS41dmg7XG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header >\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/welcome\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <h1> Sign Up</h1>\n    <ion-buttons slot=\"end\">\n      <ion-button routerLink=\"/welcome/signin\" fill=\"clear\" strong=\"true\" color=\"dark\">Login</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content overflow-scroll=\"true\">\n\n  <form [formGroup]=\"form\">\n  <ion-list>\n    <ion-item-group class=\"ion-padding\">\n        \n        <ion-item-group>\n          \n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Name\" formControlName=\"name\">\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('name')\">\n            {{errors['name'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('name').valid && form.get('name').touched\">\n            Please enter your Name\n          </ion-text> -->\n        </ion-item-group>\n        <ion-item style=\"color: gray; padding-bottom: 0; margin-bottom: 0;\">Date of birth</ion-item>\n        <ion-item>\n          <ion-datetime slot=\"left\" slot=\"end\" value=\"2019-10-01T15:43:40.394Z\" display-timezone=\"utc\" formControlName=\"birthday\">Date of birth</ion-datetime>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('birthday')\">\n            {{errors['birthday'][0]}}\n          </ion-text>\n        </ion-item>\n\n        \n\n        <ion-item-group class=\"formUser\">\n\n          <!-- <ion-text \n              class=\"error\" \n              color=\"danger\"\n              *ngIf=\"!form.get('age').valid && form.get('age').touched\">\n            Please enter your Age\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-select required placeholder=\"Sex (Select One)\" class=\"ion-margin-horizontal\" formControlName=\"gender\">\n              <ion-select-option value=\"Female\">Female</ion-select-option>\n              <ion-select-option value=\"Male\">Male</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('gender')\">\n            {{errors['gender'][0]}}\n          </ion-text>\n          <!-- <ion-text \n              class=\"error\" \n              color=\"danger\"\n              formControlName=\"gender\" \n              *ngIf=\"!form.get('gender').valid && form.get('gender').touched\">\n            Please enter your Gender\n          </ion-text>  -->\n        </ion-item-group>\n\n\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" placeholder=\"Phone No.\" type=\"number\" required formControlName=\"phone_number\"> \n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('phone_number')\">\n            {{errors['phone_number'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('phoneno').valid && form.get('phoneno').touched\">\n            Please enter your Number\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" type=\"text\" placeholder=\"Address\" required formControlName=\"address\">\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\n            {{errors['address'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('address').valid && form.get('address').touched\">\n            Please enter your Address\n          </ion-text> -->\n        </ion-item-group>\n\n\n\n        <ion-item-group class=\"formUser\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" required type=\"email\" formControlName=\"email\"\n              placeholder=\"Email\" >\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('email')\">\n            {{errors['email'][0]}}\n          </ion-text>\n          <!-- <ion-text class=\"error\" color=\"danger\" *ngIf=\"!form.get('email').valid && form.get('email').touched\">\n            Please enter your Email\n          </ion-text>  -->\n        </ion-item-group>\n\n        <ion-item-group class=\"ion-margin-bottom\">\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" formControlName=\"password\"> \n            </ion-input>\n          </ion-item>\n          <ion-text class=\"error\" color=\"danger\" *ngIf=\"hasError('address')\">\n            {{errors['password'][0]}}\n          </ion-text>\n\n          <ion-item color=\"light\">\n            <ion-input class=\"ion-margin-horizontal\" formControlName=\"password\" type=\"password\"\n              placeholder=\"Confirm password\" formControlName=\"password_confirmation\">\n            </ion-input>\n          </ion-item>\n\n          <ion-text *ngIf=\"!form.get('password').valid && form.get('password').touched\">\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('required')\">\n              Please enter the Password\n            </ion-text>\n            <ion-text class=\"error\" color=\"danger\" *ngIf=\"form.get('password').hasError('minlength') \n                && !form.get('password').hasError('required')\">\n              Password must be of atleast 8 characters\n            </ion-text>\n          </ion-text>\n        </ion-item-group>\n\n        <ion-item class=\"term_conditions\">\n          <ion-checkbox color=\"primary\" formControlName=\"agreed\"></ion-checkbox>\n          <ion-label style=\" padding-left: 10px;\">I agree to <a href=\"#\">terms & conditions</a> of Beehicle</ion-label>\n        </ion-item>\n\n        <ion-button size=\"large\" expand=\"block\" shape=\"round\" color=\"dark\" (click)=\"onSubmit()\">\n\n          <ion-text>Sign Up</ion-text>\n        </ion-button>\n      </ion-item-group>\n      \n    </ion-list>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_signup_signup_module_ts.js.map