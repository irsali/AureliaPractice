var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-router", "aurelia-framework", "../../authorize-step"], function (require, exports, aurelia_router_1, aurelia_framework_1, authorize_step_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dashboard = (function () {
        function Dashboard(appRouter) {
            this.appRouter = appRouter;
        }
        Dashboard.prototype.logoutAction = function () {
            authorize_step_1.AuthorizeStep.IsLogin = false;
            sessionStorage.setItem('loggedIn', "false");
            new aurelia_router_1.RedirectToRoute("login").navigate(this.appRouter);
        };
        return Dashboard;
    }());
    Dashboard = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_router_1.AppRouter])
    ], Dashboard);
    exports.Dashboard = Dashboard;
});
//# sourceMappingURL=dashboard.js.map