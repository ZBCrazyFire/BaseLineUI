import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {NavigateComponent} from './component/navigate/navigate.component';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {DatatableComponent} from './component/datatable/datatable.component';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {HttpService} from './share/http.service';
import {HttpClientModule} from '@angular/common/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {BootstrapModalModule} from 'ngx-bootstrap-modal';
import {RejestrationComponent} from './component/login/rejestration/rejestration.component';
import {Guard} from './share/guard';
import {TokenService} from './share/token.service';
import { MapComponent } from './component/map/map.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigateComponent,
    ScheduleComponent,
    DatatableComponent,
    LoginComponent,
    RejestrationComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BootstrapModalModule,
    NgxEchartsModule,
    PaginationModule.forRoot()
  ],
  entryComponents: [
    LoginComponent,
    RejestrationComponent
  ],
  providers: [HttpService, Guard, TokenService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
