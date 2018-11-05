import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {DatatableComponent} from './component/datatable/datatable.component';
import {Guard} from './share/guard';
import {MapComponent} from './component/map/map.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'datatable', component: DatatableComponent, canActivate: [Guard]},
  {path: 'map', component: MapComponent, canActivate: [Guard]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
