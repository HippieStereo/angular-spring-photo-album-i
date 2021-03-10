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

    getPhotosById(photoId: number){

        let url = "http://localhost:8080/rest/photo/photoId";
        let headers = new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(url, JSON.stringify(photoId), {headers: headers});

    }

    getPhotosByUser(user: User){

        let url = "http://localhost:8080/rest/photo/user";
        let headers = new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(url, JSON.stringify(user), {headers: headers});

    }

    updatePhoto(photo: Photo){

        let url = "http://localhost:8080/rest/photo/update";
        let headers = new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem("token")});

        return this.http.post(url, JSON.stringify(photo), {headers: headers});

    }

}