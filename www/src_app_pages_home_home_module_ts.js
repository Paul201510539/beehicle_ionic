(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 4075:
/*!******************************************************!*\
  !*** ./src/app/alert-modal/alert-modal.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertModalComponent": () => (/* binding */ AlertModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_alert_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./alert-modal.component.html */ 2899);
/* harmony import */ var _alert_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert-modal.component.scss */ 1379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 9122);





let AlertModalComponent = class AlertModalComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() { }
    closeModal() {
        this.modalController.dismiss();
    }
};
AlertModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
AlertModalComponent.propDecorators = {
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AlertModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alert-modal',
        template: _raw_loader_alert_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_alert_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AlertModalComponent);



/***/ }),

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _shink_header_shink_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shink-header/shink-header.component */ 8662);




let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_shink_header_shink_header_component__WEBPACK_IMPORTED_MODULE_0__.ShinkHeaderComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule
        ],
        exports: [_shink_header_shink_header_component__WEBPACK_IMPORTED_MODULE_0__.ShinkHeaderComponent]
    })
], ComponentsModule);



/***/ }),

/***/ 8662:
/*!*******************************************************************!*\
  !*** ./src/app/components/shink-header/shink-header.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShinkHeaderComponent": () => (/* binding */ ShinkHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_shink_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shink-header.component.html */ 6470);
/* harmony import */ var _shink_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shink-header.component.scss */ 9146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 9122);





let ShinkHeaderComponent = class ShinkHeaderComponent {
    constructor(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');
        this.scrollSub = this.scrollArea.ionScroll.subscribe(event => {
            console.log(event.detail.scrollTop);
            this.resizeHeader(event);
        });
    }
    resizeHeader(event) {
        this.domCtrl.write(() => {
            this.newHeaderHeight = this.headerHeight - event.detail.scrollTop;
            //if(this.newHeaderHeight < 0) this.newHeaderHeight = 0;
            this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
        });
    }
    ngOnDestroy() {
        if (this.scrollSub)
            this.scrollSub.unsubscribe();
    }
};
ShinkHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2 },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.DomController }
];
ShinkHeaderComponent.propDecorators = {
    scrollArea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['scrollArea',] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['headerHeight',] }]
};
ShinkHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-shink-header',
        template: _raw_loader_shink_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shink_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShinkHeaderComponent);



/***/ }),

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




//test
const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);







//import { ShinkHeaderComponent } from 'src/app/components/shink-header/shink-header.component';

let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);
/* harmony import */ var src_app_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/alert-modal/alert-modal.component */ 4075);









let HomePage = class HomePage {
  constructor(modalController, actionSheetCtrl, alertController, loadingController, router, storage) {
    this.modalController = modalController;
    this.actionSheetCtrl = actionSheetCtrl;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.router = router;
    this.storage = storage;
    this.segmentValue = '1';
    this.checklist = [];
    this.services = [];
    this.vehicles = [];
    this.newHeight = 0;
    this.loadVehicles();
  }

  goToVehicle() {// this.router.navigate([`/vinfo/${vehicle.id}`])
  }

  loadVehicles() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const loading = yield _this.loadingController.create({
        message: 'Please wait'
      });
      yield loading.present();
      const token = yield _this.storage.get("access_token");
      const data = yield _this.storage.get("data");
      console.log('data', data);
      _this.vehicles = data.vehicles;
      _this.checklist = [{
        id: 1,
        name: 'Sample name',
        age: 25,
        address: 'Sample address',
        gender: 'Female',
        vehicle_group: '2',
        photo: 'assets/imgs/2.png',
        distance: 0.5,
        phone: '9999900000',
        email: 'test@gmail.com'
      }, {
        id: 2,
        name: 'Sample name',
        age: 22,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '4',
        photo: 'assets/imgs/4.2.jpg',
        distance: 2,
        phone: '9999900001',
        email: 'test@gmail.com'
      }, {
        id: 3,
        name: 'Sample name',
        age: 27,
        address: 'Sample address',
        gender: 'Female',
        vehicle_group: '2',
        photo: 'assets/imgs/2-1.jpg',
        distance: 6,
        phone: '9999900002',
        email: 'test@gmail.com'
      }, {
        id: 4,
        name: 'Sample name',
        age: 35,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '2',
        photo: 'assets/imgs/2.png',
        distance: 10,
        phone: '9999900003',
        email: 'test@gmail.com'
      }, {
        id: 5,
        name: 'Sample name',
        age: 30,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '4',
        photo: 'assets/imgs/4-1.jpg',
        distance: 12,
        phone: '9999900004',
        email: 'test@gmail.com'
      }, {
        id: 6,
        name: 'Sample name',
        age: 45,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '4',
        photo: 'assets/imgs/4.jpg',
        distance: 14.5,
        phone: '9999900005',
        email: 'test@gmail.com'
      }, {
        id: 7,
        name: 'Sample name',
        age: 20,
        address: 'Sample address',
        gender: 'Female',
        vehicle_group: '2',
        photo: 'assets/imgs/2-1.jpg',
        distance: 16.7,
        phone: '9999900006',
        email: 'test@gmail.com'
      }];
      _this.services = [{
        id: 1,
        name: 'Sample name',
        age: 20,
        address: 'Sample address',
        gender: 'Female',
        vehicle_group: '4',
        photo: 'assets/imgs/2-1.jpg',
        distance: 1,
        phone: '9999900010',
        email: 'test@gmail.com'
      }, {
        id: 2,
        name: 'Sample name',
        age: 29,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '2',
        photo: 'assets/imgs/4-1.jpg',
        distance: 1.5,
        phone: '9999900020',
        email: 'test@gmail.com'
      }, {
        id: 3,
        name: 'Sample name',
        age: 45,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '2',
        photo: 'assets/imgs/4-1.jpg',
        distance: 3,
        phone: '9999900030',
        email: 'test@gmail.com'
      }, {
        id: 4,
        name: 'Sample name',
        age: 40,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '2',
        photo: 'assets/imgs/2-1.jpg',
        distance: 8,
        phone: '9999900040',
        email: 'test@gmail.com'
      }, {
        id: 5,
        name: 'Sample name',
        age: 35,
        address: 'Sample address',
        gender: 'Male',
        vehicle_group: '4',
        photo: 'assets/imgs/2-1.jpg',
        distance: 15,
        phone: '9999900050',
        email: 'test@gmail.com'
      }, {
        id: 6,
        name: 'Sample name',
        age: 20,
        address: 'Sample address',
        gender: 'Female',
        vehicle_group: '4',
        photo: 'assets/imgs/2-1.jpg',
        distance: 20,
        phone: '9999900060',
        email: 'test@gmail.com'
      }];
      _this.type = 'checklist';
      _this.type = 'services';
      loading.dismiss();
    })();
  }

  ngOnInit() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.loadVehicles();
    })();
  }

  ionViewDidEnter() {
    var _this3 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this3.loadVehicles();
    })();
  }

  ngAfterViewInit() {}

  scroll(event) {
    const value = event.detail.scrollTop;

    if (value > 40) {
      this.newHeight += 5;
    } else {
      this.newHeight = 0;
    }

    if (value > 180 && this.newHeight <= 65) {
      this.newHeight += 50;
    }
  }

  checklistoptions(item) {
    var _this4 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      // console.log(item);
      const actionSheet = yield _this4.actionSheetCtrl.create({
        header: 'Options',
        cssClass: 'my-custom-class',
        mode: 'ios',
        buttons: [{
          text: 'Add Checklist',
          icon: 'checkbox-outline',
          handler: () => {
            _this4.router.navigate(['/addchecklist']);

            console.log('add checklist clicked');
          }
        }, {
          text: 'vehicle info',
          icon: 'information-circle-outline',
          handler: () => {
            _this4.router.navigate(['/vehicleinfo']);

            console.log('vehicle info clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  servicesoptions(item) {
    var _this5 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      console.log(item);
      const actionSheet = yield _this5.actionSheetCtrl.create({
        header: 'Options',
        cssClass: 'my-custom-class',
        mode: 'ios',
        buttons: [{
          text: 'add services',
          icon: 'car',
          handler: () => {
            _this5.router.navigate(['/addservices']);

            console.log('add services clicked');
          }
        }, {
          text: 'vehicle info',
          icon: 'information-circle-outline',
          handler: () => {
            _this5.router.navigate(['/vehicleinfo']);

            console.log('vehicle info clicked');
          }
        }, {
          text: 'Checklist',
          icon: 'checkbox-outline',
          handler: () => {
            _this5.router.navigate(['/addchecklist']);

            console.log('Checklist clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      yield actionSheet.present();
    })();
  }

  segmentChanged(ev) {
    console.log('Segment changed', ev); //this.segmentValue = event.detail.value;
  }

  presentAlert() {
    var _this6 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const alert = yield _this6.alertController.create({
        header: 'About',
        cssClass: 'my-custom-class',
        subHeader: 'Beehicle Journal',
        message: 'A Mobile Application that aim to lessen the burden of bringing all documents/papers of the customer`s vehicle. To monitor/predict the maintenance of the vehicle it will help track how much the vehicle will cost per travel. The Application will help to compute the fuel consumption from point to point and notify when to PMS.',
        buttons: ['Okay']
      });
      yield alert.present();
      let result = yield alert.onDidDismiss();
      console.log(result);
    })();
  }

  presentModal() {
    this.showModal("Ready to use modal");
  }

  showModal(msg) {
    var _this7 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const modal = yield _this7.modalController.create({
        component: src_app_alert_modal_alert_modal_component__WEBPACK_IMPORTED_MODULE_3__.AlertModalComponent,
        componentProps: {
          message: msg
        },
        cssClass: 'alert-modal'
      });
      yield modal.present();
    })();
  }

  testClick() {
    this.router.navigate(['/addvehicle']);
  }

};

HomePage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_6__.Storage
}];

HomePage.propDecorators = {
  lineCanvas: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: ['lineCanvas']
  }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], HomePage);


/***/ }),

/***/ 1379:
/*!********************************************************!*\
  !*** ./src/app/alert-modal/alert-modal.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  margin-top: 30%;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.container ion-icon {\n  padding: 10px 10px 0 0;\n  float: right;\n}\n.sub-container-upper {\n  font-size: 27px;\n  text-align: center;\n  border-radius: 20px 20px 0 0;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 5px 0 10px 0;\n  background-color: #ffffff;\n}\n.sub-container-upper img {\n  margin-top: 30px;\n  width: 90px;\n  height: 90px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.sub-container-lower {\n  color: #1C3C63;\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 20px;\n  background-color: #FFC409;\n}\n.sub-container-lower .one {\n  font-size: 19px;\n  margin-bottom: 20px;\n}\n.sub-container-lower .two {\n  margin-bottom: 20px;\n  font-size: 18px;\n  text-align: justify;\n}\n.sub-container-lower .two p {\n  color: #1C3C63;\n  text-indent: 35px;\n}\n.sub-container-footer {\n  border-radius: 0 0 20px 20px;\n  display: block;\n  width: 100%;\n  height: 40px;\n  background-color: #FFC409;\n}\nion-label {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBQ1I7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUdBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRVo7QUFHQTtFQUNJLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6ImFsZXJ0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGlvbi1pY29ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxufVxuXG4uc3ViLWNvbnRhaW5lci11cHBlcntcbiAgICBmb250LXNpemU6IDI3cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweCAwIDEwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG59XG5cbi5zdWItY29udGFpbmVyLWxvd2VyeyBcbiAgICBjb2xvcjogIzFDM0M2MztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDNDA5O1xuICAgIC5vbmV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLnR3b3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6ICMxQzNDNjM7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogMzVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN1Yi1jb250YWluZXItZm9vdGVye1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMHB4IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkM0MDk7XG59XG5cbmlvbi1sYWJlbHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ 9146:
/*!*********************************************************************!*\
  !*** ./src/app/components/shink-header/shink-header.component.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGluay1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: var(--ion-color-light);\n}\nion-header app-shrink-header {\n  display: block;\n  overflow: hidden;\n}\nion-header app-shrink-header ion-grid {\n  background: var(--ion-color-primary);\n  margin-top: -5px;\n  border-radius: 0 0 5px 5px;\n}\nion-header app-shrink-header .popover {\n  background: var(--ion-color-white);\n  border-radius: 10px;\n  width: 90%;\n  margin: auto;\n}\nion-header app-shrink-header .popover ion-item ion-label {\n  margin: 0;\n}\nion-header app-shrink-header .popover ion-item ion-label h1 {\n  font-size: 1.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label p {\n  margin-top: 3px;\n  font-size: 0.8rem;\n}\nion-header app-shrink-header .popover ion-item ion-label ion-text {\n  font-size: 0.7rem;\n}\nion-header app-shrink-header .popover canvas {\n  height: 70px !important;\n}\nion-header div {\n  background: var(--ion-color-light);\n}\nion-header div ion-segment {\n  --background: var(--ion-color-white);\n  border-radius: 20px;\n  --margin-top: 5px;\n  --margin-bottom: 5px;\n}\nion-header div ion-segment ion-segment-button {\n  --background-checked: var(--ion-color-primary);\n  --indicator-color: var(--ion-color-primary);\n  --border-radius: 20px;\n  --color: var(--ion-color-primary);\n  --color-checked: var(--ion-color-white);\n}\nion-content {\n  --background: var(--ion-color-light);\n}\nion-content ion-list {\n  background: var(--ion-color-light);\n}\nion-content ion-list .heading {\n  font-family: Arial, Helvetica, sans-serif;\n}\nion-content ion-list .popItem {\n  width: 90%;\n  margin: auto;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  padding: 0;\n}\nion-content ion-list .popItem ion-thumbnail {\n  min-width: 5rem;\n  min-height: 6rem;\n  border-radius: 10px;\n  background: var(--ion-color-secondary);\n}\nion-content ion-list .popItem ion-thumbnail div {\n  background-color: var(--ion-color-primary);\n  border-radius: 10px 10px 0 0;\n  padding-bottom: 2px;\n}\nion-content ion-list .popItem ion-thumbnail div ion-text {\n  font-size: 0.7rem;\n  font-weight: bold;\n}\nion-content ion-list .popItem ion-thumbnail p ion-text {\n  font-size: 2.5rem !important;\n}\nion-content ion-list .popItem ion-label ion-note {\n  font-size: 1.1rem;\n  letter-spacing: 0.5px;\n}\nion-content ion-list .popItem ion-label p {\n  margin-top: 5px;\n}\nion-content ion-list .popItem ion-label p ion-text span {\n  color: var(--ion-color-dark);\n  padding: 0 5px;\n}\nion-content ion-list .popItem ion-fab {\n  margin-right: -15px !important;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7QUFDRjtBQUFFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUdOO0FBQUk7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFFTjtBQUNRO0VBQ0UsU0FBQTtBQUNWO0FBQVc7RUFDRSxpQkFBQTtBQUViO0FBQVc7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFYjtBQUFXO0VBQ0MsaUJBQUE7QUFFWjtBQUVNO0VBQ0UsdUJBQUE7QUFBUjtBQUlFO0VBQ0Usa0NBQUE7QUFGSjtBQUdJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUVNO0VBQ0UsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtBQUFSO0FBTUE7RUFDRSxvQ0FBQTtBQUhGO0FBSUU7RUFDRSxrQ0FBQTtBQUZKO0FBR0k7RUFDRSx5Q0FBQTtBQUROO0FBR0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7QUFBUjtBQUNRO0VBQ0UsMENBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQ1Y7QUFBVTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQUVVO0VBQ0UsNEJBQUE7QUFBWjtBQUtRO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQUhWO0FBS1E7RUFDRSxlQUFBO0FBSFY7QUFLWTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtBQUhkO0FBUU07RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBTlIiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYXBwLXNocmluay1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW9uLWdyaWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEyMHB4O1xuICAgIH1cbiAgICAucG9wb3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBtYXJnaW4tdG9wOiAtMTIwcHg7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhbnZhcyB7XG4gICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBkaXYge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC0tbWFyZ2luLXRvcDogNXB4O1xuICAgICAgLS1tYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLmhlYWRpbmcge1xuICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIC5wb3BJdGVtIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA2cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBpb24tbm90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tZmFiIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ 2899:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert-modal/alert-modal.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\n  <ion-icon name=\"close-outline\" (click)=\"closeModal()\"></ion-icon>\n  <div class=\"sub-container-upper\"><img src=\"https://img.freepik.com/free-vector/illustration-circle-stamp-banner-vector_53876-27183.jpg?w=2000\" alt=\"logo\">\n    <span>Beehicle</span>\n  </div>\n  <div class=\"sub-container-lower\">\n    <ion-label class=\"one\">About us</ion-label>\n    <ion-label class=\"two\"><p>A Mobile Application that aim to lessen the burden of bringing all documents/papers of the customer`s vehicle. To monitor/predict the maintenance of the vehicle it will help track how much the vehicle will cost per travel. The Application will help to compute the fuel consumption from point to point and notify when to PMS.</p></ion-label>\n  </div>\n  <div class=\"sub-container-footer\">\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    <ion-icon name=\"logo-twitter\"></ion-icon>\n    <ion-icon name=\"logo-instagram\"></ion-icon>\n    <ion-icon name=\"logo-pinterest\"></ion-icon>\n    <ion-icon name=\"logo-youtube\"></ion-icon>\n  </div>\n</div>");

/***/ }),

/***/ 6470:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shink-header/shink-header.component.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ng-content></ng-content>\n");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">\n      <ion-label> Dashboard</ion-label>\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menuId=\"custom-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"presentAlert()\">\n        <ion-icon slot=\"icon-only\" name=\"information-circle-outline\" style=\"padding-top: 10px; color: #f6e8b1;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"presentModal()\">\n        <ion-icon slot=\"icon-only\" name=\"information-circle\" style=\"padding-top: 10px; color: #f6e8b1;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScrollStart)=\"logScrollStart()\" (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\">\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"testClick()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list lines=\"none\">\n    <ion-item-group >\n\n      \n        <!-- <ion-item [routerLink]=\"['/vinfo', vehicle.id]\" *ngFor=\"let vehicle of vehicles\">\n          <ion-label>{{vehicle.plate_number}}</ion-label>\n          <ion-avatar slot=\"start\">\n            <img src=\"assets/imgs/pic1.jpg\">\n          </ion-avatar>\n          <ion-label>\n            <h2>click</h2>\n            <h3>for more info</h3>\n          </ion-label>\n        </ion-item> -->\n\n        <ion-item-sliding [routerLink]=\"['/vinfo', vehicle.id]\" *ngFor=\"let vehicle of vehicles\">\n          <ion-item>\n            <ion-label>{{vehicle.plate_number}}</ion-label>\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/imgs/pic1.jpg\">\n            </ion-avatar>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"unread(item)\">Delete</ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n        \n\n    </ion-item-group>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map