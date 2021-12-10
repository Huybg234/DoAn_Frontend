import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';
import { DetailJobComponent } from './list-job/detail-job/detail-job.component';
import { HomePageComponent } from './home-page/home-page.component';
import {MatTableModule} from '@angular/material/table';
import {TableModule} from 'primeng/table';
const routes: Routes = [
  {

   path: '',
   component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'list-job',
        component:ListJobComponent,
      }

    ]
  }
 ];

@NgModule({
  declarations: [
    HomeComponent,
    ListJobComponent,
    DetailJobComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    TableModule
  ]
})
export class HomeModule { }
