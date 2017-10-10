import { autoinject } from 'aurelia-framework';
import { Redirect, NavigationInstruction, RedirectToRoute, Router, RouterConfiguration } from 'aurelia-router';
import { AuthorizeStep } from "./authorize-step";

@autoinject()
export class App {

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.addAuthorizeStep(AuthorizeStep)
        config.map([
            { route: 'login', moduleId: 'views/login', name: 'login' },
            { route: 'home', moduleId: 'views/home', name: 'home' },

            { route: '', redirect: 'login' }
        ]);
    }

}
