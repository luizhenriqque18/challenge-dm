import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './pages/category/category.module';
import { DeviceModule } from './pages/device/device.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DeviceModule,
    CategoryModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-Br' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
