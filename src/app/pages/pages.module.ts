import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    Grafica1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ComponentsModule,
    SharedModule
    ],
  exports:[
    DashboardComponent,
    PagesComponent
    ]
})
export class PagesModule { }
