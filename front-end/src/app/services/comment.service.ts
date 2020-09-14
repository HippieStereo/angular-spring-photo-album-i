import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {

  constructor (private http:HttpClient) {}

  addComment(comment: Comment) {
    let tokenUrl = "http://localhost:8080/rest/comment/add";
    let headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("token")});
    console.log(JSON.stringify(comment));
    return this.http.post(tokenUrl, JSON.stringify(comment), {headers: headers});
  }
}