webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(networkService) {
        this.networkService = networkService;
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_network_service__["a" /* NetworkService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_generator_service__ = __webpack_require__("../../../../../src/app/services/generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_music_service__ = __webpack_require__("../../../../../src/app/services/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_interceptor__ = __webpack_require__("../../../../../src/app/services/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_mdb_pro__ = __webpack_require__("../../../../ng-mdb-pro/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_music_search_music_search_component__ = __webpack_require__("../../../../../src/app/components/music-search/music-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_music_card_music_card_component__ = __webpack_require__("../../../../../src/app/components/music-card/music-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_audio_audio_component__ = __webpack_require__("../../../../../src/app/components/audio/audio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_generator_generator_component__ = __webpack_require__("../../../../../src/app/components/generator/generator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_music_search_music_search_component__["a" /* MusicSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_music_card_music_card_component__["a" /* MusicCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_audio_audio_component__["a" /* AudioComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_generator_generator_component__["a" /* GeneratorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng_mdb_pro__["a" /* MDBBootstrapModules */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11_ng_mdb_pro__["b" /* MDBSpinningPreloader */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_10__services_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
            __WEBPACK_IMPORTED_MODULE_5__services_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_4__services_music_service__["a" /* MusicService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_generator_service__["a" /* GeneratorService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_8__angular_core__["L" /* NO_ERRORS_SCHEMA */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_music_search_music_search_component__ = __webpack_require__("../../../../../src/app/components/music-search/music-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__["a" /* AuthComponent */] },
    { path: 'generator', component: __WEBPACK_IMPORTED_MODULE_0__components_music_search_music_search_component__["a" /* MusicSearchComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/audio/audio.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"range-field\">\n  <div class=\"track\">\n    <div class=\"range-cloud\" title=\"range\" [ngClass]=\"{'visible': this.visibility, 'hidden': !this.visibility}\" [ngStyle]=\"{'left': range + '%'}\">\n      <span class=\"text-transform\">{{range}}</span>\n    </div>\n  </div>\n  <input #slider step=\"1\" name=\"range\" type=\"range\" min=\"0\" max=\"100\" (focus)=\"visibility = true\" (blur)=\"visibility = false\"\n    [(ngModel)]=\"range\" (input)=\"change(slider.value)\" (click)=\"coverage()\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/audio/audio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/audio/audio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AudioComponent = (function () {
    function AudioComponent(cd) {
        this.cd = cd;
        this.range = 50;
    }
    AudioComponent.prototype.coverage = function () {
        if (typeof this.range === "string" && this.range.length !== 0) {
            return this.range;
        }
    };
    AudioComponent.prototype.change = function (value) {
        this.range = value;
        console.log(this.range);
    };
    AudioComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.range++;
            _this.cd.detectChanges();
        }, 500);
    };
    return AudioComponent;
}());
AudioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-audio',
        template: __webpack_require__("../../../../../src/app/components/audio/audio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/audio/audio.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object])
], AudioComponent);

var _a;
//# sourceMappingURL=audio.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(route, auth, router) {
        this.route = route;
        this.auth = auth;
        this.router = router;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.auth.accessToken = params.access_token;
            _this.auth.refreshToken = params.refresh_token;
            localStorage.setItem('access_token', params.access_token);
            localStorage.setItem('refresh_token', params.refresh_token);
            _this.router.navigateByUrl('/generator');
        });
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _c || Object])
], AuthComponent);

var _a, _b, _c;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/generator/generator.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<div class=\"row justify-content-center\" style=\"position:relative\">\n  <div *ngIf=\"result.length\" class=\"result row\">\n    <div *ngFor=\"let item of result\" class=\"col-12\">\n      <app-music-card [item]=\"item\"></app-music-card>\n    </div>\n  </div>\n</div>\n<hr>\n"

/***/ }),

/***/ "../../../../../src/app/components/generator/generator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/generator/generator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_search_music_search_component__ = __webpack_require__("../../../../../src/app/components/music-search/music-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_generator_service__ = __webpack_require__("../../../../../src/app/services/generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorComponent = (function () {
    function GeneratorComponent(generatorService) {
        this.generatorService = generatorService;
        this.result = [];
    }
    GeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generatorService.resultStream
            .subscribe(function (data) {
            _this.result = data.map(__WEBPACK_IMPORTED_MODULE_0__music_search_music_search_component__["b" /* toMusicCard */]);
        });
    };
    return GeneratorComponent;
}());
GeneratorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-generator',
        template: __webpack_require__("../../../../../src/app/components/generator/generator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/generator/generator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_generator_service__["a" /* GeneratorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_generator_service__["a" /* GeneratorService */]) === "function" && _a || Object])
], GeneratorComponent);

var _a;
//# sourceMappingURL=generator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/music-card/music-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"music-item d-flex z-depth-1 w-100 m-3\">\n  <div style=\"width: 128px; height: auto;\" class=\"img p-1\">\n    <img src=\"{{item.img}}\" alt=\"{{item.name}}\" class=\"img-fluid\">\n  </div>\n  <div class=\"mr-2 p-1 w-100 info\">\n    <div class=\"info-header d-flex flex-column\">\n      <div class=\"name\">{{item.name}}</div>\n      <small class=\"artist text-muted\">{{item.artist}}</small>\n    </div>\n    <hr class=\"my-1\">\n    <div class=\"preview\">\n      <span class=\"text-info\" *ngIf=\"!item.preview\">No preview</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/music-card/music-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/music-card/music-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_card_model__ = __webpack_require__("../../../../../src/app/components/music-card/music-card.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_card_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__music_card_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MusicCardComponent = (function () {
    function MusicCardComponent() {
    }
    MusicCardComponent.prototype.ngAfterViewInit = function () {
        var audio = document.getElementById('audio-' + this.item.id);
        if (audio) {
            audio.volume = 0.2;
        }
    };
    return MusicCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__music_card_model__["MusicCard"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__music_card_model__["MusicCard"]) === "function" && _a || Object)
], MusicCardComponent.prototype, "item", void 0);
MusicCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-music-card',
        template: __webpack_require__("../../../../../src/app/components/music-card/music-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/music-card/music-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MusicCardComponent);

var _a;
//# sourceMappingURL=music-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/music-card/music-card.model.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=music-card.model.js.map

/***/ }),

/***/ "../../../../../src/app/components/music-search/music-search.component.html":
/***/ (function(module, exports) {

module.exports = "<mdb-progress-bar *ngIf=\"showLoading\" class=\"progress primary-color-dark\" mode=\"indeterminate\"></mdb-progress-bar>\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-8\">\n      <div class=\"md-form\">\n        <input class=\"form-control\" type=\"text\" mdbActive [(ngModel)]=\"sentence\">\n        <button class=\"btn btn-sm btn-success\" mdbRippleRadius (click)=\"search()\">Search</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"result\">\n    <app-generator [items]=\"result\"></app-generator>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/music-search/music-search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/music-search/music-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = toMusicCard;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_generator_service__ = __webpack_require__("../../../../../src/app/services/generator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_music_service__ = __webpack_require__("../../../../../src/app/services/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








function toMusicCard(item) {
    var card = {
        name: item.name,
        img: item.album.images.filter(function (img) { return img.url != null; })[0].url,
        artist: item.artists[0].name,
        preview: item.preview_url,
        id: item.id
    };
    return card;
}
var MusicSearchComponent = (function () {
    function MusicSearchComponent(musicSerivce, generator) {
        this.musicSerivce = musicSerivce;
        this.generator = generator;
        this.term = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.result = [];
        this.showLoading = false;
    }
    MusicSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.musicSerivce.tracks()
            .subscribe(function (data) {
            console.log('got tracks');
            _this.result = data.tracks.items.map(toMusicCard);
        });
    };
    MusicSearchComponent.prototype.search = function () {
        console.log(this.sentence);
        this.generator.parseResult(this.sentence);
    };
    MusicSearchComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    MusicSearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return MusicSearchComponent;
}());
MusicSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-music-search',
        template: __webpack_require__("../../../../../src/app/components/music-search/music-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/music-search/music-search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_music_service__["a" /* MusicService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_generator_service__["a" /* GeneratorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_generator_service__["a" /* GeneratorService */]) === "function" && _b || Object])
], MusicSearchComponent);

var _a, _b;
//# sourceMappingURL=music-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = (function () {
    function AuthInterceptor(auth) {
        this.auth = auth;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authHeader = "Bearer " + this.auth.$accessToken;
        req = req.clone({
            setHeaders: {
                Authorization: authHeader
            }
        });
        return next.handle(req);
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    Object.defineProperty(AuthService.prototype, "$accessToken", {
        get: function () {
            return localStorage.getItem('access_token') || this.accessToken;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthService);

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/generator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneratorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__music_service__ = __webpack_require__("../../../../../src/app/services/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneratorService = (function () {
    function GeneratorService(musicService) {
        var _this = this;
        this.musicService = musicService;
        this.results = [];
        this.resultStream = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.allowedSearchResults = 100;
        this.currentSearchResults = 0;
        this.currentIndex = 0;
        this.done = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.done.subscribe(function (i) {
            var term = _this.searchTerms[_this.currentIndex];
            console.log('%c searching for ' + term, 'color: blue');
            _this.musicService.searchMusic(term)
                .subscribe(function (data) {
                for (var _i = 0, _a = data.tracks.items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.name.toLowerCase() === term.toLowerCase()) {
                        console.log('%c found song ' + item.name, 'color: green');
                        _this.results.push(item);
                        break;
                    }
                }
                _this.currentIndex++;
                if (_this.currentIndex < _this.searchTerms.length) {
                    _this.done.next();
                }
                else {
                    console.log('songs', _this.results.map(function (item) { return item.name; }));
                    var combos = _this.combinations(_this.results, 1);
                    for (var _b = 0, combos_1 = combos; _b < combos_1.length; _b++) {
                        var combo = combos_1[_b];
                        var newSentence = combo.map(function (item) { return item.name; }).join(' ').toLocaleLowerCase();
                        if (newSentence === _this.sentence.toLowerCase()) {
                            console.log(combo);
                            _this.resultStream.next(combo);
                            break;
                        }
                    }
                    _this.currentIndex = 0;
                }
            });
        });
    }
    GeneratorService.prototype.generatePlaylist = function (arr) {
        for (var i = void 0; i < arr.length; i++) {
            for (var j = void 0; j < arr.length; j++) {
            }
        }
    };
    GeneratorService.prototype.parseResult = function (sentence) {
        this.sentence = sentence;
        this.words = sentence.trim().split(' ');
        console.log(this.done);
        this.results = [];
        this.searchTerms = this.combine(this.words);
        console.log(this.searchTerms);
        this.done.next();
    };
    GeneratorService.prototype.combinations = function (a, min) {
        var fn = function (n, src, got, all) {
            if (n === 0) {
                if (got.length > 0) {
                    all[all.length] = got;
                }
                return;
            }
            for (var j = 0; j < src.length; j++) {
                fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
            }
            return;
        };
        var res = [];
        for (var i = min; i < a.length; i++) {
            fn(i, a, [], res);
        }
        res.push(a);
        return res;
    };
    GeneratorService.prototype.combine = function (array) {
        var result = [];
        result.push(array);
        for (var length = 2; length <= array.length; length++) {
            for (var startIndex = 0; startIndex < array.length; startIndex++) {
                var temp = [];
                var count = startIndex;
                for (var index = 0; index < length - 1; index++) {
                    temp.push(array[count++]);
                }
                result.push(temp);
            }
        }
        result = result.filter(function (a) {
            return !a.includes(undefined);
        });
        return result.map(function (a) { return a.join(' '); });
    };
    GeneratorService.prototype.makeWord = function (indecies) {
        var term = '';
        for (var _i = 0, indecies_1 = indecies; _i < indecies_1.length; _i++) {
            var index = indecies_1[_i];
            term += this.words[index] + ' ';
        }
        return term.trim();
    };
    GeneratorService.prototype.searchForTerm = function (term) {
        return this.musicService.searchMusic(term);
    };
    return GeneratorService;
}());
GeneratorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__music_service__["a" /* MusicService */]) === "function" && _a || Object])
], GeneratorService);

var _a;
//# sourceMappingURL=generator.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__network_service__ = __webpack_require__("../../../../../src/app/services/network.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MusicService = (function () {
    function MusicService(networkService) {
        this.networkService = networkService;
        this.currentOffset = 0;
        this.musicTracks = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.noop = function () { };
    }
    MusicService.prototype.tracks = function () {
        return this.musicTracks.asObservable();
    };
    MusicService.prototype.searchMusic = function (term) {
        var url = "https://api.spotify.com/v1/search";
        var params = [
            { key: 'q', value: term },
            { key: 'type', value: 'track' },
            { key: 'client_id', value: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].spotifyClientID },
            { key: 'limit', value: 50 },
            { key: 'offset', value: this.currentOffset }
        ];
        return this.networkService.get(url, params);
    };
    return MusicService;
}());
MusicService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__network_service__["a" /* NetworkService */]) === "function" && _a || Object])
], MusicService);

var _a;
//# sourceMappingURL=music.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/network.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpotifyBaseUrl */
/* unused harmony export Backend */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpotifyBaseUrl = 'https://api.spotify.com/v1/';
var Backend = 'http://localhost:3000/';
var NetworkService = (function () {
    function NetworkService(http) {
        this.http = http;
    }
    NetworkService.prototype.reqAuth = function () {
        this.http.get(Backend + 'token')
            .subscribe(function (data) {
            console.log(data);
        });
    };
    NetworkService.prototype.get = function (url, params) {
        var a = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var p = params_1[_i];
            a = a.append(p.key, p.value);
        }
        ;
        return this.http.get(url, { params: a });
    };
    return NetworkService;
}());
NetworkService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], NetworkService);

var _a;
//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    spotifyClientID: 'c68e640cba9b4b7f923d48f633940fa5',
    sporifySecret: '331b267483b14fe6a88988493adfed39'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map