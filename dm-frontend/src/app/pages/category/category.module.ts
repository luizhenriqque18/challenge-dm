import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './services/category.service';
import { CategoryComponent } from './category.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { 
    path: 'category',
    children: [
      {path: 'list', component: ListComponent },
      {path: 'create', component: CreateComponent},
      {path: 'details:id', component: CategoryComponent},
    ]
  }
];

@NgModule({
  declarations: [
    CategoryComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CategoryService]
})
export class CategoryModule { }
