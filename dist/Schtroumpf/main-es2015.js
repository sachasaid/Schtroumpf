(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sacha/Desktop/Angular/Schtroumpf/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
const baseUrl = `mongodb://localhost:27017/Schtroumpf/`;
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CcaC":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class UserService {
    constructor(http) {
        this.http = http;
    }
    getFriends() {
        return this.http.get("http://localhost:8080/users");
    }
    postFriends(formData) {
        return this.http.post("http://localhost:8080/users", formData);
    }
    delFriends(id) {
        return this.http.delete("http://localhost:8080/users" + '/' + id);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Fx3S":
/*!***********************************************!*\
  !*** ./src/app/shared/authservice.service.ts ***!
  \***********************************************/
/*! exports provided: AuthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthserviceService", function() { return AuthserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");




class AuthserviceService {
    constructor(_http) {
        this._http = _http;
    }
    submitRegister(body) {
        return this._http.post("http://localhost:8080/register", body, {
            observe: 'body'
        });
    }
    login(body) {
        return this._http.post("http://localhost:8080/login", body, {
            observe: 'body'
        });
    }
    getLogin() {
        return this._http.get("http://localhost:8080/user", {
            observe: 'body',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().append('token', localStorage.getItem('token'))
        });
    }
}
AuthserviceService.ɵfac = function AuthserviceService_Factory(t) { return new (t || AuthserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthserviceService, factory: AuthserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JxHN":
/*!******************************************************!*\
  !*** ./src/app/Component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return [""]; };
class NavbarComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    logout() {
        localStorage.removeItem('token');
        this._router.navigate(['../loginUser']);
    }
    movetoFriends() {
        this._router.navigate(['../friends']);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 2, consts: [[1, "navbar"], [1, "title-app"], ["src", "../../../assets/icon-schtroumpf.svg", "alt", ""], [3, "routerLink"], [1, "logout"], [1, "register-btn", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SCHTROUMF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.movetoFriends(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #64b5f5;\n  height: 120px;\n  padding: 1em;\n  font-family: \"Teko\", sans-serif;\n}\n.navbar[_ngcontent-%COMP%]   .title-app[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .title-app[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Teko\", sans-serif;\n  color: white;\n  font-size: 50px;\n  cursor: pointer;\n  outline: none;\n}\n.navbar[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {\n  color: #64b5f5;\n  background-color: white;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 50px;\n  font-size: 25px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksU0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUdaO0FBQ1E7RUFDSSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ1oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0YjVmNTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xuICAgIC50aXRsZS1hcHAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoMSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVnaXN0ZXIge1xuICAgICAgICAmLWJ0biB7XG4gICAgICAgICAgICBjb2xvcjogIzY0YjVmNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "N8JW":
/*!**************************************************************!*\
  !*** ./src/app/Component/login-user/login-user.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserComponent", function() { return LoginUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/authservice.service */ "Fx3S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function LoginUserComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginUserComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginUserComponent {
    constructor(authService, _router, _activatedRoute) {
        this.authService = authService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            family: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            race: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            food: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    ngOnInit() {
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.loginForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.loginForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    login() {
        console.log(this.loginForm.value);
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value)
                .subscribe(data => {
                console.log(data);
                localStorage.setItem('token', data.toString());
            }, error => { });
            this._router.navigate(['../info']);
        }
    }
    movetoRegister() {
        this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
    }
}
LoginUserComponent.ɵfac = function LoginUserComponent_Factory(t) { return new (t || LoginUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LoginUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginUserComponent, selectors: [["app-login-user"]], decls: 42, vars: 3, consts: [[1, "container"], ["src", "../../../assets/icon-schtroumpf.svg", "alt", "", "srcset", "", 1, "img-schtroumf-1"], [1, "card", "w-75"], [1, "card-body"], [1, "card-title"], [1, "form"], [3, "formGroup"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "formControlName", "login", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Enter email", 1, "form-control"], ["style", "color: red;", 4, "ngIf"], ["for", "exampleInputPassword1"], ["type", "password", "formControlName", "password", "id", "exampleInputPassword1", "placeholder", "Password", 1, "form-control"], ["formControlName", "age", 1, "form-control"], ["formControlName", "family", 1, "form-control"], ["formControlName", "race", 1, "form-control"], ["formControlName", "food", 1, "form-control"], [1, "btn-login"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "btn-register"], ["type", "submit", 1, "btn", "btn-success", "register", 3, "click"], ["src", "../../../assets/icon-schtroumpf.svg", "alt", "", "srcset", "", 1, "img-schtroumf-2"], [2, "color", "red"]], template: function LoginUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginUserComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginUserComponent_span_18_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "race");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_36_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginUserComponent_Template_button_click_39_listener() { return ctx.movetoRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("password"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 80vh;\n}\n.container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  font-family: \"Teko\", sans-serif;\n  color: #64b5f5;\n  font-size: 50px;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  line-height: 4em;\n}\n.container[_ngcontent-%COMP%]   .img-schtroumf-1[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  padding-top: 5em;\n}\n.container[_ngcontent-%COMP%]   .img-schtroumf-2[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  padding-bottom: 5em;\n}\n.container[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 2em;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQUk7RUFDSSxnQkFBQTtBQUVSO0FBQUk7RUFDSSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFFQTtFQUNJO0lBQ0kseUJBQUE7RUFDTjtFQUNFO0lBQ0ksdUJBQUE7RUFDTjtBQUNGO0FBUEE7RUFDSTtJQUNJLHlCQUFBO0VBQ047RUFDRTtJQUNJLHVCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJsb2dpbi11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICM2NGI1ZjU7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gICAgLmZvcm0ge1xuICAgICAgICBsaW5lLWhlaWdodDogNGVtO1xuICAgIH1cbiAgICAuaW1nLXNjaHRyb3VtZi0xIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICB9XG4gICAgLmltZy1zY2h0cm91bWYtMiB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XG4gICAgfVxuICAgIC5idG4tbG9naW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-user',
                templateUrl: './login-user.component.html',
                styleUrls: ['./login-user.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "NqU4":
/*!**************************************************!*\
  !*** ./src/app/Component/user/user.component.ts ***!
  \**************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var src_app_box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/box/add-box/add-box.component */ "f3gY");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user.service */ "CcaC");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/navbar.component */ "JxHN");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function UserComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.paginator.pageIndex == 0 ? i_r10 + 1 : 1 + i_r10 + ctx_r1.paginator.pageIndex * ctx_r1.paginator.pageSize, " ");
} }
function UserComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r11.login, " ");
} }
function UserComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.password, " ");
} }
function UserComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function UserComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_td_24_Template_mat_icon_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleted(row_r13._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function UserComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [];
class UserComponent {
    constructor(friendService, dialog) {
        this.friendService = friendService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'login', 'password', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngOnInit() {
        this.getAllFriends();
    }
    openDialog(action, obj) {
        obj.action = action;
        let dialogRef = this.dialog.open(src_app_box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_3__["AddBoxComponent"], {
            width: '800px',
            disableClose: true,
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
        });
    }
    openSave(action, obj) {
        obj.action = action;
        let dialogRef = this.dialog.open(src_app_box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_3__["AddBoxComponent"], {
            width: '800px',
            disableClose: true,
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result.data);
            if (result.event == 'Update') {
                console.log('update');
            }
        });
    }
    addRowData(row_obj) {
        this.dataSource.data.push({
            _id: row_obj._id,
            login: row_obj.login,
            password: row_obj.password
        });
        return this.dataSource.filter = "";
    }
    deleted(elm) {
        this.friendService.delFriends(elm).subscribe((response) => {
            this.dataSource.data = this.dataSource.data.filter((o) => {
                return o._id !== elm ? o : false;
            });
            console.log(this.dataSource.data);
        });
    }
    hashPassword(password) {
        return "*".repeat(password.length);
    }
    getAllFriends() {
        let resp = this.friendService.getFriends();
        resp.subscribe(report => this.dataSource.data = report);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], viewQuery: function UserComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 28, vars: 5, consts: [[1, "container"], [1, "title"], [1, "list-of-friends"], [1, "btn"], ["mat-button", "", "mat-flat-button", "", "color", "primary", 1, "btn-add", 3, "click"], [1, "mat-elevation-z8"], ["mat-table", "", 1, "full-width-table", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "login"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "password"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", 1, "btn-delete"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FRIENDS LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserComponent_Template_button_click_7_listener() { return ctx.openDialog("Add", {}); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserComponent_th_14_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserComponent_td_15_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserComponent_th_17_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, UserComponent_th_20_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserComponent_td_21_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserComponent_th_23_Template, 1, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UserComponent_td_24_Template, 4, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserComponent_tr_25_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserComponent_tr_26_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .list-of-friends[_ngcontent-%COMP%] {\n  padding: 7em;\n  width: 100% !important;\n  height: 100% !important;\n}\n.container[_ngcontent-%COMP%]   .list-of-friends[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.container[_ngcontent-%COMP%]   .list-of-friends[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #0d6efd;\n  border: none;\n  padding: 12px;\n  border-radius: 30px;\n  color: white;\n  outline: none;\n}\n.container[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: \"Teko\", sans-serif;\n  color: #64b5f5;\n  font-size: 30px;\n  margin-top: 1em;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  border: none;\n  overflow: hidden;\n  background: red;\n  border-radius: 26px;\n  padding: 8px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7QUFFWjtBQUFRO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFWjtBQURZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUdoQjtBQUZnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSXBCO0FBQVE7RUFDSSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFFWjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDUiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmZ1bGwtd2lkdGgtdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3Qtb2YtZnJpZW5kcyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA3ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgLmJ0bi1hZGQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNjRiNWY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5idG4tZGVsZXRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AppComponent {
    constructor() {
        this.title = 'Schtroumpf';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _Component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/navbar/navbar.component */ "JxHN");
/* harmony import */ var _Component_user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/user/user.component */ "NqU4");
/* harmony import */ var _Component_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/register/register.component */ "r27F");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _Component_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/login-user/login-user.component */ "N8JW");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/user.service */ "CcaC");
/* harmony import */ var _box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./box/add-box/add-box.component */ "f3gY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _addrow_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./addrow.service */ "ye3q");
/* harmony import */ var _shared_authservice_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/authservice.service */ "Fx3S");
/* harmony import */ var _Component_information_information_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Component/information/information.component */ "fHhf");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"],
            useValue: {} },
        _shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _addrow_service__WEBPACK_IMPORTED_MODULE_21__["AddrowService"], _shared_authservice_service__WEBPACK_IMPORTED_MODULE_22__["AuthserviceService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _Component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _Component_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
        _Component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        _Component_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_10__["LoginUserComponent"],
        _box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_12__["AddBoxComponent"],
        _Component_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _Component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _Component_user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                    _Component_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                    _Component_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_10__["LoginUserComponent"],
                    _box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_12__["AddBoxComponent"],
                    _Component_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"]
                ],
                providers: [
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"],
                        useValue: {} },
                    _shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _addrow_service__WEBPACK_IMPORTED_MODULE_21__["AddrowService"], _shared_authservice_service__WEBPACK_IMPORTED_MODULE_22__["AuthserviceService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "f3gY":
/*!**************************************************!*\
  !*** ./src/app/box/add-box/add-box.component.ts ***!
  \**************************************************/
/*! exports provided: AddBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBoxComponent", function() { return AddBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var src_app_addrow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/addrow.service */ "ye3q");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user.service */ "CcaC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "e6WT");












class AddBoxComponent {
    constructor(fb, dialogRef, data, dialogService, friends, _router, _location) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogService = dialogService;
        this.friends = friends;
        this._router = _router;
        this._location = _location;
        console.log(data);
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
        this.addForm = fb.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    doAction() {
        this.user = this.addForm.value;
        this.friends.postFriends(this.user)
            .subscribe((res) => {
            console.warn("result", res);
        });
        this.dialogRef.close({ event: this.action, data: this.local_data });
        this.dialogService.openSnackBar(this.message, 'body');
        this._router.navigateByUrl("/user", { skipLocationChange: true }).then(() => {
            console.log(decodeURI(this._location.path()));
            this._router.navigate([decodeURI(this._location.path())]);
        });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
}
AddBoxComponent.ɵfac = function AddBoxComponent_Factory(t) { return new (t || AddBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_addrow_service__WEBPACK_IMPORTED_MODULE_3__["AddrowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
AddBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddBoxComponent, selectors: [["app-add-box"]], decls: 15, vars: 7, consts: [["mat-dialog-title", "", 2, "display", "flex", "justify-content", "center"], ["mat-dialog-content", ""], [1, "box", 3, "formGroup"], ["matInput", "", "formControlName", "login", "maxlength", "15", 3, "placeholder", "ngModel", "ngModelChange"], ["matInput", "", "formControlName", "password", "minlength", "10", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-dialog-actions", "", 1, "action-box"], ["mat-button", "", "type", "submit", "mat-flat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "mat-flat-button", "", "color", "warn", 3, "click"]], template: function AddBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBoxComponent_Template_input_ngModelChange_7_listener($event) { return ctx.local_data.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddBoxComponent_Template_input_ngModelChange_9_listener($event) { return ctx.local_data.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBoxComponent_Template_button_click_11_listener() { return ctx.doAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddBoxComponent_Template_button_click_13_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx.action, " Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.local_data.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx.action, " Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.local_data.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.action);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"]], styles: [".box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  max-height: 1O0vh;\n}\n\n.action-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImFkZC1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtaGVpZ2h0OiAxTzB2aDtcbn1cblxuLmFjdGlvbi1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-box',
                templateUrl: './add-box.component.html',
                styleUrls: ['./add-box.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_addrow_service__WEBPACK_IMPORTED_MODULE_3__["AddrowService"] }, { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }]; }, null); })();


/***/ }),

/***/ "fHhf":
/*!****************************************************************!*\
  !*** ./src/app/Component/information/information.component.ts ***!
  \****************************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/authservice.service */ "Fx3S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "JxHN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");






class InformationComponent {
    constructor(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.login = '';
        this.age = '';
        this.family = '';
        this.race = '';
        this.food = '';
        this._authService.getLogin()
            .subscribe(data => this.age = data.toString(), error => this._router.navigate(['../loginUser']));
    }
    ngOnInit() {
    }
}
InformationComponent.ɵfac = function InformationComponent_Factory(t) { return new (t || InformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
InformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationComponent, selectors: [["app-information"]], decls: 33, vars: 5, consts: [[1, "container"], [1, "profil"], [1, "example-card"], [1, "profil-header-title"], [1, "profil-content"], [1, "profil-information", "login"], [1, "profil-information", "age"], [1, "profil-information", "family"], [1, "profil-information", "race"], [1, "profil-information", "food"]], template: function InformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Race");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.login, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.age, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.family, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.race, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.food, " ");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".profil[_ngcontent-%COMP%] {\n  padding-top: 8em;\n}\n.profil-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.profil-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n  font-family: \"Teko\", sans-serif;\n  color: white;\n  background-color: #64b5f5;\n}\n.profil-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.profil-information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFHWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUVSIiwiZmlsZSI6ImluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbCB7XG4gICAgcGFkZGluZy10b3A6IDhlbTtcbiAgICAmLWhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAmLXRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRla29cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgICYtaW5mb3JtYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-information',
                templateUrl: './information.component.html',
                styleUrls: ['./information.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "r27F":
/*!**********************************************************!*\
  !*** ./src/app/Component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/authservice.service */ "Fx3S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");







function RegisterComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter the same password!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter age !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter family !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter race !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter food !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authService, _router, _activatedRoute) {
        this.authService = authService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.successMessage = '';
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            family: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            race: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            food: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cfpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, this.passValid)
        });
        this.myForm.controls.password.valueChanges
            .subscribe(x => this.myForm.controls.cfpassword.updateValueAndValidity());
    }
    ngOnInit() {
    }
    isValid(controlName) {
        var _a, _b;
        return ((_a = this.myForm.get(controlName)) === null || _a === void 0 ? void 0 : _a.invalid) && ((_b = this.myForm.get(controlName)) === null || _b === void 0 ? void 0 : _b.touched);
    }
    passValid(control) {
        if (control && (control.value !== null || control.value !== undefined)) {
            const cfpassword = control.value;
            const passCtrl = control.root.get('password');
            if (passCtrl) {
                const passVal = passCtrl.value;
                if (passVal !== cfpassword || passVal === '') {
                    return {
                        isError: true
                    };
                }
            }
        }
        return null;
    }
    movetoLogin() {
        this._router.navigate(['../loginUser'], { relativeTo: this._activatedRoute });
    }
    register() {
        console.log(this.myForm.value);
        if (this.myForm.valid) {
            this.authService.submitRegister(this.myForm.value)
                .subscribe(data => this.successMessage = "Register Success", error => this.successMessage = "Some Error");
            this.movetoLogin();
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 59, vars: 9, consts: [[1, "container"], ["src", "../../../assets/icon-schtroumpf.svg", "alt", "", "srcset", "", 1, "img-schtroumf-1"], [1, "card", "w-75"], [1, "card-body"], [1, "card-title"], [1, "form"], [3, "formGroup"], [1, "register"], [1, "left"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "email", "formControlName", "login", "placeholder", "Enter Login", "required", "", 1, "form-control"], ["style", "color: red;", 4, "ngIf"], ["type", "password", "id", "Password", "formControlName", "password", "placeholder", "Enter Password", "required", "", 1, "form-control"], ["for", "exampleInputPassword1"], ["type", "password", "id", "ConfirmPassword", "formControlName", "cfpassword", "placeholder", "Confirm Password", "required", "", 1, "form-control"], [1, "right"], ["formControlName", "age", "placeholder", "Enter Age", "required", "", 1, "form-control"], ["formControlName", "family", "placeholder", "Enter Family", "required", "", 1, "form-control"], ["formControlName", "race", "placeholder", "Enter Race", "required", "", 1, "form-control"], ["formControlName", "food", "placeholder", "Enter Food", "required", "", 1, "form-control"], [2, "text-align", "center", "color", "blue"], [1, "btn-register"], ["type", "submit", 1, "btn", "btn-success", "register", 3, "click"], [1, "btn-login"], [1, "log"], [1, "btn", "btn-primary", "login", 3, "click"], ["src", "../../../assets/icon-schtroumpf.svg", "alt", "", "srcset", "", 1, "img-schtroumf-2"], [2, "color", "red"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_span_15_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterComponent_span_20_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterComponent_span_25_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_span_31_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Race");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RegisterComponent_span_41_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RegisterComponent_span_46_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_50_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Already have an account ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_56_listener() { return ctx.movetoLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("cfpassword"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("age"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("family"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("race"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isValid("food"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.successMessage, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n.container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  font-family: \"Teko\", sans-serif;\n  color: #198753;\n  font-size: 50px;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  line-height: 4em;\n}\n.container[_ngcontent-%COMP%]   .img-schtroumf-1[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  padding-top: 5em;\n}\n.container[_ngcontent-%COMP%]   .img-schtroumf-2[_ngcontent-%COMP%] {\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite;\n  padding-bottom: 5em;\n}\n.container[_ngcontent-%COMP%]   .btn-register[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 2em;\n}\n.log[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.btn-login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.register[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGdCQUFBO0FBRVI7QUFBSTtFQUNJLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUVSO0FBRUE7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUE7RUFDSTtJQUNJLHlCQUFBO0VBQ047RUFDRTtJQUNJLHVCQUFBO0VBQ047QUFDRjtBQVBBO0VBQ0k7SUFDSSx5QkFBQTtFQUNOO0VBQ0U7SUFDSSx1QkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUZWtvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6ICMxOTg3NTM7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB9XG4gICAgLmZvcm0ge1xuICAgICAgICBsaW5lLWhlaWdodDogNGVtO1xuICAgIH1cbiAgICAuaW1nLXNjaHRyb3VtZi0xIHtcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICB9XG4gICAgLmltZy1zY2h0cm91bWYtMiB7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XG4gICAgfVxuICAgIC5idG4tcmVnaXN0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDJlbTtcbiAgICB9XG59XG5cbi5sb2cge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLmJ0bi1sb2dpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZWdpc3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _Component_information_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/information/information.component */ "fHhf");
/* harmony import */ var _Component_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/login-user/login-user.component */ "N8JW");
/* harmony import */ var _Component_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/register/register.component */ "r27F");
/* harmony import */ var _Component_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/user/user.component */ "NqU4");








const routes = [
    { path: '', component: _Component_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'info', component: _Component_information_information_component__WEBPACK_IMPORTED_MODULE_2__["InformationComponent"] },
    { path: 'friends', component: _Component_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: 'register', component: _Component_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'loginUser', component: _Component_login_user_login_user_component__WEBPACK_IMPORTED_MODULE_3__["LoginUserComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ye3q":
/*!***********************************!*\
  !*** ./src/app/addrow.service.ts ***!
  \***********************************/
/*! exports provided: AddrowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrowService", function() { return AddrowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box/add-box/add-box.component */ "f3gY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");





class AddrowService {
    constructor(dialog, snackbar) {
        this.dialog = dialog;
        this.snackbar = snackbar;
    }
    openSnackBar(message, panelClass) {
        this.snackbar.openFromComponent(_box_add_box_add_box_component__WEBPACK_IMPORTED_MODULE_1__["AddBoxComponent"], {
            data: message,
            panelClass: 'add',
            duration: 1500
        });
    }
}
AddrowService.ɵfac = function AddrowService_Factory(t) { return new (t || AddrowService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
AddrowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddrowService, factory: AddrowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddrowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map