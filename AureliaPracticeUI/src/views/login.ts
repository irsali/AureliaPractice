import { AuthorizeStep } from '../app';
import { Bootstrap3FormValidationRenderer } from '../utils/index'

import { inject, NewInstance } from 'aurelia-framework';
import { ValidationController, ValidationRules, FluentRules, FluentRuleCustomizer } from 'aurelia-validation';
import { Redirect, RedirectToRoute, AppRouter } from 'aurelia-router';

@inject(AppRouter, NewInstance.of(ValidationController))
export class Login {

    loginModel: LoginModel;
    //errorMessage: string;
    isLogin: boolean = AuthorizeStep.IsLogin;

    constructor(private appRouter: AppRouter, private controller: ValidationController) {
        this.loginModel = new LoginModel();
        this.controller.addRenderer(new Bootstrap3FormValidationRenderer());
        this.controller.addObject(this.loginModel, this.getValidationRules());
    }

    getValidationRules() {

        return ValidationRules
            .ensure<LoginModel, any>(x => x.UserName)
            .required()
            .email()
            .maxLength(50)
            .minLength(6)

            .ensure<any>(x => x.Password)
            .required()
            .maxLength(50)
            .minLength(6)

            .rules;

    }

    loginAction() {
        this.controller.validate()
            .then(result => {
                if (result.valid) {
                    this.isLogin = AuthorizeStep.IsLogin = true;
                    sessionStorage.setItem('loggedIn', this.isLogin ? "true" : "false");
                    new RedirectToRoute('home').navigate(this.appRouter);
                }
            });
    }

    logoutAction() {
        this.isLogin = AuthorizeStep.IsLogin = false;
        sessionStorage.setItem('loggedIn', !this.isLogin ? "true" : "false");
    }
}

export class LoginModel {
    UserName: string;
    Password: string;
}
