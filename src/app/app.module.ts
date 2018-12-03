import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './users/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    DetailUserComponent,
    UpdateUserComponent,
    WelcomeComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
