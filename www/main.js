(self["webpackChunkBeehicle"] = self["webpackChunkBeehicle"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_privacy_privacy_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/privacy/privacy.module */ 2886)).then(m => m.PrivacyPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 2526)).then(m => m.WelcomePageModule)
    },
    {
        path: 'addvehicle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-src_app_services_file_service_ts"), __webpack_require__.e("src_app_pages_addvehicle_addvehicle_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/addvehicle/addvehicle.module */ 7251)).then(m => m.AddvehiclePageModule)
    },
    {
        path: 'addservices',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_addservices_addservices_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/addservices/addservices.module */ 5949)).then(m => m.AddservicesPageModule)
    },
    {
        path: 'addchecklist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_addchecklist_addchecklist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/addchecklist/addchecklist.module */ 9438)).then(m => m.AddchecklistPageModule)
    },
    {
        path: 'vehicleinfo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_vehicleinfo_vehicleinfo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/vehicleinfo/vehicleinfo.module */ 2453)).then(m => m.VehicleinfoPageModule)
    },
    {
        path: 'odometer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_odometer_odometer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/odometer/odometer.module */ 5464)).then(m => m.OdometerPageModule)
    },
    {
        path: 'vinfo/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-src_app_services_file_service_ts"), __webpack_require__.e("src_app_vinfo_vinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vinfo/vinfo.module */ 5039)).then(m => m.VinfoPageModule)
    },
    {
        path: 'vinfo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("default-src_app_services_file_service_ts"), __webpack_require__.e("src_app_vinfo_vinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vinfo/vinfo.module */ 5039)).then(m => m.VinfoPageModule)
    },
    {
        path: 'vimages',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_vimages_vimages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vimages/vimages.module */ 8452)).then(m => m.VimagesPageModule)
    },
    {
        path: 'trans/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_trans_trans_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trans/trans.module */ 5090)).then(m => m.TransPageModule)
    },
    {
        path: 'userupdate',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_userupdate_userupdate_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./userupdate/userupdate.module */ 9897)).then(m => m.UserupdatePageModule)
    },
    {
        path: 'slist/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_slist_slist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./slist/slist.module */ 5789)).then(m => m.SlistPageModule)
    },
    {
        path: 'slist',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_slist_slist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./slist/slist.module */ 5789)).then(m => m.SlistPageModule)
    },
    {
        path: 'addservicelist/:vehicle_id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_addservicelist_addservicelist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./addservicelist/addservicelist.module */ 7952)).then(m => m.AddservicelistPageModule)
    },
    {
        path: 'viewservice/:vehicle_id/:service_id/:mode',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_addservicelist_addservicelist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./addservicelist/addservicelist.module */ 7952)).then(m => m.AddservicelistPageModule)
    },
    {
        path: 'translist/:vehicle_id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_translist_translist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./translist/translist.module */ 2284)).then(m => m.TranslistPageModule)
    },
    {
        path: 'translist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_translist_translist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./translist/translist.module */ 2284)).then(m => m.TranslistPageModule)
    },
    {
        path: 'transinfo/:vehicle_id/:transaction_id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_transinfo_transinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transinfo/transinfo.module */ 9858)).then(m => m.TransinfoPageModule)
    },
    {
        path: 'transinfo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_transinfo_transinfo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./transinfo/transinfo.module */ 9858)).then(m => m.TransinfoPageModule)
    },
    {
        path: 'pms/:vehicle_id/:odometer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_axios_index_js"), __webpack_require__.e("src_app_pms_pms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pms/pms.module */ 7309)).then(m => m.PmsPageModule)
    },
    {
        path: 'pmslist/:vehicle_id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pmslist_pmslist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pmslist/pmslist.module */ 6872)).then(m => m.PmslistPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);






let AppComponent = class AppComponent {
  constructor(storage) {
    this.storage = storage;
    this.pages = [{
      title: 'Dashboard',
      url: '/home',
      icon: 'home'
    }, {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    }, //{title: 'About Us', url: '/about', icon: 'information-circle'},
    // {title: 'Odometer', url: '/odometer', icon: 'speedometer'},
    {
      title: 'Sign Out',
      url: '',
      icon: 'log-out',
      route: true
    }];
  }

  ngOnInit() {
    var _this = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this.storage.create();
      const sData = yield _this.storage.get('data');
      _this.user = sData; // console.log(sData);
    })();
  }

  signOut() {
    var _this2 = this;

    return (0,_Users_johnashbeemorgado_node_beehicle_ionic_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this2.storage.clear();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-root',
  template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__.default,
  styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__.default]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/storage-angular */ 4925);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 9122);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ 2880);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ 7871);
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/File/ngx */ 3126);
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ 4575);
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ 9865);















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_13__.IonicStorageModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__.ImagePicker,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy },
            _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera,
            _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_6__.File,
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_7__.WebView,
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__.FilePath
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_HOST: 'https://beehicle.xyz:8443/api'
    // API_HOST: 'http://beehicle.test/api' 
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		8359,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		4355,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		664,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3087,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		1349,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		7915,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  font-style: verdana;\n  letter-spacing: 0.5px;\n  --background: var(--ion-item-background, var(--ion-background-color, var(--ion-color-secondary)));\n}\nion-menu ion-content * {\n  font-family: Arial, Helvetica, sans-serif;\n}\nion-menu ion-content .main-header {\n  height: 25vh;\n  width: 120%;\n  background: linear-gradient(90deg, var(--ion-color-tertiary) 0%, var(--ion-color-primary) 100%);\n  box-shadow: 0 1px 10px var(--ion-color-light);\n  margin-left: -4.5vh;\n}\nion-menu ion-content .main-header div {\n  transform: translateY(3vh);\n}\nion-menu ion-content .main-header div ion-avatar {\n  width: 10vh;\n  height: 10vh;\n  background: var(--ion-color-white);\n  margin-bottom: 5px;\n  border: 7px solid var(--ion-color-primary);\n}\nion-menu ion-content .main-header div ion-label {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\nion-menu ion-content .main-header div ion-label p {\n  margin-top: 3px;\n}\nion-menu ion-content .main-header div ion-label p ion-text {\n  font-size: 0.7rem;\n}\nion-menu ion-content .menu-items {\n  padding-left: 20px;\n}\nion-menu ion-content .menu-items ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n  border-left: 5px solid var(--ion-color-tertiary);\n}\nion-menu ion-content .menu-items ion-item.selected ion-label {\n  color: var(--ion-color-tertiary);\n  font-weight: bold;\n}\nion-menu ion-content .menu-items ion-item.selected ion-icon {\n  color: var(--ion-color-tertiary);\n}\nion-menu ion-footer ion-toolbar {\n  border-radius: 10px 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBSUEscUJBQUE7RUFDQSxpR0FBQTtBQUZKO0FBRkk7RUFDSSx5Q0FBQTtBQUlSO0FBQUk7RUFDUSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtGQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQUVaO0FBRFE7RUFDSSwwQkFBQTtBQUdaO0FBRlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQUloQjtBQUZZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7QUFLcEI7QUFKb0I7RUFDSSxpQkFBQTtBQU14QjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQURRO0VBQ0ksc0RBQUE7RUFDQSxnREFBQTtBQUdaO0FBRlk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBSWhCO0FBRFE7RUFDSSxnQ0FBQTtBQUdaO0FBR0k7RUFDSSw0QkFBQTtBQUFSIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgICBmb250LXN0eWxlOiB2ZXJkYW5hO1xuICAgICoge1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpKSk7XG4gICAgLm1haW4taGVhZGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMjV2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpIDAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgMTAwJSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTQuNXZoO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDN2aCk7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2aDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA3cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBpb24tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLW1lbnUgaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("  <ion-menu contentId=\"main-content\" type=\"overlay\">\n    <ion-content>\n      <ion-list class=\"ion-text-center main-header\">\n        <div align=\"center\">\n          <ion-avatar>\n            <img src=\"assets/imgs/logo.gif\" />\n          </ion-avatar>\n          <ion-label color=\"white\">\n            {{user?.name}}\n            <p>\n              <ion-text color=\"white\"></ion-text>\n            </p>\n          </ion-label>\n        </div>\n      </ion-list>\n\n      <ion-menu-toggle \n        class=\"menu-items\" \n        [autoHide]=\"false\" \n        *ngFor=\"let page of pages; let i = index\">\n        <ion-item \n          *ngIf=\"!page?.route\"\n          color=\"secondary\" \n          class=\"ion-padding-start\"\n          lines=\"none\" \n          detail=\"false\"\n          [routerLink]=\"[page.url]\"\n          routerDirection=\"root\"\n          routerLinkActive=\"selected\">\n          <ion-icon slot=\"start\" [ios]=\"page.icon + '-outline'\" [md]=\"page.icon + '-sharp'\"></ion-icon>\n          <ion-label>{{page.title}}</ion-label>\n        </ion-item>\n        <ion-item \n          *ngIf=\"page?.route\"\n          color=\"secondary\" \n          class=\"ion-padding-start\"\n          lines=\"none\" \n          detail=\"false\"\n          routerLink=\"welcome\"\n          (click)=\"signOut()\">\n          <ion-icon slot=\"start\" [ios]=\"page.icon + '-outline'\" [md]=\"page.icon + '-sharp'\"></ion-icon>\n          <ion-label>{{page.title}}</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map