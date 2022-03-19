import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TaskBoardComponent} from './task-board/task-board.component';
import {TaskComponent} from './task/task.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptorService} from "../services/token-interceptor.service";
import {ApiService} from "../services/api.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthService} from "../services/auth.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { TimelinetasksComponent } from './timelinetasks/timelinetasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskBoardComponent,
    TaskComponent,
    LoginComponent,
    DashboardComponent,
    TimelinetasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}