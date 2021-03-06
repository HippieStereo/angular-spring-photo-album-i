import { Component } from '@angular/core';
import { User } from '../models/user';
import { RegisterService } from '../services/register.service';
import { error } from 'protractor';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html'
})

export class Register{

    newUser: User = new User();
    registered: boolean = false;

    constructor(private registerService: RegisterService){}

    onSubmit(){

        console.log("Subit User ...");

        this.registerService.sendUser(this.newUser).subscribe(

            data => {

                this.registered = true;
                //this.newUser = new User();

            },

            error => console.log(error)

        );

    }

}