import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { Register } from './components/register.component';
import { MyAlbum } from './components/my-album.component';
import { AddPhoto } from './components/add-photo.component';
import { ImageDetail } from './components/image-detail.component';
import { ImageComments } from './components/image-comments.component';
import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service'
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login.component';
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { AddPhotoService } from './services/add-photo.service';
import { UploadPhotoService } from './services/upload-photo.service';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    Register,
    Login,
    MyAlbum,
    AddPhoto,
    ImageDetail,
    ImageComments
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    PhotoService,
    RegisterService,
    LoginService,
    UserService,
    AddPhotoService,
    UploadPhotoService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
