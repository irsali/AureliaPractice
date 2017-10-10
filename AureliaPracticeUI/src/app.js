var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia';
            config.addAuthorizeStep(AuthorizeStep);
            config.map([
                { route: 'login', moduleId: 'views/login', name: 'login' },
                { route: 'home', moduleId: 'views/home', name: 'home' },
                { route: '', redirect: 'login' }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject()
    ], App);
    exports.App = App;
    var AuthorizeStep = (function () {
        function AuthorizeStep() {
        }
        AuthorizeStep.prototype.run = function (navigationInstruction, next) {
            var navigationInstructionArray = navigationInstruction.getAllInstructions();
            if (navigationInstructionArray.some(function (i) { return i.config.name == 'login'; }) && AuthorizeStep.IsLogin) {
                return next.cancel(new aurelia_router_1.RedirectToRoute('home'));
            }
            else if (!navigationInstructionArray.some(function (i) { return i.config.name == 'login'; }) && !AuthorizeStep.IsLogin) {
                return next.cancel(new aurelia_router_1.RedirectToRoute('login'));
            }
            return next();
        };
        return AuthorizeStep;
    }());
    exports.AuthorizeStep = AuthorizeStep;
});
//# sourceMappingURL=app.js.map