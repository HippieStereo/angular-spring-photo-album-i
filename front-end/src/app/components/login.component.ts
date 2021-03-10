import {Component} from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import {LoginService} from '../services/login.service';
//import { error } from 'protractor';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class Login {

    model = {'username': '', 'password': ''};
    currentUserName;
    tokenToStr: string;

    constructor(private loginService: LoginService){

        this.currentUserName = localStorage.getItem("currentUserName");

    }

    public checkLogin(): boolean{

        return this.loginService.checkLogin();
        
    }

    onSubmit(){

        this.loginService.sendCredential(this.model).subscribe(

            data => {

            this.tokenToStr = data;

            console.log("DATA : " + data);

            localStorage.setItem("token", this.tokenToStr);

            this.loginService.sendToken(localStorage.getItem("token")).subscribe(

                data => {

                    this.currentUserName = this.model.username;
                    localStorage.setItem("currentUserName", this.model.username);
                    this.model.username = '';
                    this.model.password = '';

                },

                error => console.log(error)

            );

        },

        error => console.log(error)

        );

    }

}