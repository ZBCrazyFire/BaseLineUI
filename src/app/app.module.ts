import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigateComponent } from './component/navigate/navigate.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { DatatableComponent } from './component/datatable/datatable.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {HttpService} from './share/http.service';
import { HttpClientModule } from '@angular/common/http';
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { RejestrationComponent } from './component/login/rejestration/rejestration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigateComponent,
    ScheduleComponent,
    DatatableComponent,
    LoginComponent,
    RejestrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule,
    PaginationModule.forRoot()
  ],
  entryComponents: [
    LoginComponent,
    RejestrationComponent
  ],
  providers: [HttpService, , {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
