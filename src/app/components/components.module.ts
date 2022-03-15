import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
  exports:[
    IncrementadorComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
