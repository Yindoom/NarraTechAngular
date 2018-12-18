import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './users/add-user/add-user.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MakeRequestComponent } from './requests/make-request/make-request.component';
import { LoginComponent } from './Shared/login/login.component';
import { ListLogsComponent } from './logs/list-logs/list-logs.component';
import { MatTableModule } from '@angular/material';
import { ShowRequestsComponent } from './requests/show-requests/show-requests.component';
import { RequestDataComponent } from './requests/request-data/request-data.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
    DetailUserComponent,
    UpdateUserComponent,
    WelcomeComponent,
    NavbarComponent,
    MakeRequestComponent,
    LoginComponent,
    ListLogsComponent,
    ShowRequestsComponent,
    RequestDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
