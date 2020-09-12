import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';

@Injectable()
export class PhotoService{

    constructor(private http: HttpClient){}

    getPhotos(){

        let url = "http://localhost:8080/photo/allPhotos";

        return this.http.get(url);

    }

    /*getPhotosById(photoId: number){

        let tokenUrl_1 = "http://localhost:8080/rest/photo/photoId";
        let headers_1 = new Headers({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(tokenUrl_1, JSON.stringify(photoId), {headers: headers_1});

    }*/

    getPhotosByUser(user: User){

        let tokenUrl_1 = "http://localhost:8080/rest/photo/photoId";
        let headers_1 = new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(tokenUrl_1, JSON.stringify(user), {headers: headers_1});

    }

    /*updatePhoto(photo: Photo){

        let tokenUrl_1 = "http://localhost:8080/rest/photo/photoId";
        let headers_1 = new Headers({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(tokenUrl_1, JSON.stringify(photo), {headers: headers_1});

    }*/

}