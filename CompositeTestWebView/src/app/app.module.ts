import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CompositeTestConnectionService } from './composite-test-connection.service';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './devices/device/device.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { EventHoverDirective } from './event-hover.directive';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterInfoService } from './router-info.service';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceComponent,
    DeviceDetailComponent,
    EventHoverDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CompositeTestConnectionService, RouterInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
