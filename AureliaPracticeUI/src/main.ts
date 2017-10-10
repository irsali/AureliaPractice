import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import { AuthorizeStep } from "./authorize-step";

export function configure(aurelia: Aurelia) {
  aurelia.use
      .standardConfiguration()
      .plugin('aurelia-validation')
      //.plugin('aurelia-bootstrap', plugin => plugin.options.version = 4)
      .plugin('aurelia-bootstrap')
      .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll())
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  // Read session and login status in AuthorizeStep.IsLogin
  AuthorizeStep.IsLogin = sessionStorage.getItem('loggedIn') === "true";
  aurelia.start().then(() => aurelia.setRoot());
}
