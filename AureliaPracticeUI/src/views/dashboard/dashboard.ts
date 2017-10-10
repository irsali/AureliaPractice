import { RedirectToRoute, AppRouter } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { AuthorizeStep } from "../../authorize-step";


@autoinject()
export class Dashboard
{
    constructor(private appRouter : AppRouter) {

    }

    logoutAction() {
        AuthorizeStep.IsLogin = false;
        sessionStorage.setItem('loggedIn', "false");
        new RedirectToRoute("login").navigate(this.appRouter);
    }
}
