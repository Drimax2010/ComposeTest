import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { CompositeTestConnectionService } from './composite-test-connection.service';
import { DevicesComponent } from './devices/devices.component';
import { DeviceComponent } from './device/device.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { EventHoverDirective } from './event-hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DeviceComponent,
    DeviceDetailComponent,
    EventHoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [CompositeTestConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
