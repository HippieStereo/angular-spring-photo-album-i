import {Component, Input} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {UserService} from '../services/user.service';
import {Comment} from '../models/comment';
import {CommentService} from '../services/comment.service';
import {PhotoService} from '../services/photo.service';

@Component({
    selector: 'image-comments',
    templateUrl: './image-comments.component.html'
})

export class ImageComments{
    @Input("photo") photo: Photo;
    myLocalStorage = localStorage;
    user: User = new User();
    newComment = new Comment;

    constructor(private userService: UserService, private commentService: CommentService, private photoService: PhotoService){
        console.log(this.photo);

        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
        user => {
            this.user = JSON.parse(JSON.stringify(user));
        },
        error => console.log(error)
        )
    }

    onSubmit() {
        console.log(this.photo);
        console.log(this.photo.commentList);
        this.newComment.photo=this.photo;
        this.newComment.userName=this.user.userName;
        this.newComment.photoId=this.photo.photoId;

        this.commentService.addComment(this.newComment).subscribe(
            photo => this.photoService.getPhotosById(this.photo.photoId).subscribe(
            photo => this.photo = JSON.parse(JSON.stringify(photo)),
            error => console.log(error)
          )
        );

        this.newComment = new Comment();
      }
}