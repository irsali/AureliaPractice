define(["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=authorize-step.js.map