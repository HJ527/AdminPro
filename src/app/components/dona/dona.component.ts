import { Component, Input } from '@angular/core';
import { Colors, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent {

  @Input() titulo:string='Sin titulo'
  @Input() chartType: ChartType = 'doughnut';
  @Input() colors:Colors[]=[
    {backgroundColor:['#9E120E','#FF5800','#FFB414']}
  ]
  @Input() chartLabels: string[] = [];
  @Input() chartData: MultiDataSet = []
}
