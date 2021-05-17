import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DeviceComponent } from './device.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { DeviceService } from './services/device.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: 'device',
    children: [
      {path: 'list', component: ListComponent },
      {path: 'create', component: CreateComponent},
      {path: 'details:id', component: DeviceComponent},
    ]
  }
];

@NgModule({
  declarations: [
    DeviceComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [DeviceService]
})
export class DeviceModule { }
