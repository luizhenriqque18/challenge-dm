import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DeviceComponent } from './pages/device/device.component';

const routes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'category', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
