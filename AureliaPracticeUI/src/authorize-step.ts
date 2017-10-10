import { Redirect, NavigationInstruction, RedirectToRoute, Router, RouterConfiguration } from 'aurelia-router';

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
