import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './users/list-users/list-users.component';
import {AddUserComponent} from './users/add-user/add-user.component';
import {DetailUserComponent} from './users/detail-user/detail-user.component';
import {UpdateUserComponent} from './users/update-user/update-user.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './auth/login/login.component';
import {ListLogsComponent} from './logs/list-logs/list-logs.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'users', component: ListUsersComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'userdetail/:id', component: DetailUserComponent },
  { path: 'updateuser/:id', component: UpdateUserComponent },
  { path: 'login', component: LoginComponent},
  {path: 'logs', component: ListLogsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
