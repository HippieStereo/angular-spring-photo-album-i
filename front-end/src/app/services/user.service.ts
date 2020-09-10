import {User} from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService{

    users: User[];

    constructor(private http: HttpClient){}

    getUserByName(username: string) {

        let tokenUrl = "http://localhost:8080/rest/user/userName";
        let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(tokenUrl, username, {headers: headers});

    }

}