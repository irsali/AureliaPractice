import { AuthorizeStep } from '../app';
import { autoinject } from 'aurelia-framework';
import { RouterConfiguration, Router, Redirect, RedirectToRoute, AppRouter } from 'aurelia-router';

@autoinject()
export class Home {

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Home';
        config.map([
            { route: ['', 'dashboard'], moduleId: './dashboard/dashboard', name: 'dashboard' },

        ]);
    } 
}
