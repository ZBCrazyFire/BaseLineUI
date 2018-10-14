import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {DatatableComponent} from './component/datatable/datatable.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: 'datatable', component: DatatableComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export  class AppRoutingModule { }
