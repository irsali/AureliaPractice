define(["require", "exports", "./environment", "./authorize-step"], function (require, exports, environment_1, authorize_step_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-validation')
            .plugin('aurelia-bootstrap')
            .plugin('aurelia-syncfusion-bridge', function (plugin) { return plugin.useAll(); })
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        authorize_step_1.AuthorizeStep.IsLogin = sessionStorage.getItem('loggedIn') === "true";
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map