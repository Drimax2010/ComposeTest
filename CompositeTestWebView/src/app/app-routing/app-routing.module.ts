import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from '../devices/devices.component';
import { AboutComponent } from '../about/about.component';
import { DeviceDetailComponent } from '../devices/device-detail/device-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DevicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'device/:id', component: DeviceDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
