var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../app", "../utils/index", "aurelia-framework", "aurelia-validation", "aurelia-router"], function (require, exports, app_1, index_1, aurelia_framework_1, aurelia_validation_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Login = (function () {
        function Login(appRouter, controller) {
            this.appRouter = appRouter;
            this.controller = controller;
            this.isLogin = app_1.AuthorizeStep.IsLogin;
            this.loginModel = new LoginModel();
            this.controller.addRenderer(new index_1.BootstrapFormValidationRenderer3());
            this.controller.addObject(this.loginModel, this.getValidationRules());
        }
        Login.prototype.getValidationRules = function () {
            return aurelia_validation_1.ValidationRules
                .ensure(function (x) { return x.UserName; })
                .required()
                .email()
                .maxLength(50)
                .minLength(6)
                .ensure(function (x) { return x.Password; })
                .required()
                .maxLength(50)
                .minLength(6)
                .rules;
        };
        Login.prototype.loginAction = function () {
            var _this = this;
            this.controller.validate()
                .then(function (result) {
                if (result.valid) {
                    _this.isLogin = app_1.AuthorizeStep.IsLogin = true;
                    new aurelia_router_1.RedirectToRoute('home').navigate(_this.appRouter);
                }
            });
        };
        Login.prototype.logoutAction = function () {
            this.isLogin = app_1.AuthorizeStep.IsLogin = false;
        };
        return Login;
    }());
    Login = __decorate([
        aurelia_framework_1.inject(aurelia_router_1.AppRouter, aurelia_framework_1.NewInstance.of(aurelia_validation_1.ValidationController)),
        __metadata("design:paramtypes", [aurelia_router_1.AppRouter, aurelia_validation_1.ValidationController])
    ], Login);
    exports.Login = Login;
    var LoginModel = (function () {
        function LoginModel() {
        }
        return LoginModel;
    }());
    exports.LoginModel = LoginModel;
});
//# sourceMappingURL=login.js.map