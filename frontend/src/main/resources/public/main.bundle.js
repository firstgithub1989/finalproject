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

/***/ "../../../../../src/app/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}\r\n.alert h4{margin-top:0;color:inherit}\r\n.alert .alert-link{font-weight:700}\r\n.alert>p,\r\n.alert>ul{margin-bottom:0}\r\n.alert>p+p{margin-top:5px}\r\n.alert-dismissable{padding-right:35px}\r\n.alert-dismissable .close{position:relative;top:-2px;right:-21px;color:inherit}\r\n.alert-success{background-color:#dff0d8;border-color:#d6e9c6;color:#3c763d}\r\n.alert-success hr{border-top-color:#c9e2b3}\r\n.alert-success .alert-link{color:#2b542c; float: centre}\r\n.alert-info{background-color:#d9edf7;border-color:#bce8f1;color:#31708f}\r\n.alert-info hr{border-top-color:#a6e1ec}\r\n.alert-info .alert-link{color:#245269}\r\n.alert-warning{background-color:#fcf8e3;border-color:#faebcc;color:#8a6d3b}\r\n.alert-warning hr{border-top-color:#f7e1b5}\r\n.alert-warning .alert-link{color:#66512c}\r\n.alert-danger{background-color:#f2dede;border-color:#ebccd1;color:#a94442}\r\n.alert-danger hr{border-top-color:#e4b9c0}\r\n.alert-danger .alert-link{color:#843534}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\r\n    {{alert.message}}\r\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_alert__ = __webpack_require__("../../../../../src/app/common/alert.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_1__common_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_1__common_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_1__common_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_1__common_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_alert__ = __webpack_require__("../../../../../src/app/common/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__common_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__common_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__common_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__common_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: auto;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: right;\r\n}\r\n\r\nli a {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: left;\r\n    padding: 14px 20px;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\nli a:hover {\r\n    background-color: rgba(11, 17, 43, 0.068);\r\n}\r\n\r\nli.dropdown {\r\n    display: inline-block;\r\n    overflow: auto;\r\n    padding: 14px 16px;\r\n    background-color: rgba(7, 18, 48, 0.267);\r\n}\r\n\r\nli.title {\r\n    float: left;\r\n    color: white;\r\n    text-align: left;\r\n    padding: 20px 16px;\r\n    text-decoration: none;\r\n    font-size: 24px;\r\n}\r\n\r\n.navigation {\r\n    background-color: rgba(7, 18, 48, 0.267);\r\n    overflow: hidden;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 100px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n  }\r\n  \r\n  .navigation .icon {\r\n    display: none;\r\n  }\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n@media(max-width:800px){\r\n    .navigation {\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    }\r\n}\r\n\r\ninput[type=submit] {\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    background-color: chocolate;\r\n}\r\n\r\ninput[type=text]{\r\n    padding: 5px 5px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    background-color:rgb(245, 235, 235);\r\n    border: 2px solid lightblue;\r\n    border-radius: 4px;\r\n}\r\n\r\ninput[type=number]{\r\n    padding: 5px 5px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    background-color:rgb(245, 235, 235);\r\n    border: 2px solid lightblue;\r\n    border-radius: 4px;\r\n}\r\n\r\nspan {\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <div style=\"text-align:center\">{{appTitle}}</div> -->\r\n<!-- <app-ticker></app-ticker> -->\r\n<!-- <nav><a class =\"nav-link\" [routerLink] = \"['graph-cmp']\">New component</a></nav> -->\r\n<div class=\"navigation\">\r\n    <!-- <a class='top-header' [routerLink]=\"['app-ticker']\">market</a> -->\r\n    <ul class=\"navigation\">\r\n      <li class='title'>WELCOME TO CRYPTOTRADE </li>\r\n      <li href=\"javascript:void(0);\" class=\"icon\"></li>\r\n      <li *ngIf=\"!auth\" class=\"navigation\">\r\n        <a [routerLink]=\"['/app-auth']\">LOGIN</a>\r\n      </li>\r\n      <li  *ngIf=\"auth\" class=\"navigation\"  (click)=\"logout()\">\r\n        <a href=\"\">LOGOUT</a>\r\n      </li>\r\n      <li class=\"dropdown\" *ngIf=\"auth\">\r\n        <a href=\"javascript:void(0)\" class=\"dropbtn\">PROFILE</a>\r\n        <div class=\"dropdown-content\">\r\n          <a class='uppercase' [routerLink]=\"['/app-profile']\" >MY PROFILE</a>\r\n        </div>\r\n      </li>\r\n\r\n      <li *ngIf=\"!auth\" class=\"navigation\">\r\n        <a [routerLink]=\"['/app-register']\">REGISTER</a>\r\n      </li>\r\n      <li class=\"dropdown\" *ngIf=\"auth\">\r\n        <a href=\"javascript:void(0)\" class=\"dropbtn\">BALANCES</a>\r\n        <div class=\"dropdown-content\">\r\n            <a class='uppercase' [routerLink]=\"['/coinwallet']\" *ngIf=\"auth\">COIN WALLET</a>\r\n          \r\n            <a class='uppercase' [routerLink]=\"['/buysellhistory']\" *ngIf=\"auth\">PURCHASE HISTORY</a>\r\n            \r\n            <a class='uppercase' [routerLink]=\"['/history']\" *ngIf=\"auth\">PAYMENT HISTORY</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"navigation\">\r\n        <a [routerLink]=\"['']\">MARKETPLACE</a>\r\n      </li>\r\n    </ul>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(router) {
        this.router = router;
        this.appTitle = 'Trade here';
        // authGuard.canActivate(null, null);
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.auth = true;
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        window.location.reload();
        this.router.navigate(['/marketplace']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticker_ticker_component__ = __webpack_require__("../../../../../src/app/ticker/ticker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticker_ticker_service__ = __webpack_require__("../../../../../src/app/ticker/ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__ = __webpack_require__("../../../../../src/app/graph/graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_nvd3__ = __webpack_require__("../../../../ngx-nvd3/dist/ngx-nvd3/ngx-nvd3.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_auth_component__ = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__buysell_buysell_component__ = __webpack_require__("../../../../../src/app/buysell/buysell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__balances_balances_balances_component__ = __webpack_require__("../../../../../src/app/balances/balances/balances.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__balances_balances_balances_service__ = __webpack_require__("../../../../../src/app/balances/balances/balances.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__balances_inrwallet_inrwallet_component__ = __webpack_require__("../../../../../src/app/balances/inrwallet/inrwallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__balances_coinwallet_coinwallet_component__ = __webpack_require__("../../../../../src/app/balances/coinwallet/coinwallet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__balances_history_history_component__ = __webpack_require__("../../../../../src/app/balances/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__balances_inrwallet_inrwallet_service__ = __webpack_require__("../../../../../src/app/balances/inrwallet/inrwallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__buysell_buy_sell_services_service__ = __webpack_require__("../../../../../src/app/buysell/buy-sell-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__balances_history_history_service__ = __webpack_require__("../../../../../src/app/balances/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__balances_coinwallet_coinwallet_service__ = __webpack_require__("../../../../../src/app/balances/coinwallet/coinwallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__auth_register_component__ = __webpack_require__("../../../../../src/app/auth/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__alert_alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__balances_history_buysellhistory_component__ = __webpack_require__("../../../../../src/app/balances/history/buysellhistory.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__ticker_ticker_component__["a" /* TickerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */],
            __WEBPACK_IMPORTED_MODULE_14__auth_auth_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_16__buysell_buysell_component__["a" /* BuysellComponent */],
            __WEBPACK_IMPORTED_MODULE_17__balances_balances_balances_component__["a" /* BalancesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__balances_inrwallet_inrwallet_component__["a" /* InrwalletComponent */],
            __WEBPACK_IMPORTED_MODULE_20__balances_coinwallet_coinwallet_component__["a" /* CoinwalletComponent */],
            __WEBPACK_IMPORTED_MODULE_21__balances_history_history_component__["a" /* HistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_24__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_29__auth_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_30__alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_32__balances_history_buysellhistory_component__["a" /* BuySellHistoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_nvd3__["NvD3Module"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */].forRoot([
                {
                    path: 'app-auth',
                    component: __WEBPACK_IMPORTED_MODULE_14__auth_auth_component__["a" /* AuthenticationComponent */]
                },
                {
                    path: 'graph-cmp',
                    component: __WEBPACK_IMPORTED_MODULE_7__graph_graph_component__["a" /* GraphComponent */]
                },
                {
                    path: '', redirectTo: '/marketplace', pathMatch: 'full'
                },
                {
                    path: 'marketplace',
                    component: __WEBPACK_IMPORTED_MODULE_5__ticker_ticker_component__["a" /* TickerComponent */]
                },
                {
                    path: 'coinwallet',
                    component: __WEBPACK_IMPORTED_MODULE_20__balances_coinwallet_coinwallet_component__["a" /* CoinwalletComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'history',
                    component: __WEBPACK_IMPORTED_MODULE_21__balances_history_history_component__["a" /* HistoryComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'buysellhistory',
                    component: __WEBPACK_IMPORTED_MODULE_32__balances_history_buysellhistory_component__["a" /* BuySellHistoryComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'buysell/:fromSym/:toSym/:rate',
                    component: __WEBPACK_IMPORTED_MODULE_16__buysell_buysell_component__["a" /* BuysellComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'app-profile',
                    component: __WEBPACK_IMPORTED_MODULE_24__profile_profile_component__["a" /* ProfileComponent */],
                    canActivate: [__WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */]]
                },
                {
                    path: 'app-register',
                    component: __WEBPACK_IMPORTED_MODULE_29__auth_register_component__["a" /* RegisterComponent */]
                }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__ticker_ticker_service__["a" /* TickerService */], __WEBPACK_IMPORTED_MODULE_28__balances_coinwallet_coinwallet_service__["a" /* CoinwalletService */], __WEBPACK_IMPORTED_MODULE_15__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__balances_balances_balances_service__["a" /* BalancesService */], __WEBPACK_IMPORTED_MODULE_22__balances_inrwallet_inrwallet_service__["a" /* InrwalletService */], __WEBPACK_IMPORTED_MODULE_27__balances_history_history_service__["a" /* HistoryService */],
            __WEBPACK_IMPORTED_MODULE_23__buysell_buy_sell_services_service__["a" /* BuySellServicesService */], __WEBPACK_IMPORTED_MODULE_25__profile_profile_service__["a" /* ProfileService */], __WEBPACK_IMPORTED_MODULE_26__auth_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_31__alert_alert_service__["a" /* AlertService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\r\n    margin: 50px 100px;\r\n    float: centre;\r\n}\r\n\r\ntable {\r\n    float: centre;\r\n    width: 20%\r\n}\r\n\r\n.loading {\r\n\tcolor: darkslategray;\r\n\tfont-weight: 500;\r\n}\r\n\r\n.form-style-8{\r\n\tfont-family: 'Open Sans Condensed', arial, sans;\r\n\twidth: 400px;\r\n\tpadding: 30px;\r\n    background: rgba(214, 198, 198, 0.144);\r\n    margin: 50px auto;\r\n\tbox-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\r\n\t-moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);\r\n\t-webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);\r\n}\r\n.form-style-8 h2{\r\n\tbackground: #4D4D4D;\r\n\ttext-transform: uppercase;\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n\tcolor: #797979;\r\n\tfont-size: 18px;\r\n\tfont-weight: 100;\r\n\tpadding: 20px;\r\n\tmargin: -30px -30px 30px -30px;\r\n}\r\n.form-style-8 input[type=\"text\"],\r\n.form-style-8 input[type=\"date\"],\r\n.form-style-8 input[type=\"datetime\"],\r\n.form-style-8 input[type=\"email\"],\r\n.form-style-8 input[type=\"number\"],\r\n.form-style-8 input[type=\"search\"],\r\n.form-style-8 input[type=\"time\"],\r\n.form-style-8 input[type=\"url\"],\r\n.form-style-8 input[type=\"password\"],\r\n.form-style-8 textarea,\r\n.form-style-8 select \r\n{\r\n\tbox-sizing: border-box;\r\n\t-webkit-box-sizing: border-box;\r\n\t-moz-box-sizing: border-box;\r\n\toutline: none;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 7px;\r\n\tborder: none;\r\n\tborder-bottom: 1px solid rgb(194, 181, 181);\r\n\tbackground: transparent;\r\n\tmargin-bottom: 10px;\r\n\tfont: 16px Arial, Helvetica, sans-serif;\r\n\theight: 45px;\r\n}\r\n.form-style-8 textarea{\r\n\tresize:none;\r\n\toverflow: hidden;\r\n}\r\n.form-style-8 input[type=\"button\"], \r\n.form-style-8 input[type=\"submit\"]{\r\n\tbox-shadow: inset 0px 1px 0px 0px #45D6D6;\r\n\tbackground-color: rgb(44, 142, 187);\r\n\tdisplay: inline-block;\r\n\tcursor: pointer;\r\n\tcolor: #FFFFFF;\r\n\tfont-family: 'Open Sans Condensed', sans-serif;\r\n\tfont-size: 14px;\r\n\tpadding: 8px 18px;\r\n\ttext-decoration: none;\r\n\ttext-transform: uppercase;\r\n}\r\n.form-style-8 input[type=\"button\"]:hover, \r\n.form-style-8 input[type=\"submit\"]:hover {\r\n\tbackground:linear-gradient(to bottom, #34CACA 5%, #30C9C9 100%);\r\n\tbackground-color:#34CACA;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n\tborder-left: 5px solid #42A948; /* green */\r\n}\r\n  \r\n  .ng-invalid:not(form)  {\r\n\tborder-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.form-control-feedback p {\r\n\tcolor: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\r\n<form class=\"form-style-8\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n    <p class='loading'>{{loading}}</p> \r\n    <div>\r\n        <div class=\"form-group\"\r\n        [ngClass]=\"{\r\n       'has-danger': userName.invalid && (userName.dirty || userName.touched),\r\n       'has-success': userName.valid && (userName.dirty || userName.touched)\r\n        }\">\r\n      <label>User</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"userName\"\r\n             required\r\n             [(ngModel)]=\"model.userName\"\r\n             #userName=\"ngModel\">\r\n             <div class=\"form-control-feedback\"\r\n             *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\r\n             <p *ngIf=\"userName.errors.required\">User name is required</p>\r\n         </div>  \r\n      </div>\r\n    </div>\r\n  \r\n    <div>\r\n        <div class=\"form-group\"\r\n        [ngClass]=\"{\r\n       'has-danger': password.invalid && (password.dirty || password.touched),\r\n       'has-success': password.valid && (password.dirty || password.touched)\r\n        }\">\r\n      <label>Password</label>\r\n      <input type=\"password\"\r\n             class=\"form-control\"\r\n             name=\"password\"\r\n             required\r\n             minlength=\"5\"\r\n             maxlength=\"10\"\r\n             [(ngModel)]=\"model.password\"#password=\"ngModel\">\r\n\r\n      <div class=\"form-control-feedback\"\r\n             *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n             <p *ngIf=\"password.errors.required\">Password name is required</p>\r\n             <p *ngIf=\"password.errors.minlength\">Min length should be 5</p>\r\n             <p *ngIf=\"password.errors.maxlength\">Max length should be 10</p>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <input type=\"submit\" value=\"Login\" [disabled]=\"f.invalid\"/>\r\n  </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_SignUp__ = __webpack_require__("../../../../../src/app/common/SignUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService, route, router, alertService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        console.log('AuthComponent Contructor');
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_3__common_SignUp__["a" /* Signup */]();
    };
    AuthenticationComponent.prototype.login = function () {
        var _this = this;
        this.alertService.clear();
        if (this.form.valid) {
            this.loading = 'Loading...';
            console.log('login request' + this.model.password + this.model.userName);
            this.authService.login(this.model.userName, this.model.password)
                .subscribe(function (response) {
                if (response['status'] === 204) {
                    _this.alertService.error('Bad Credentials');
                    _this.loading = '';
                }
                else {
                    _this.loading = '';
                    localStorage.setItem('currentUser', response['_body']);
                    window.location.reload();
                    _this.router.navigate(['/marketplace']);
                }
            });
        }
        // window.location.reload();
    };
    return AuthenticationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", Object)
], AuthenticationComponent.prototype, "form", void 0);
AuthenticationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Native
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], AuthenticationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/app-auth']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
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
    function AuthService(http, httpHeaders) {
        this.http = http;
        this.httpHeaders = httpHeaders;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthService.prototype.login = function (userName, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.headers = headers;
        options.withCredentials = true;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].GATEWAY + 'login', options);
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].GATEWAY + 'register', model);
    };
    return AuthService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AuthService.prototype, "change", void 0);
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\r\n<form [style.visibility]=\"hiddenValue\" class=\"form-style-8\" (ngSubmit)=\"register()\" #f=\"ngForm\">\r\n    <p class='loading'>{{loading}}</p> \r\n    <div>\r\n        <div class=\"form-group\"\r\n        [ngClass]=\"{\r\n       'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\r\n       'has-success': firstName.valid && (firstName.dirty || firstName.touched)\r\n        }\">\r\n        <label>First Name</label>\r\n        <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"firstName\"\r\n             required\r\n             [(ngModel)]=\"model.firstName\"\r\n             #firstName=\"ngModel\">\r\n        <div class=\"form-control-feedback\"\r\n            *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\r\n            <p *ngIf=\"firstName.errors.required\">First name is required</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"form-group\"\r\n        [ngClass]=\"{\r\n       'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\r\n       'has-success': lastName.valid && (lastName.dirty || lastName.touched)\r\n        }\">\r\n      <label>Last Name</label>\r\n      <input type=\"text\"\r\n             class=\"form-control\"\r\n             name=\"lastName\"\r\n             required\r\n             [(ngModel)]=\"model.lastName\"\r\n             #lastName=\"ngModel\">\r\n             <div class=\"form-control-feedback\"\r\n                 *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\r\n                 <p *ngIf=\"lastName.errors.required\">Last name is required</p>\r\n             </div>\r\n            </div>\r\n    </div>\r\n \r\n\r\n    <div>\r\n        <div class=\"form-group\"\r\n        [ngClass]=\"{\r\n       'has-danger': userName.invalid && (userName.dirty || userName.touched),\r\n       'has-success': userName.valid && (userName.dirty || userName.touched)\r\n        }\">\r\n    <label>UserName</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           name=\"userName\"\r\n           id=\"userName\"\r\n           [(ngModel)]=\"model.userName\" required\r\n           #userName=\"ngModel\">\r\n       \r\n        <div class=\"form-control-feedback\"\r\n           *ngIf=\"userName.errors && (userName.dirty || userName.touched)\">\r\n           <p *ngIf=\"userName.errors.required\">User name is required</p>\r\n       </div>    \r\n      </div>\r\n  </div>\r\n\r\n  <div>\r\n      <div class=\"form-group\"\r\n      [ngClass]=\"{\r\n     'has-danger': password.invalid && (password.dirty || password.touched),\r\n     'has-success': password.valid && (password.dirty || password.touched)\r\n      }\">\r\n    <label>Password</label>\r\n    <input type=\"password\"\r\n           class=\"form-control\"\r\n           name=\"password\"\r\n           required\r\n           minlength=\"5\"\r\n           maxlength=\"10\"\r\n           [(ngModel)]=\"model.password\"\r\n           #password=\"ngModel\">\r\n      \r\n           <div class=\"form-control-feedback\"\r\n           *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n           <p *ngIf=\"password.errors.required\">Password name is required</p>\r\n           <p *ngIf=\"password.errors.minlength\">Min length should be 5</p>\r\n           <p *ngIf=\"password.errors.maxlength\">Max length should be 10</p>\r\n       </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div>\r\n      <div class=\"form-group\"\r\n      [ngClass]=\"{\r\n     'has-danger': address.invalid && (address.dirty || address.touched),\r\n     'has-success': address.valid && (address.dirty || address.touched)\r\n      }\">\r\n    <label>Address</label>\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           name=\"address\"\r\n           required\r\n           [(ngModel)]=\"model.address\"\r\n           #address=\"ngModel\">\r\n      \r\n      <div class=\"form-control-feedback\"\r\n           *ngIf=\"address.errors && (address.dirty || address.touched)\">\r\n           <p *ngIf=\"address.errors.required\">Address is required</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <input type=\"submit\" value=\"Submit\" [disabled]=\"f.invalid\"/>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_SignUp__ = __webpack_require__("../../../../../src/app/common/SignUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(authService, alertService, route, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__common_SignUp__["a" /* Signup */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.alertService.clear();
        if (this.form.valid) {
            console.log(this.model);
            this.loading = 'Loading';
            this.authService.register(this.model).subscribe(function (response) {
                console.log(response['_body']);
                if (response['status'] === 226) {
                    _this.alertService.error(response['_body']);
                    _this.loading = '';
                }
                else {
                    _this.loading = '';
                    _this.alertService.success(response['_body'] + '. Redirecting to Login Page... '
                        + 'in 3 seconds', true);
                    _this.hiddenValue = 'hidden';
                    setTimeout(function () {
                        _this.router.navigate(['/app-auth']);
                    }, 3000);
                }
            });
        }
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
    __metadata("design:type", Object)
], RegisterComponent.prototype, "form", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/auth/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Native
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/balances/balances.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 40%;\r\n}\r\n\r\nth, td, tr {\r\n    padding: 8px;\r\n    text-align: left;\r\n    border-bottom: 1px solid rgb(198, 221, 241);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/balances/balances/balances.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <table class=\"table\">\r\n      <tr>\r\n          <th>COIN</th>\r\n          <th>TOTAL</th> \r\n          <th>INORDERS</th>\r\n          <th>AVAILABLE</th>\r\n        </tr>\r\n    <tr *ngFor=\"let koinWallet of koinWallets\">\r\n        \r\n      <td>{{koinWallet.coinName}}</td>\r\n      <td>{{koinWallet.total}}</td>\r\n      <td>{{koinWallet.inOrders}}</td>\r\n      <td>{{koinWallet.available}}</td>\r\n    </tr> \r\n  </table>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/balances/balances/balances.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__balances_service__ = __webpack_require__("../../../../../src/app/balances/balances/balances.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BalancesComponent = (function () {
    function BalancesComponent(balancesService) {
        this.balancesService = balancesService;
    }
    BalancesComponent.prototype.ngOnInit = function () {
        this.koinWallets = [];
        this.getCoinWallet();
    };
    BalancesComponent.prototype.getCoinWallet = function () {
        var _this = this;
        this.balancesService.getCoinWallet(this.userName).subscribe(function (res) {
            console.log(res);
            _this.koinWallets = res;
        }
        // this.koinWallets.push(new KoinWallets(res["coinName"],
        //   res["total"], res["inOrders"], res["available"]
        );
    };
    BalancesComponent.prototype.getInrWallet = function () {
        this.balancesService.getINRWallet(this.userName);
    };
    BalancesComponent.prototype.getTranHistory = function () {
        this.balancesService.getTransactionHistory(this.userName);
    };
    BalancesComponent.prototype.getTradeHistory = function () {
        this.balancesService.getTradeHistory(this.userName);
    };
    return BalancesComponent;
}());
BalancesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-balances',
        template: __webpack_require__("../../../../../src/app/balances/balances/balances.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balances/balances/balances.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__balances_service__["a" /* BalancesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__balances_service__["a" /* BalancesService */]) === "function" && _a || Object])
], BalancesComponent);

var _a;
//# sourceMappingURL=balances.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/balances/balances.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BalancesService = (function () {
    function BalancesService(http) {
        this.http = http;
    }
    BalancesService.prototype.getCoinWallet = function (userName) {
        return this.http.get('../assets/data.json');
    };
    BalancesService.prototype.getINRWallet = function (userName) {
        return null;
    };
    BalancesService.prototype.getTransactionHistory = function (username) {
        return null;
    };
    BalancesService.prototype.getTradeHistory = function (username) {
        return null;
    };
    return BalancesService;
}());
BalancesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], BalancesService);

var _a;
//# sourceMappingURL=balances.service.js.map

/***/ }),

/***/ "../../../../../src/app/balances/coinwallet/coinwallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Create three unequal columns that floats next to each other */\r\n\r\n/* Middle column */\r\n.column {\r\n    float: left;\r\n    width: 30%;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    color: black;\r\n    font-size: 34px;\r\n    \r\n}\r\n\r\nlabel {\r\n    font: outline;\r\n    font-size: 25px;\r\n    font-style: italic\r\n}\r\n\r\nbutton  {\r\n    padding: 12px 20px;\r\n    margin-left: 80px;\r\n    box-sizing: border-box;\r\n    background-color: lavender;\r\n}\r\n\r\nbutton:hover {\r\n    background-color:darkgray;   \r\n}\r\n\r\ninput[type=submit] {\r\n    padding: 12px 20px;\r\n    margin-left: 80px;\r\n    box-sizing: border-box;\r\n    background-color:lavender;\r\n    \r\n}\r\n\r\ninput[type=text], input[type=number]{\r\n    padding: 5px 5px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    background-color:rgb(245, 235, 235);\r\n    border: 2px solid rgba(140, 146, 150, 0.925);\r\n    border-radius: 4px;\r\n}\r\n\r\np {\r\n    overflow: wrap;\r\n    color: red;\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    float: left;\r\n    min-width: 30px;\r\n    width: 80px;\r\n    min-height: 30px;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    color: #777;\r\n    font-weight: 3000;\r\n    background-color: #fff;\r\n    box-shadow: 1px 2px 10px -2px rgba(0,0,0,0.3);\r\n    border-radius: 3px;\r\n    transition: all 375ms ease-in-out;\r\n}\r\n\r\n\r\n@media(max-width:800px){\r\n    .column {\r\n        width: 100%;\r\n        float:none;\r\n    }\r\n    .dropdown {\r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/balances/coinwallet/coinwallet.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\r\n<div>\r\n  <h1>\r\n    Coin Wallet \r\n  </h1>\r\n  <select class=\"dropdown\" id=\"option\" (change)=\"onOptionSelect($event)\" >\r\n      <option class=\"option\" *ngFor='let option of curOptions' [value]=\"option\">{{option}}</option>\r\n  </select>\r\n</div>\r\n<br>\r\n\r\n<div class=\"column\">\r\n  <br>\r\n  <br>\r\n  <h1>{{option}} Balance</h1>\r\n  <h2>{{option}} {{coinAmount}}</h2>\r\n</div>\r\n\r\n\r\n<div class=\"column\">\r\n  <h1>Amount Deposit</h1>\r\n  <form  (ngSubmit)=\"depositAmount()\">\r\n      <label for=\"amountD\">Amount</label>\r\n      <input type=\"number\" id=\"amountD\" name=\"amountD\" [(ngModel)]=\"amountD\" min=\"0\">\r\n      <br>\r\n      <br>\r\n      <div>\r\n        <button type=\"submit\"\r\n          class=\"btn btn-primary\" [disabled]= \"0 > amountD\">Deposit\r\n        </button>\r\n        <p  *ngIf=\"0 > amountD\" value='true'>Negative Number Not Allowed</p>\r\n      </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"column\">\r\n  <h1>Amount Withdrawal</h1>\r\n  <form (ngSubmit)=\"withdrawAmount()\">\r\n      <label for=\"amountW\">Amount</label>\r\n      <input type=\"number\" id=\"amountW\" name=\"amountW\" [(ngModel)]=\"amountW\" min=\"0\">\r\n      <br>\r\n      <br>\r\n      <div>\r\n        <button type=\"submit\"\r\n          class=\"btn btn-primary\" [disabled]= \"0 > amountW\">Withdraw\r\n        </button>\r\n        <p  *ngIf=\"0 > amountW\" value='true'>Negative Number Not Allowed</p>\r\n      </div>\r\n  </form>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/balances/coinwallet/coinwallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinwalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coinwallet_service__ = __webpack_require__("../../../../../src/app/balances/coinwallet/coinwallet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoinwalletComponent = (function () {
    function CoinwalletComponent(coinWalletService, alertService) {
        this.coinWalletService = coinWalletService;
        this.alertService = alertService;
    }
    CoinwalletComponent.prototype.ngOnInit = function () {
        this.curOptions = __WEBPACK_IMPORTED_MODULE_3__common_appsettings__["a" /* AppSetting */].COINLIST;
        this.option = 'BTC';
        this.getCoinWallet();
    };
    CoinwalletComponent.prototype.onOptionSelect = function (event) {
        this.option = event.target.value;
        this.getCoinWallet();
    };
    CoinwalletComponent.prototype.getCoinWallet = function () {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.coinWalletService.getCoinWallet(userId, this.option).subscribe(function (res) {
            console.log(res);
            _this.coinAmount = res['_body'];
        });
    };
    CoinwalletComponent.prototype.withdrawAmount = function () {
        var _this = this;
        console.log('withdrawing');
        this.alertService.clear();
        var userId = localStorage.getItem('currentUser');
        this.coinWalletService.withDrawAmount(userId, this.option, this.amountW).subscribe(function (response) {
            if (response['status'] === 416) {
                _this.alertService.error(response['_body']);
            }
            else {
                _this.alertService.success(response['_body']);
                _this.getCoinWallet();
            }
        });
    };
    CoinwalletComponent.prototype.depositAmount = function () {
        var _this = this;
        console.log('depositing');
        this.alertService.clear();
        var userId = localStorage.getItem('currentUser');
        this.coinWalletService.depositAmount(userId, this.option, this.amountD).subscribe(function (response) {
            console.log(response);
            _this.alertService.success(response['_body']);
            _this.getCoinWallet();
        });
    };
    return CoinwalletComponent;
}());
CoinwalletComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-coinwallet',
        template: __webpack_require__("../../../../../src/app/balances/coinwallet/coinwallet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balances/coinwallet/coinwallet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__coinwallet_service__["a" /* CoinwalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__coinwallet_service__["a" /* CoinwalletService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__alert_alert_service__["a" /* AlertService */]) === "function" && _b || Object])
], CoinwalletComponent);

var _a, _b;
//# sourceMappingURL=coinwallet.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/coinwallet/coinwallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinwalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinwalletService = (function () {
    function CoinwalletService(http) {
        this.http = http;
    }
    CoinwalletService.prototype.getCoinWallet = function (userId, coinName) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('user', userId);
        params.set('coinName', coinName);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].PAYMENT + 'getBalanceAmount/', options);
    };
    CoinwalletService.prototype.withDrawAmount = function (userId, coinName, amount) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('user', userId);
        params.set('coinName', coinName);
        params.set('amount', amount);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].PAYMENT + 'withdraw', null, options);
    };
    CoinwalletService.prototype.depositAmount = function (userId, coinName, amount) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('user', userId);
        params.set('coinName', coinName);
        params.set('amount', amount);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].PAYMENT + 'deposit', null, options);
    };
    return CoinwalletService;
}());
CoinwalletService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CoinwalletService);

var _a;
//# sourceMappingURL=coinwallet.service.js.map

/***/ }),

/***/ "../../../../../src/app/balances/history/buysellhistory.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1>\r\n      Transaction History\r\n    </h1>\r\n    <select class=\"dropdown\"  id=\"option\" (change)=\"onOptionSelect($event)\" >\r\n        <option *ngFor='let option of curOptions' [value]=\"option\">{{option}}</option>\r\n    </select>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n    <div >\r\n      <ul class=\"column\">\r\n      <h2>Buy</h2>\r\n      <table>\r\n        <tr>\r\n            <th>Coin Name</th> \r\n            <th>Volume</th> \r\n            <th>Rate</th>\r\n            <th>From Coin</th>\r\n            <th>Purchase Date</th>\r\n        </tr>\r\n        <tr *ngFor=\"let buyHistory of buyHistory | paginate: { id: 'buy', itemsPerPage: 10, currentPage: pB, totalItems: totalB }\">\r\n          <td>{{buyHistory.coinName}}</td>\r\n          <td>{{buyHistory.volume}}</td>\r\n          <td>{{buyHistory.rate}}</td>\r\n          <td>{{buyHistory.fromSym}}</td>\r\n          <td>{{buyHistory.purchaseDate}}</td>\r\n        </tr> \r\n      </table>\r\n      <br>\r\n      <br>\r\n      <pagination-controls (pageChange)=\"getBuyTnxHistory($event)\" id=\"buy\"></pagination-controls>\r\n      \r\n    </ul>\r\n  </div>\r\n  <div>\r\n    <ul   class=\"column\">\r\n      <h2>Sell</h2>\r\n      <table>\r\n        <tr>\r\n            <th>Coin Name</th> \r\n            <th>Volume</th> \r\n            <th>Rate</th>\r\n            <th>From Coin</th>\r\n            <th>Purchase Date</th>\r\n        </tr>\r\n        <tr *ngFor=\"let sellHistory of sellHistory | paginate: { id: 'sell', itemsPerPage: 10, currentPage: pS, totalItems: totalS }\">\r\n          <td>{{sellHistory.coinName}}</td>\r\n          <td>{{sellHistory.volume}}</td>\r\n          <td>{{sellHistory.rate}}</td>\r\n          <td>{{sellHistory.fromSym}}</td>\r\n          <td>{{sellHistory.purchaseDate}}</td>\r\n        </tr> \r\n      </table>\r\n      <br>\r\n      <br>\r\n      <pagination-controls (pageChange)=\"getSellTnxHistory($event)\" id=\"sell\"></pagination-controls>\r\n        \r\n    </ul>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/balances/history/buysellhistory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("../../../../../src/app/balances/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_BuySellDetails__ = __webpack_require__("../../../../../src/app/common/BuySellDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuySellHistoryComponent = (function () {
    function BuySellHistoryComponent(historyService) {
        this.historyService = historyService;
    }
    BuySellHistoryComponent.prototype.ngOnInit = function () {
        this.curOptions = __WEBPACK_IMPORTED_MODULE_3__common_appsettings__["a" /* AppSetting */].COINLIST;
        this.option = 'BTC';
        this.getSellTnxHistory(1);
        this.getBuyTnxHistory(1);
    };
    BuySellHistoryComponent.prototype.onOptionSelect = function (event) {
        this.option = event.target.value;
        this.getSellTnxHistory(1);
        this.getBuyTnxHistory(1);
    };
    BuySellHistoryComponent.prototype.getBuyTnxHistory = function (page) {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.historyService.getBuySellHistory(userId, this.option, true, page - 1).subscribe(function (res) {
            console.log(res);
            _this.pB = page;
            _this.totalB = res.total;
            _this.buyHistory = [];
            res.data.forEach(function (re) {
                _this.buyHistory.push(new __WEBPACK_IMPORTED_MODULE_2__common_BuySellDetails__["a" /* BuySellDetials */](re['coinName'], re['volume'], re['rate'], re['fromSym'], re['purchaseDate']));
            });
        });
    };
    BuySellHistoryComponent.prototype.getSellTnxHistory = function (page) {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.historyService.getBuySellHistory(userId, this.option, false, page - 1).subscribe(function (res) {
            console.log(res);
            _this.pS = page;
            _this.totalS = res.total;
            _this.sellHistory = [];
            res.data.forEach(function (re) {
                _this.sellHistory.push(new __WEBPACK_IMPORTED_MODULE_2__common_BuySellDetails__["a" /* BuySellDetials */](re['coinName'], re['volume'], re['rate'], re['fromSym'], re['purchaseDate']));
            });
        });
    };
    return BuySellHistoryComponent;
}());
BuySellHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buysellhist',
        template: __webpack_require__("../../../../../src/app/balances/history/buysellhistory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balances/history/history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */]) === "function" && _a || Object])
], BuySellHistoryComponent);

var _a;
//# sourceMappingURL=buysellhistory.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 60%;\r\n}\r\n\r\n.right {\r\n    border-collapse: collapse;\r\n    width: 40%;\r\n    float: right;\r\n    margin-right: 40px;\r\n    padding: 30px;\r\n}\r\n\r\n.left {\r\n    border-collapse: collapse;\r\n    width: 40%;\r\n    float: left;\r\n    margin-left: 100px;\r\n    padding: 30px;\r\n}\r\n\r\nh2 {\r\n    text-align: centre;\r\n    margin: auto;\r\n    width: 40%;\r\n    text-decoration: underline;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\nth, td, tr {\r\n    padding: 5px 25px 5px 25px;\r\n    margin: 20px;\r\n    text-align: left;\r\n    border-bottom: 1px solid rgb(198, 221, 241);\r\n}\r\n\r\n.column {\r\n    float: left;\r\n    width: 40%;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n\r\n.dropdown {\r\n    position: relative;\r\n    float: left;\r\n    width: 5%;\r\n    min-height: 30px;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    color: #777;\r\n    font-weight: 3000;\r\n    background-color: #fff;\r\n    box-shadow: 1px 2px 10px -2px rgba(0,0,0,0.3);\r\n    border-radius: 3px;\r\n    transition: all 375ms ease-in-out;\r\n}\r\n\r\n@media(max-width:800px){\r\n    .dropdown {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .column {\r\n        \r\n        width: 100%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/balances/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>\r\n    Coin Payment History \r\n  </h1>\r\n  <select class=\"dropdown\"  id=\"option\" (change)=\"onOptionSelect($event)\" >\r\n      <option *ngFor='let option of curOptions' [value]=\"option\">{{option}}</option>\r\n  </select>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div >\r\n    <ul class=\"column\">\r\n    <h2>Deposit</h2>\r\n    <table>\r\n      <tr>\r\n          <th>Coin Name</th> \r\n          <th>Payment Date</th> \r\n          <th>Amount </th>\r\n      </tr>\r\n      <tr *ngFor=\"let tranHistory of tranHistoryD | paginate: { id: 'deposit', itemsPerPage: 10, currentPage: pD, totalItems: totalD }\">\r\n        <td>{{tranHistory.coinName}}</td>\r\n        <td>{{tranHistory.paymentDate}}</td>\r\n        <td>{{tranHistory.amount}}</td>\r\n      </tr> \r\n    </table>\r\n    <br>\r\n    <br>\r\n    <pagination-controls (pageChange)=\"getDepositTnxHistory($event)\" id=\"deposit\"></pagination-controls>\r\n    \r\n  </ul>\r\n</div>\r\n<div>\r\n  <ul   class=\"column\">\r\n    <h2>Withdraw</h2>\r\n    <table>\r\n      <tr>\r\n          <th>Coin Name</th>\r\n          <th>Payment Date</th> \r\n          <th>Amount </th>\r\n      </tr>\r\n      <tr *ngFor=\"let tranHistory of tranHistoryW | paginate: { id: 'withdraw', itemsPerPage: 10, currentPage: pW, totalItems: totalW }\">\r\n        <td>{{tranHistory.coinName}}</td>\r\n        <td>{{tranHistory.paymentDate}}</td>\r\n        <td>{{tranHistory.amount}}</td>\r\n      </tr> \r\n    </table>  \r\n    <br>\r\n    <br>\r\n    <pagination-controls (pageChange)=\"getWithdrawTnxHistory($event)\" id=\"withdraw\"></pagination-controls>\r\n      \r\n  </ul>\r\n  </div>\r\n</div>\r\n<!-- \r\n<div class=\"has-text-centered\">\r\n  <div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\"></div>\r\n  <pagination-controls (pageChange)=\"getDepositTnxHistory($event)\" id=\"deposit\"></pagination-controls>\r\n</div>\r\n<div class=\"has-text-centered\">\r\n  <div class=\"spinner\" [ngClass]=\"{ 'hidden': !loading }\"></div>\r\n  <pagination-controls (pageChange)=\"getWithdrawTnxHistory($event)\" id=\"withdraw\"></pagination-controls>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n<!-- <div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  \r\n  <table class=\"table\">\r\n    <tr>\r\n        <th>Payment Date</th> \r\n        <th>Amount </th>\r\n        <th>Deposit</th>\r\n    </tr>\r\n    <tr *ngFor=\"let tranHistoryDet of tranHistory\">\r\n      <td>{{tranHistoryDet.paymentDate | Date}}</td>\r\n      <td>{{tranHistoryDet.amount}}</td>\r\n      <td>{{tranHistoryDet.deposit}}</td>\r\n    </tr> \r\n  </table>  \r\n</div> -->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/balances/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_service__ = __webpack_require__("../../../../../src/app/balances/history/history.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_TranHistory__ = __webpack_require__("../../../../../src/app/common/TranHistory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoryComponent = (function () {
    function HistoryComponent(historyService) {
        this.historyService = historyService;
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.curOptions = __WEBPACK_IMPORTED_MODULE_3__common_appsettings__["a" /* AppSetting */].COINLIST;
        this.option = 'BTC';
        this.pW = 0;
        this.pD = 0;
        this.tranHistoryD = [];
        this.tranHistoryW = [];
        this.getWithdrawTnxHistory(1);
        this.getDepositTnxHistory(1);
    };
    HistoryComponent.prototype.onOptionSelect = function (event) {
        this.option = event.target.value;
        this.getDepositTnxHistory(1);
        this.getWithdrawTnxHistory(1);
    };
    HistoryComponent.prototype.getDepositTnxHistory = function (page) {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.historyService.getTranHistory(userId, this.option, page - 1, true).subscribe(function (res) {
            console.log(res);
            _this.pD = page;
            _this.totalD = res.total;
            _this.tranHistoryD = [];
            res.data.forEach(function (re) {
                _this.tranHistoryD.push(new __WEBPACK_IMPORTED_MODULE_2__common_TranHistory__["a" /* TranHistory */](re['coinName'], re['paymentDate'], re['amount'], re['deposit']));
            });
        });
    };
    HistoryComponent.prototype.getWithdrawTnxHistory = function (page) {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.historyService.getTranHistory(userId, this.option, page - 1, false).subscribe(function (res) {
            console.log(res);
            _this.pW = page;
            _this.totalW = res.total;
            _this.tranHistoryW = [];
            res.data.forEach(function (re) {
                _this.tranHistoryW.push(new __WEBPACK_IMPORTED_MODULE_2__common_TranHistory__["a" /* TranHistory */](re['coinName'], re['paymentDate'], re['amount'], re['deposit']));
            });
        });
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-history',
        template: __webpack_require__("../../../../../src/app/balances/history/history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balances/history/history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__history_service__["a" /* HistoryService */]) === "function" && _a || Object])
], HistoryComponent);

var _a;
//# sourceMappingURL=history.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/history/history.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryService = (function () {
    function HistoryService(http) {
        this.http = http;
    }
    HistoryService.prototype.getTranHistory = function (userId, coinName, page, isDeposit) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].PAYMENT + 'getPayTranHistory/' + userId + '/' + coinName + '/'
            + page + '/' + isDeposit, { withCredentials: true });
    };
    HistoryService.prototype.getBuySellHistory = function (userId, coinName, isBuy, page) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].HISTORY + userId + '/' + coinName + '/'
            + isBuy + '/' + page, { withCredentials: true });
    };
    return HistoryService;
}());
HistoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], HistoryService);

var _a;
//# sourceMappingURL=history.service.js.map

/***/ }),

/***/ "../../../../../src/app/balances/inrwallet/inrwallet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Create three unequal columns that floats next to each other */\r\n.column {\r\n    float: left;\r\n    padding: 10px;\r\n}\r\n\r\n/* Left and right column */\r\n.column.side {\r\n    width: 25%;\r\n}\r\n\r\n/* Middle column */\r\n.column.middle {\r\n    width: 45%;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/balances/inrwallet/inrwallet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <br>\r\n  <br>\r\n  <h1>INR Balance</h1>\r\n  <h2>INR {{inrAmount}}</h2>\r\n</div>\r\n\r\n<div class=\"column middle\">\r\n  <h1>Amount Deposit</h1>\r\n  <form  (ngSubmit)=\"depositAmount()\">\r\n      <label for=\"amountD\">Amount</label>\r\n      <input type=\"number\" id=\"amountD\" name=\"amountD\" [(ngModel)]=\"amountD\" min=\"0\">\r\n      <button type=\"submit\"\r\n        class=\"btn btn-primary\">Deposit\r\n      </button>\r\n      {{message}}\r\n  </form>\r\n</div>\r\n\r\n<div class=\"column middle\">\r\n  <h1>Amount Withdrawal</h1>\r\n  <form (ngSubmit)=\"withdrawAmount()\">\r\n      <label for=\"amountW\">Amount</label>\r\n      <input type=\"number\" id=\"amountW\" name=\"amountW\" [(ngModel)]=\"amountW\" min=\"0\">\r\n      \r\n      <button type=\"submit\"\r\n        class=\"btn btn-primary\">Withdraw\r\n      </button>\r\n      {{message}}\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/balances/inrwallet/inrwallet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InrwalletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inrwallet_service__ = __webpack_require__("../../../../../src/app/balances/inrwallet/inrwallet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InrwalletComponent = (function () {
    function InrwalletComponent(inrWalletService) {
        this.inrWalletService = inrWalletService;
    }
    InrwalletComponent.prototype.ngOnInit = function () {
        this.message = 'hi';
        this.getInrWallet();
    };
    InrwalletComponent.prototype.getInrWallet = function () {
        var _this = this;
        this.inrWalletService.getINRWallet('').subscribe(function (res) {
            console.log(res);
            _this.inrAmount = res;
        }
        // this.koinWallets.push(new KoinWallets(res["coinName"],
        //   res["total"], res["inOrders"], res["available"]
        );
    };
    InrwalletComponent.prototype.withdrawAmount = function () {
        var _this = this;
        console.log('withdrawing');
        console.log(this.amountW);
        this.inrWalletService.withDrawAmount('', '').subscribe(function (res) { return _this.message = res; });
        this.getInrWallet();
    };
    InrwalletComponent.prototype.depositAmount = function () {
        var _this = this;
        console.log('depositing');
        console.log(this.amountD);
        this.inrWalletService.depositAmount('', this.amountD).subscribe(function (res) { return _this.message = res; });
        this.getInrWallet();
    };
    return InrwalletComponent;
}());
InrwalletComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-inrwallet',
        template: __webpack_require__("../../../../../src/app/balances/inrwallet/inrwallet.component.html"),
        styles: [__webpack_require__("../../../../../src/app/balances/inrwallet/inrwallet.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__inrwallet_service__["a" /* InrwalletService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__inrwallet_service__["a" /* InrwalletService */]) === "function" && _a || Object])
], InrwalletComponent);

var _a;
//# sourceMappingURL=inrwallet.component.js.map

/***/ }),

/***/ "../../../../../src/app/balances/inrwallet/inrwallet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InrwalletService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InrwalletService = (function () {
    function InrwalletService(http) {
        this.http = http;
    }
    InrwalletService.prototype.getINRWallet = function (userName) {
        return this.http.get('http://localhost:8087/pay/getINRAmount/1/');
    };
    InrwalletService.prototype.withDrawAmount = function (userName, amount) {
        console.log(amount);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]().set('user', '1').set('coinName', 'INR').set('amount', amount);
        return this.http.post('http://localhost:8087/pay/withdraw', null, { params: params });
    };
    InrwalletService.prototype.depositAmount = function (userName, amount) {
        return this.http.post('http://localhost:8087/pay/deposit/1/' + amount, {
            responseType: 'text'
        });
    };
    return InrwalletService;
}());
InrwalletService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], InrwalletService);

var _a;
//# sourceMappingURL=inrwallet.service.js.map

/***/ }),

/***/ "../../../../../src/app/buysell/buy-sell-services.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellServicesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuySellServicesService = (function () {
    function BuySellServicesService(http) {
        this.http = http;
    }
    BuySellServicesService.prototype.buyOrder = function (userId, fromSym, toSym, volume) {
        // const params = new HttpParams().set('userId', '1').set('fromSym', fromSym)
        //     .set('toSym', toSym).set('amount', volume);
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('userId', userId);
        params.set('fromSym', fromSym);
        params.set('toSym', toSym);
        params.set('volume', volume);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__common_appsettings__["a" /* AppSetting */].BUY, null, options);
    };
    BuySellServicesService.prototype.sellOrder = function (userId, fromSym, toSym, volume) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('userId', userId);
        params.set('fromSym', fromSym);
        params.set('toSym', toSym);
        params.set('volume', volume);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__common_appsettings__["a" /* AppSetting */].SELL, null, options);
    };
    BuySellServicesService.prototype.getInrAmount = function (userId) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__common_appsettings__["a" /* AppSetting */].PAYMENT + 'getBalanceAmount/' + userId);
    };
    BuySellServicesService.prototype.getCoinAmount = function (userId, coinName) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* URLSearchParams */]();
        params.set('user', userId);
        params.set('coinName', coinName);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]();
        options.params = params;
        options.withCredentials = true;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__common_appsettings__["a" /* AppSetting */].PAYMENT + 'getBalanceAmount/', options);
    };
    return BuySellServicesService;
}());
BuySellServicesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BuySellServicesService);

var _a;
//# sourceMappingURL=buy-sell-services.service.js.map

/***/ }),

/***/ "../../../../../src/app/buysell/buysell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n@media(max-width:800px){\r\n    .graph {\r\n        \r\n        width: 100%;\r\n    }\r\n\r\n    .form1 {\r\n        width: 100%;\r\n        \r\n    }\r\n}\r\n\r\n.graph {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\nform {\r\n    margin-top: 40px;\r\n    margin-right: 10px;\r\n    float: right;\r\n    width: 20%;\r\n    padding: 5px 0px 5px 15px;\r\n    border-radius: 9px;\r\n    border-style: groove;\r\n    border-width: 1px;\r\n    border-color: brown;\r\n    box-sizing: border-box;\r\n}\r\n\r\ntable {\r\n    float: centre;\r\n    width: 20%\r\n}\r\n\r\ninput[type=submit]:hover {\r\n    background-color:darkgray;   \r\n}\r\n\r\ninput[type=submit] {\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    background-color:lavender;\r\n    float: left;\r\n}\r\n\r\nlabel {\r\n    display: block;\r\n    color: firebrick;\r\n}\r\n\r\np {\r\n    padding-left: 10px;\r\n    display: inline-block;\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\ninput[type=text], input[type=number]{\r\n    padding: 5px 5px;\r\n    margin: 3px 0;\r\n    box-sizing: border-box;\r\n    background-color:rgb(245, 235, 235);\r\n    border: 2px solid rgba(140, 146, 150, 0.925);\r\n    border-radius: 4px;\r\n}\r\n\r\nspan {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-weight: 500;\r\n    color:indianred;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buysell/buysell.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\r\n<app-graph class='graph'></app-graph>\r\n\r\n<form class=\"form1\" name=\"SELL\" (ngSubmit)=\"sell()\">\r\n    <span>SELL {{fromSym}}</span>\r\n    <br>\r\n    <span>{{fromSym}} Balance: {{fromSymAmount}}</span>\r\n    <br>\r\n    <br>\r\n    <label>Volume</label>\r\n    <input placeholder=\"Volume\" required=\"\" step=\"1\" type=\"number\" \r\n        [(ngModel)]='sellVolume' name='sellVolume' min=\"0\">\r\n    <br>\r\n    <br>\r\n    <label>{{toSym}} Rate</label>\r\n    <input type=\"text\" name=\"Price\" placeholder=\"{{rate | number:'1.0-6'}}\" disabled>\r\n    <br>\r\n    <br>\r\n    <label>{{toSym}} Total Amount</label>\r\n    <input type=\"text\" name=\"Total Amount\" placeholder=\"{{sellVolume * rate | number:'1.0-6'}}\" disabled>\r\n    <br>\r\n    <br>\r\n    \r\n    <div>\r\n        <input type=\"submit\" value=\"SELL\" [disabled]= \"sellVolume > fromSymAmount || 0 > sellVolume\">\r\n        <p *ngIf=\"sellVolume > fromSymAmount\">Lower Balance</p>\r\n        <p  *ngIf=\"0 > sellVolume\" value='true'>Negative Amount</p>\r\n    </div>\r\n\r\n</form>\r\n\r\n<form class=\"form1\" name=\"BUY\" (ngSubmit)=\"buy()\">\r\n    <span>BUY {{fromSym}}</span>\r\n    <br>\r\n    <span>{{toSym}} Balance: {{toSymAmount}}</span>\r\n    <br>\r\n    <br>\r\n    <label>Volume</label>\r\n    <input placeholder=\"Volume\" required step=\"1\" type=\"number\" \r\n            [(ngModel)]=\"buyVolume\" name='buyVolume' min=\"0\">\r\n    <br>\r\n    <br>\r\n    <label>{{toSym}} Rate</label>\r\n    <input type=\"text\" name=\"Price\" placeholder=\"{{rate | number:'1.0-6'}}\" disabled>\r\n    <br>\r\n    <br>\r\n    <label>{{toSym}} Total Amount</label>\r\n    <input type=\"number\" name=\"Total Amount\" placeholder=\"{{buyVolume * rate | number:'1.0-6'}}\" disabled>\r\n    <br>\r\n    <br>\r\n    \r\n    <div>\r\n            <input type=\"submit\" value=\"BUY\" [disabled]= \"buyVolume * rate > toSymAmount || 0 > buyVolume\">\r\n            <p  *ngIf=\"buyVolume * rate > toSymAmount\" value='true'>Lower Balance</p>\r\n            <p  *ngIf=\"0 > buyVolume\" value='true'>Negative Amount</p>\r\n         </div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/buysell/buysell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuysellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buy_sell_services_service__ = __webpack_require__("../../../../../src/app/buysell/buy-sell-services.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuysellComponent = (function () {
    function BuysellComponent(buySellService, route, alertService) {
        var _this = this;
        this.buySellService = buySellService;
        this.route = route;
        this.alertService = alertService;
        this.route.params.subscribe(function (params) {
            _this.toSym = params['toSym'];
            _this.fromSym = params['fromSym'];
            _this.rate = params['rate'];
        });
    }
    BuysellComponent.prototype.ngOnInit = function () {
        this.toSymAmount = 0;
        this.fromSymAmount = 0;
        this.buyVolume = 0;
        this.sellVolume = 0;
        this.getCoinAmount();
    };
    BuysellComponent.prototype.buy = function () {
        var _this = this;
        this.alertService.clear();
        var userId = localStorage.getItem('currentUser');
        this.buySellService.buyOrder(userId, this.fromSym, this.toSym, this.buyVolume.toString()).subscribe(function (res) {
            if (res['status'] === 416) {
                _this.alertService.error(res['_body']);
            }
            else {
                _this.alertService.success(res['_body']);
                _this.getCoinAmount();
            }
        });
    };
    BuysellComponent.prototype.sell = function () {
        var _this = this;
        this.alertService.clear();
        var userId = localStorage.getItem('currentUser');
        this.buySellService.sellOrder(userId, this.fromSym, this.toSym, this.sellVolume.toString()).subscribe(function (res) {
            _this.alertService.success(res['_body']);
            _this.getCoinAmount();
        });
    };
    BuysellComponent.prototype.getCoinAmount = function () {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.buySellService.getCoinAmount(userId, this.toSym).subscribe(function (res) {
            return _this.toSymAmount = res['_body'];
        });
        this.buySellService.getCoinAmount(userId, this.fromSym).subscribe(function (res) {
            return _this.fromSymAmount = res['_body'];
        });
    };
    return BuysellComponent;
}());
BuysellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-buysell',
        template: __webpack_require__("../../../../../src/app/buysell/buysell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/buysell/buysell.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__buy_sell_services_service__["a" /* BuySellServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__buy_sell_services_service__["a" /* BuySellServicesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], BuysellComponent);

var _a, _b, _c;
//# sourceMappingURL=buysell.component.js.map

/***/ }),

/***/ "../../../../../src/app/common/BuySellDetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellDetials; });
var BuySellDetials = (function () {
    function BuySellDetials(coinName, volume, rate, fromSym, purchaseDate) {
        this.coinName = coinName;
        this.volume = volume;
        this.rate = rate;
        this.fromSym = fromSym;
        this.purchaseDate = purchaseDate;
    }
    return BuySellDetials;
}());

//# sourceMappingURL=BuySellDetails.js.map

/***/ }),

/***/ "../../../../../src/app/common/SignUp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
var Signup = (function () {
    function Signup() {
    }
    return Signup;
}());

//# sourceMappingURL=SignUp.js.map

/***/ }),

/***/ "../../../../../src/app/common/Ticker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ticker; });
var Ticker = (function () {
    function Ticker(currency, rate, change, openDay, highDay, lowDay) {
        this.currency = currency;
        this.rate = rate;
        this.change = change;
        this.openDay = openDay;
        this.lowDay = lowDay;
        this.highDay = highDay;
    }
    return Ticker;
}());

//# sourceMappingURL=Ticker.js.map

/***/ }),

/***/ "../../../../../src/app/common/TranHistory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranHistory; });
var TranHistory = (function () {
    function TranHistory(coinName, paymentDate, amount, deposit) {
        this.coinName = coinName;
        this.paymentDate = paymentDate;
        this.amount = amount;
        this.deposit = deposit;
    }
    return TranHistory;
}());

//# sourceMappingURL=TranHistory.js.map

/***/ }),

/***/ "../../../../../src/app/common/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = (function () {
    function Alert(init) {
        Object.assign(this, init);
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
//# sourceMappingURL=alert.js.map

/***/ }),

/***/ "../../../../../src/app/common/appsettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSetting; });
var AppSetting = (function () {
    function AppSetting() {
    }
    return AppSetting;
}());

// public static DATA_RETRIEVER = '/api/data-retriever/crypto/';
// public static DATA_RETRIEVER = 'http://localhost:8080/crypto/';
AppSetting.DATA_RETRIEVER = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8090/crypto/';
// public static DATA_RETRIEVER = 'http://localhost:8304/api/data-retriever/crypto/';
// public static PAYMENT = '/api/payment/pay/';
// public static PAYMENT = 'http://localhost:8087/pay/';
// public static PAYMENT = 'http://localhost:8304/api/payment/pay/';
AppSetting.PAYMENT = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8304/api/payment/pay/';
// public static BUY = '/api/buy-service/buy/';
// public static BUY = 'http://localhost:8301/buy/';
// public static BUY = 'http://localhost:8304/api/buy-service/buy/';
AppSetting.BUY = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8304/api/buy-service/buy/';
// public static SELL = '/api/buy-service/sell/';
// public static SELL = 'http://localhost:8301/sell/';
// public static SELL = 'http://localhost:8304/api/buy-service/sell/';
AppSetting.SELL = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8304/api/buy-service/sell/';
// public static HISTORY = '/api/buy-service/getBuySellHistory/';
// public static HISTORY = 'http://localhost:8301/getBuySellHistory/';
// public static HISTORY = 'http://localhost:8304/api/buy-service/getBuySellHistory/';
AppSetting.HISTORY = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8304/api/buy-service/getBuySellHistory/';
// public static GATEWAY = 'http://localhost:8304/';
AppSetting.GATEWAY = 'http://ec2-13-233-23-145.ap-south-1.compute.amazonaws.com:8304/';
// public static GATEWAY = '';
AppSetting.COINLIST = ['BTC', 'XRP', 'LTC', 'ETH', 'USD'];
//# sourceMappingURL=appsettings.js.map

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nvd3 .nv-axis{\r\n    pointer-events:none;opacity:1\r\n}\r\n\r\n.nvd3 .nv-axis path{\r\n    fill:none;stroke:#000;stroke-opacity:.75;shape-rendering:crispEdges\r\n}\r\n\r\n.nvd3 .nv-axis path.domain{\r\n    stroke-opacity:.75\r\n}\r\n\r\n.nvd3 .nv-axis.nv-x path.domain{\r\n    stroke-opacity:0\r\n}\r\n\r\n.nvd3 .nv-axis line{\r\n    fill:none;stroke:#e5e5e5;shape-rendering:crispEdges\r\n}\r\n\r\n.nvd3 .nv-axis .zero line,.nvd3 .nv-axis line.zero{\r\n    stroke-opacity:.75\r\n}\r\n\r\n.nvd3 .nv-axis .nv-axisMaxMin text{\r\n    font-weight:700\r\n}\r\n\r\n.nvd3 .x .nv-axis .nv-axisMaxMin text,.nvd3 .x2 .nv-axis .nv-axisMaxMin text,.nvd3 .x3 .nv-axis .nv-axisMaxMin text{\r\n    text-anchor:middle\r\n}\r\n\r\n.nvd3 .nv-axis.nv-disabled{\r\n    opacity:0\r\n}\r\n    \r\n.nvd3 .nv-bars rect{\r\n    fill-opacity:.75;\r\n    transition:fill-opacity 250ms linear;\r\n    -moz-transition:fill-opacity 250ms linear;\r\n    -webkit-transition:fill-opacity 250ms linear\r\n}\r\n\r\n.nvd3 .nv-bars rect.hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3 .nv-bars .hover rect{\r\n    fill:#add8e6\r\n}\r\n\r\n.nvd3 .nv-bars text{\r\n    fill:rgba(0,0,0,0)\r\n}\r\n\r\n.nvd3 .nv-bars .hover text{\r\n    fill:rgba(0,0,0,1)\r\n}\r\n\r\n.nvd3 .nv-multibar .nv-groups rect,.nvd3 .nv-multibarHorizontal .nv-groups rect,.nvd3 .nv-discretebar .nv-groups rect{\r\n    stroke-opacity:0;\r\n    transition:fill-opacity 250ms linear;\r\n    -moz-transition:fill-opacity 250ms linear;\r\n    -webkit-transition:fill-opacity 250ms linear\r\n}\r\n\r\n.nvd3 .nv-multibar .nv-groups rect:hover,.nvd3 .nv-multibarHorizontal .nv-groups rect:hover,.nvd3 .nv-candlestickBar .nv-ticks rect:hover,.nvd3 .nv-discretebar .nv-groups rect:hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3 .nv-discretebar .nv-groups text,.nvd3 .nv-multibarHorizontal .nv-groups text{\r\n    font-weight:700;fill:rgba(0,0,0,1);stroke:rgba(0,0,0,0)\r\n}\r\n\r\n.nvd3 .nv-boxplot circle{\r\n    fill-opacity:.5\r\n}\r\n\r\n.nvd3 .nv-boxplot circle:hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3 .nv-boxplot rect:hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3 line.nv-boxplot-median{\r\n    stroke:#000\r\n}\r\n\r\n.nv-boxplot-tick:hover{\r\n    stroke-width:2.5px\r\n}\r\n\r\n.nvd3.nv-bullet{\r\n    font:10px sans-serif\r\n}\r\n\r\n.nvd3.nv-bullet .nv-measure{\r\n    fill-opacity:.8\r\n}\r\n\r\n.nvd3.nv-bullet .nv-measure:hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3.nv-bullet .nv-marker{\r\n    stroke:#000;\r\n    stroke-width:2px\r\n}\r\n\r\n.nvd3.nv-bullet .nv-markerTriangle{\r\n    stroke:#000;\r\n    fill:#fff;stroke-width:1.5px\r\n}\r\n\r\n.nvd3.nv-bullet .nv-tick line{\r\n    stroke:#666;stroke-width:.5px\r\n}\r\n\r\n.nvd3.nv-bullet .nv-range.nv-s0{\r\n    fill:#eee\r\n}\r\n\r\n.nvd3.nv-bullet .nv-range.nv-s1{\r\n    fill:#ddd\r\n}\r\n\r\n.nvd3.nv-bullet .nv-range.nv-s2{\r\n    fill:#ccc\r\n}\r\n\r\n.nvd3.nv-bullet .nv-title{\r\n    font-size:14px;\r\n    font-weight:700\r\n}\r\n\r\n.nvd3.nv-bullet .nv-subtitle{\r\n    fill:#999\r\n}\r\n\r\n.nvd3.nv-bullet .nv-range{\r\n    fill:#bababa;\r\n    fill-opacity:.4\r\n}\r\n\r\n.nvd3.nv-bullet .nv-range:hover{\r\n    fill-opacity:.7\r\n}\r\n\r\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick{\r\n    stroke-width:1px\r\n}\r\n\r\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.hover{\r\n    stroke-width:2px\r\n}\r\n\r\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.positive rect{\r\n    stroke:#2ca02c;fill:#2ca02c\r\n}\r\n\r\n.nvd3.nv-candlestickBar .nv-ticks .nv-tick.negative rect{\r\n    stroke:#d62728;fill:#d62728\r\n}\r\n\r\n.with-transitions .nv-candlestickBar .nv-ticks .nv-tick{\r\n    transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear;\r\n    -moz-transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear;\r\n    -webkit-transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear\r\n}\r\n\r\n.nvd3.nv-candlestickBar .nv-ticks line{\r\n    stroke:#333\r\n}\r\n\r\n.nvd3 .nv-legend .nv-disabled rect{\r\n\r\n}\r\n\r\n.nvd3 .nv-check-box .nv-box{\r\n    fill-opacity:0;\r\n    stroke-width:2\r\n}\r\n\r\n.nvd3 .nv-check-box .nv-check{\r\n    fill-opacity:0;\r\n    stroke-width:4\r\n}\r\n\r\n.nvd3 .nv-series.nv-disabled .nv-check-box .nv-check{\r\n    fill-opacity:0;\r\n    stroke-opacity:0\r\n}\r\n\r\n.nvd3 .nv-controlsWrap .nv-legend .nv-check-box .nv-check{\r\n    opacity:0\r\n}\r\n\r\n.nvd3.nv-linePlusBar .nv-bar rect{\r\n    fill-opacity:.75\r\n}\r\n\r\n.nvd3.nv-linePlusBar .nv-bar rect:hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nvd3 .nv-groups path.nv-line{\r\n    fill:none\r\n}\r\n\r\n.nvd3 .nv-groups path.nv-area{\r\n    stroke:none\r\n}\r\n\r\n.nvd3.nv-line .nvd3.nv-scatter .nv-groups .nv-point{\r\n    fill-opacity:0;stroke-opacity:0\r\n}\r\n\r\n.nvd3.nv-scatter.nv-single-point .nv-groups .nv-point{\r\n    fill-opacity:.5!important;\r\n    stroke-opacity:.5!important\r\n}\r\n\r\n.with-transitions .nvd3 .nv-groups .nv-point{\r\n    transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear;\r\n    -moz-transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear;\r\n    -webkit-transition:stroke-width 250ms linear,\r\n    stroke-opacity 250ms linear\r\n}\r\n\r\n.nvd3.nv-scatter .nv-groups .nv-point.hover,.nvd3 .nv-groups .nv-point.hover{\r\n    stroke-width:7px;\r\n    fill-opacity:.95!important;\r\n    stroke-opacity:.95!important\r\n}\r\n\r\n.nvd3 .nv-point-paths path{\r\n    stroke:#aaa;\r\n    stroke-opacity:0;\r\n    fill:#eee;\r\n    fill-opacity:0\r\n}\r\n\r\n.nvd3 .nv-indexLine{\r\n    cursor:ew-resize\r\n}\r\n\r\nsvg.nvd3-svg{\r\n    -webkit-touch-callout:none;\r\n    -webkit-user-select:none;\r\n    -ms-user-select:none;\r\n    -moz-user-select:none;\r\n    user-select:none;\r\n    display:block;\r\n    width:100%;\r\n    height:100%\r\n}\r\n\r\n.nvtooltip.with-3d-shadow,.with-3d-shadow .nvtooltip{\r\n    box-shadow:0 5px 10px rgba(0,0,0,.2);\r\n    border-radius:5px\r\n}\r\n\r\n.nvd3 text{\r\n    font:400 12px Arial\r\n}\r\n\r\n.nvd3 .title{\r\n    font:700 14px Arial\r\n}\r\n\r\n.nvd3 .nv-background{\r\n    fill:#fff;\r\n    fill-opacity:0\r\n}\r\n\r\n.nvd3.nv-noData{\r\n    font-size:18px;\r\n    font-weight:700\r\n}\r\n\r\n.nv-brush .extent{\r\n    fill-opacity:.125;\r\n    shape-rendering:crispEdges\r\n}\r\n\r\n.nv-brush .resize path{\r\n    fill:#eee;\r\n    stroke:#666\r\n}\r\n\r\n.nvd3 .nv-legend .nv-series{\r\n    cursor:pointer\r\n}\r\n\r\n.nvd3 .nv-legend .nv-disabled circle{\r\n    fill-opacity:0\r\n}\r\n\r\n.nvd3 .nv-brush .extent{\r\n    fill-opacity:0!important\r\n}\r\n\r\n.nvd3 .nv-brushBackground rect{\r\n    stroke:#000;\r\n    stroke-width:.4;\r\n    fill:#fff;\r\n    fill-opacity:.7\r\n}\r\n\r\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick{\r\n    stroke-width:1px\r\n}\r\n\r\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.hover{\r\n    stroke-width:2px\r\n}\r\n\r\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.positive{\r\n    stroke:#2ca02c\r\n}\r\n\r\n.nvd3.nv-ohlcBar .nv-ticks .nv-tick.negative{\r\n    stroke:#d62728\r\n}\r\n\r\n.nvd3 .background path{\r\n    fill:none;\r\n    stroke:#EEE;\r\n    stroke-opacity:.4;\r\n    shape-rendering:crispEdges\r\n}\r\n\r\n.nvd3 .foreground path{\r\n    fill:none;\r\n    stroke-opacity:.7\r\n}\r\n\r\n.nvd3 .nv-parallelCoordinates-brush .extent{\r\n    fill:#fff;\r\n    fill-opacity:.6;\r\n    stroke:gray;\r\n    shape-rendering:crispEdges\r\n}\r\n\r\n.nvd3 .nv-parallelCoordinates .hover{\r\n    fill-opacity:1;\r\n    stroke-width:3px\r\n}\r\n\r\n.nvd3 .missingValuesline line{\r\n    fill:none;\r\n    stroke:#000;\r\n    stroke-width:1;\r\n    stroke-opacity:1;\r\n    stroke-dasharray:5,5\r\n}\r\n\r\n.nvd3.nv-pie path{\r\n    stroke-opacity:0;\r\n    transition:fill-opacity 250ms linear,stroke-width 250ms linear,stroke-opacity 250ms linear;\r\n    -moz-transition:fill-opacity 250ms linear,stroke-width 250ms linear,stroke-opacity 250ms linear;\r\n    -webkit-transition:fill-opacity 250ms linear,stroke-width 250ms linear,stroke-opacity 250ms linear\r\n}\r\n    \r\n.nvd3.nv-pie .nv-pie-title{\r\n    font-size:24px;fill:rgba(19,196,249,.59)\r\n}\r\n\r\n.nvd3.nv-pie .nv-slice text{\r\n    stroke:#000;stroke-width:0\r\n}\r\n\r\n.nvd3.nv-pie path{\r\n    stroke:#fff;\r\n    stroke-width:1px;\r\n    stroke-opacity:1\r\n}\r\n\r\n.nvd3.nv-pie .hover path{\r\n    fill-opacity:.7\r\n}\r\n\r\n.nvd3.nv-pie .nv-label{\r\n    pointer-events:none\r\n}\r\n\r\n.nvd3.nv-pie .nv-label rect{\r\n    fill-opacity:0;\r\n    stroke-opacity:0\r\n}\r\n\r\n.nvd3 .nv-groups .nv-point.hover{\r\n    stroke-width:20px;\r\n    stroke-opacity:.5\r\n}\r\n\r\n.nvd3 .nv-scatter .nv-point.hover{\r\n    fill-opacity:1\r\n}\r\n\r\n.nv-noninteractive{\r\n    pointer-events:none\r\n}\r\n\r\n.nv-distx,.nv-disty{\r\n    pointer-events:none\r\n}\r\n\r\n.nvd3.nv-sparkline path{\r\n    fill:none\r\n}\r\n\r\n.nvd3.nv-sparklineplus g.nv-hoverValue{\r\n    pointer-events:none\r\n}\r\n\r\n.nvd3.nv-sparklineplus .nv-hoverValue line{\r\n    stroke:#333;\r\n    stroke-width:1.5px\r\n}\r\n\r\n.nvd3.nv-sparklineplus,.nvd3.nv-sparklineplus g{\r\n    pointer-events:all\r\n}\r\n\r\n.nvd3 .nv-hoverArea{\r\n    fill-opacity:0;\r\n    stroke-opacity:0\r\n}\r\n\r\n.nvd3.nv-sparklineplus .nv-xValue,.nvd3.nv-sparklineplus .nv-yValue{\r\n    stroke-width:0;font-size:.9em;font-weight:400}.nvd3.nv-sparklineplus .nv-yValue{stroke:#f66}.nvd3.nv-sparklineplus .nv-maxValue{stroke:#2ca02c;fill:#2ca02c}.nvd3.nv-sparklineplus .nv-minValue{stroke:#d62728;fill:#d62728}.nvd3.nv-sparklineplus .nv-currentValue{font-weight:700;font-size:1.1em}.nvd3.nv-stackedarea path.nv-area{fill-opacity:.7;stroke-opacity:0;transition:fill-opacity 250ms linear,stroke-opacity 250ms linear;-moz-transition:fill-opacity 250ms linear,stroke-opacity 250ms linear;-webkit-transition:fill-opacity 250ms linear,stroke-opacity 250ms linear}.nvd3.nv-stackedarea path.nv-area.hover{fill-opacity:.9}.nvd3.nv-stackedarea .nv-groups .nv-point{stroke-opacity:0;fill-opacity:0}.nvtooltip{position:absolute;background-color:rgba(255,255,255,1);color:rgba(0,0,0,1);padding:1px;border:1px solid rgba(0,0,0,.2);z-index:10000;display:block;font-family:Arial;font-size:13px;text-align:left;pointer-events:none;white-space:nowrap;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nvtooltip{background:rgba(255,255,255,.8);border:1px solid rgba(0,0,0,.5);border-radius:4px}.nvtooltip.with-transitions,.with-transitions .nvtooltip{transition:opacity 50ms linear;-moz-transition:opacity 50ms linear;-webkit-transition:opacity 50ms linear;transition-delay:200ms;-moz-transition-delay:200ms;-webkit-transition-delay:200ms}.nvtooltip.x-nvtooltip,.nvtooltip.y-nvtooltip{padding:8px}.nvtooltip h3{margin:0;padding:4px 14px;line-height:18px;font-weight:400;background-color:rgba(247,247,247,.75);color:rgba(0,0,0,1);text-align:center;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.nvtooltip p{margin:0;padding:5px 14px;text-align:center}.nvtooltip span{display:inline-block;margin:2px 0}.nvtooltip table{margin:6px;border-spacing:0}.nvtooltip table td{padding:2px 9px 2px 0;vertical-align:middle}.nvtooltip table td.key{font-weight:400}.nvtooltip table td.value{text-align:right;font-weight:700}.nvtooltip table tr.highlight td{padding:1px 9px 1px 0;border-bottom-style:solid;border-bottom-width:1px;border-top-style:solid;border-top-width:1px}.nvtooltip table td.legend-color-guide div{width:8px;height:8px;vertical-align:middle}.nvtooltip table td.legend-color-guide div{width:12px;height:12px;border:1px solid #999}.nvtooltip .footer{padding:3px;text-align:center}.nvtooltip-pending-removal{pointer-events:none;display:none}.nvd3 .nv-interactiveGuideLine{pointer-events:none}.nvd3 line.nv-guideline{stroke:#ccc}\r\n    \r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Angular-nvD3 Candlestick Chart</title>\r\n    <script>document.write('<base href=\"' + document.location + '\" />');</script>\r\n    \r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.css\"/>\r\n    <script src=\"//ajax.googleapis.com/ajax/libs/angularjs/1.3.9/angular.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js\" charset=\"utf-8\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/nvd3/1.8.1/nv.d3.min.js\"></script>\r\n    <script src=\"https://rawgit.com/krispo/angular-nvd3/v1.0.4/dist/angular-nvd3.js\"></script>\r\n    <script src=\"script.js\"></script>\r\n  </head>\r\n\r\n<div><nvd3 [options]=\"options\" [data]=\"data\" api=\"api\"></nvd3></div>"

/***/ }),

/***/ "../../../../../src/app/graph/graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticker_ticker_service__ = __webpack_require__("../../../../../src/app/ticker/ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraphComponent = (function () {
    function GraphComponent(tickerService, route) {
        var _this = this;
        this.tickerService = tickerService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.toSym = params['toSym'];
            _this.fromSym = params['fromSym'];
        });
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = {
            chart: {
                type: 'ohlcBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 100
                },
                x: function (d) { return d['date']; },
                y: function (d) { return d['close']; },
                duration: 100,
                tooltip: {
                    hideDelay: 0,
                    enabled: false,
                },
                xAxis: {
                    axisLabel: 'Last 60 minutes',
                    tickFormat: function (d) {
                        return d3.time.format('%I:%M:%S')(new Date((d * 1000)));
                    },
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: this.toSym + ' Price',
                    margin: 20,
                    tickFormat: function (d) {
                        return d3.format(',.6f')(d);
                    },
                    showMaxMin: true
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: false,
                    useNiceScale: false,
                    horizontalOff: false,
                    verticalOff: true,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };
        //     this.data = [{'values': [
        //         {"date":1539043200,"close":6631.79,"high":6657,"low":6589.39,"open":6650.07,"volume":32204.25,"adjusted":6650.07},
        //         {"date":1539129600,"close":6581.07,"high":6633.22,"low":6487.86,"open":6631.79,"volume":49264.39,"adjusted":6631.79},
        //         {"date":1539216000,"close":6209.47,"high":6581.59,"low":6171.95,"open":6581.07,"volume":104258.49,"adjusted":6581.07},
        //         {"date":1539302400,"close":6250.85,"high":6296.56,"low":6173.86,"open":6209.47,"volume":46195.91,"adjusted":6209.47},
        //         {"date":1539388800,"close":6267.27,"high":6280.73,"low":6238.92,"open":6252.1,"volume":21914.85,"adjusted":6252.1},
        //         {"date":1539475200,"close":6277.73,"high":6346.56,"low":6247.17,"open":6267.27,"volume":34130.1,"adjusted":6267.27},
        //         {"date":1539561600,"close":6612.36,"high":7234.83,"low":6244.77,"open":6277.73,"volume":177320.05,"adjusted":6277.73},
        //         {"date":1539648000,"close":6583.05,"high":6724.91,"low":6545.54,"open":6612.69,"volume":49191.34,"adjusted":6612.69},
        //         {"date":1539734400,"close":6574.52,"high":6589.2,"low":6511.6,"open":6583.05,"volume":33538.55,"adjusted":6583.05},
        //         {"date":1539820800,"close":6488.72,"high":6616.27,"low":6445.05,"open":6576.4,"volume":50725.31,"adjusted":6576.4},{"date":1539907200,"close":6486.34,"high":6503.09,"low":6449.36,"open":6489.37,"volume":17488.56,"adjusted":6489.37}
        //   ]}];
        this.tickerService.getHistStream(this.fromSym, this.toSym).subscribe(function (res) {
            _this.data = [res];
        });
    };
    return GraphComponent;
}());
GraphComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-graph',
        template: __webpack_require__("../../../../../src/app/graph/graph.component.html"),
        styles: [__webpack_require__("../../../../../src/app/graph/graph.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticker_ticker_service__["a" /* TickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticker_ticker_service__["a" /* TickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], GraphComponent);

var _a, _b;
//# sourceMappingURL=graph.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\r\n    font: outline;\r\n    font-size: 18px;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n    padding: 10px 30px;\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n    border: 2px;\r\n    border-color: black;\r\n    border-style: solid;\r\n    border-radius: 10px;\r\n    word-wrap: break-word;\r\n}\r\n\r\nspan {\r\n    font-size: 20px;\r\n}\r\n\r\n.profile {\r\n    width: 40%;\r\n}\r\n\r\np {\r\n    font-family: \"Times New Roman\", Times, serif;\r\n    font-size: 28px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  User Profile\r\n</p>\r\n<div class=\"profile\">\r\n  <li><span>Name:</span> {{userDetails.firstName}}</li>\r\n  <li><span>Last:</span> {{userDetails.lastName}}</li>\r\n  <li><span>User Name:</span> {{userDetails.userName}}</li>\r\n  <li><span>Address:</span> {{userDetails.address}}</li>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_SignUp__ = __webpack_require__("../../../../../src/app/common/SignUp.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(profileService) {
        this.profileService = profileService;
        this.userDetails = new __WEBPACK_IMPORTED_MODULE_2__common_SignUp__["a" /* Signup */]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = localStorage.getItem('currentUser');
        this.profileService.getUserDetails(userId).subscribe(function (res) {
            _this.userDetails = res.json();
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getUserDetails = function (userId) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        options.withCredentials = true;
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__common_appsettings__["a" /* AppSetting */].GATEWAY + 'profile/' + userId, options);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n    width: 40%;\r\n}\r\n\r\nth, td {\r\n    padding: 20px;\r\n    text-align: left;\r\n    border-bottom: 1px solid rgb(198, 221, 241);\r\n}\r\n\r\n.dropdown {\r\n    position: relative;\r\n    float: left;\r\n    min-width: 30px;\r\n    width: 80px;\r\n    min-height: 30px;\r\n    font-family: 'Roboto';\r\n    font-size: 20px;\r\n    color: #777;\r\n    font-weight: 3000;\r\n    background-color: #fff;\r\n    box-shadow: 1px 2px 10px -2px rgba(0,0,0,0.3);\r\n    border-radius: 3px;\r\n    transition: all 375ms ease-in-out;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>\r\n    MarketPlace\r\n  </h1>\r\n  <div>\r\n    <select class=\"dropdown\" id=\"option\" (change)=\"onOptionSelect($event)\" >\r\n      <option *ngFor='let option of curOptions' [value]=\"option\">{{option}}</option>\r\n    </select>\r\n  </div>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <table class=\"table\">\r\n    <tr>\r\n        <th>COIN</th>\r\n        <th>RATE</th> \r\n        <th>CHANGE24H</th> \r\n        <th>OPENDAY</th>\r\n        <th>HIGHDAY</th> \r\n        <th>LOWDAY</th> \r\n    </tr>\r\n    <!-- <ul class=\"items\">\r\n        <li *ngFor=\"let hero of heroes$ | async\"\r\n          [class.selected]=\"hero.id === selectedId\">\r\n          <a [routerLink]=\"['/hero', hero.id]\">\r\n            <span class=\"badge\">{{ hero.id }}</span>{{ hero.name }}\r\n          </a>\r\n        </li>\r\n      </ul> -->\r\n    <tr  *ngFor=\"let tick of ticker\">\r\n      <a [routerLink]=\"['/buysell', tick.currency, option, tick.rate]\"><td>{{tick.currency}}</td></a>\r\n      <td>{{tick.rate | number:'1.0-4'}}</td>\r\n      <td>{{tick.change | number :'2.2-2'}}%</td>\r\n      <td>{{tick.openDay | number:'1.0-4'}}</td>\r\n      <td>{{tick.highDay | number:'1.0-4'}}</td>\r\n      <td>{{tick.lowDay | number:'1.0-4'}}</td>\r\n    </tr> \r\n  </table>  \r\n</div>\r\n<ng-template #loading>Loading User Data...</ng-template>\r\n    <!--<li>{{rate.rate}}</li>-->\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticker_service__ = __webpack_require__("../../../../../src/app/ticker/ticker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TickerComponent = (function () {
    function TickerComponent(tickerService, router) {
        this.tickerService = tickerService;
        this.router = router;
        console.log('Init Ticker Component Contructor');
    }
    TickerComponent.prototype.ngOnInit = function () {
        this.curOptions = __WEBPACK_IMPORTED_MODULE_3__common_appsettings__["a" /* AppSetting */].COINLIST;
        this.option = 'BTC';
        console.log('Init Ticker Component Init');
        this.name = 'CryptoTrade';
        this.doSomething();
    };
    TickerComponent.prototype.onOptionSelect = function (event) {
        this.option = event.target.value;
        this.subscription.unsubscribe();
        this.doSomething();
    };
    TickerComponent.prototype.getStatus = function () {
        this.tickerService.getStatus().subscribe(function (res) { return res; });
    };
    TickerComponent.prototype.doSomething = function () {
        var _this = this;
        this.subscription = this.tickerService.getQuoteStream(this.option).subscribe(function (resultArray) { return _this.ticker = resultArray; });
    };
    return TickerComponent;
}());
TickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ticker',
        template: __webpack_require__("../../../../../src/app/ticker/ticker.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ticker/ticker.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ticker_service__["a" /* TickerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ticker_service__["a" /* TickerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], TickerComponent);

var _a, _b;
//# sourceMappingURL=ticker.component.js.map

/***/ }),

/***/ "../../../../../src/app/ticker/ticker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_common_Ticker__ = __webpack_require__("../../../../../src/app/common/Ticker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_eventsource__ = __webpack_require__("../../../../eventsource/lib/eventsource.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_eventsource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_eventsource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_appsettings__ = __webpack_require__("../../../../../src/app/common/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TickerService = (function () {
    function TickerService(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
    }
    TickerService.prototype.getStatus = function () {
        return this.http.get('/status');
    };
    TickerService.prototype.getQuoteStream = function (fromSym) {
        var _this = this;
        // this.http.get('http://localhost:8305/crypto/BTC')
        //   .map((response: Response) => {
        //     return response.json();
        //   })
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            var url = __WEBPACK_IMPORTED_MODULE_6__common_appsettings__["a" /* AppSetting */].DATA_RETRIEVER + fromSym;
            var eventSource = new __WEBPACK_IMPORTED_MODULE_5_eventsource__(url);
            eventSource.onmessage = function (event) {
                _this.ticker = [];
                // console.debug('Received event: ', event);
                var json = JSON.parse(event.data);
                // console.log(json);
                json.forEach(function (element) {
                    // console.log('Received event: ', element);
                    _this.ticker.push(new __WEBPACK_IMPORTED_MODULE_4__app_common_Ticker__["a" /* Ticker */](element['currency'], element['rate'], element['change'], element['openDay'], element['highDay'], element['lowDay']));
                });
                // this.ticker.push(new Ticker(json['currency'], json['rate']));
                _this.ngZone.run(function () { return observer.next(_this.ticker); });
            };
            eventSource.onerror = function (error) {
                // readyState === 0 (closed) means the remote source closed the connection,
                // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
                // is to insert a special element in the stream of events, which the client can identify as the last one.
                if (eventSource.readyState === 0) {
                    console.log('The stream has been closed by the server.', error);
                    eventSource.close();
                    observer.complete();
                }
                else {
                    observer.error('EventSource error: ' + error);
                }
            };
        });
    };
    // getPrice(currency:string) : Observable<Ticker> {
    //   return this.http.get<Ticker>('http://localhost:8305/crypto/BTC').pipe();
    // }
    TickerService.prototype.getHistStream = function (fromSym, toSym) {
        var _this = this;
        console.log(fromSym + ',' + toSym);
        // this.http.get('http://localhost:8305/crypto/BTC')
        //   .map((response: Response) => {
        //     return response.json();
        //   })
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            var url = __WEBPACK_IMPORTED_MODULE_6__common_appsettings__["a" /* AppSetting */].DATA_RETRIEVER + 'histdata/' + fromSym + '/' + toSym;
            var eventSource = new __WEBPACK_IMPORTED_MODULE_5_eventsource__(url);
            eventSource.onmessage = function (event) {
                var json = JSON.parse(event.data);
                // console.debug('Received event: ', event);
                // this.ticker.push(new Ticker(json['currency'], json['rate']));
                _this.ngZone.run(function () { return observer.next(json); });
            };
            eventSource.onerror = function (error) {
                // readyState === 0 (closed) means the remote source closed the connection,
                // so we can safely treat it as a normal situation. Another way of detecting the end of the stream
                // is to insert a special element in the stream of events, which the client can identify as the last one.
                if (eventSource.readyState === 0) {
                    console.log('The stream has been closed by the server.', error);
                    eventSource.close();
                    observer.complete();
                }
                else {
                    observer.error('EventSource error: ' + error);
                }
            };
        });
    };
    return TickerService;
}());
TickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], TickerService);

var _a, _b;
//# sourceMappingURL=ticker.service.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}
if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    if (window) {
        window.console.log = function () { };
    }
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map