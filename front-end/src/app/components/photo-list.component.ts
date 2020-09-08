import {Component} from '@angular/core';
import {PhotoService} from '../services/photo.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html'
})

export class PhotoList{
    photos: Photo[];
    selectedPhoto: Photo;

    constructor(private photoService: PhotoService){
        this.photoService.getPhotos().subscribe(
            (data: any[])=>{
                console.log(data);
                this.photos = data;
              } )
    }

}