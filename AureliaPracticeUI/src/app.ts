import { autoinject } from 'aurelia-framework';
import { Redirect, NavigationInstruction, RedirectToRoute, Router, RouterConfiguration } from 'aurelia-router';

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

export class AuthorizeStep {
    run(navigationInstruction : NavigationInstruction, next) {
        var navigationInstructionArray = navigationInstruction.getAllInstructions();

        if (navigationInstructionArray.some(i => i.config.name == 'login') && AuthorizeStep.IsLogin)
        {
            return next.cancel(new RedirectToRoute('home'));
        }
        else if (!navigationInstructionArray.some(i => i.config.name == 'login') && !AuthorizeStep.IsLogin) {
            return next.cancel(new RedirectToRoute('login'));
        }


        return next();
    }

    static IsLogin: boolean;

}
