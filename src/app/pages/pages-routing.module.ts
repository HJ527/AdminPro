import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  {
    path:'',
    component:PagesComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'grafica',
        component:Grafica1Component
      },
      {
        path:'progress',
        component:ProgressComponent
      },
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
