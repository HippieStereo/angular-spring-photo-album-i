import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { Register } from './components/register.component';
import { PhotoService } from './services/photo.service';
import { RegisterService } from './services/register.service'
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { Login } from './components/login.component'
import { LoginService } from './services/login.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    Register,
    Login
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
