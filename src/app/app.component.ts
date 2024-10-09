import { Component } from '@angular/core';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import * as echarts from 'echarts';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, TableModule, NgxEchartsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: { echarts },
    },
  ],
})
export class AppComponent {
  chartOption: any;
  products: any;

  constructor() {
    this.chartOption = {
      title: {
        text: 'ECharts Example',
      },
      tooltip: {},
      legend: {
        data: ['Sales'],
      },
      xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

   this.products = [
      {
        code: 1,
        name: 'name1',
        category: 'CAT',
        quantity: '1',
      },
      {
        code: 2,
        name: 'name2',
        category: 'CAT',
        quantity: '2',
      },
      {
        code: 3,
        name: 'name3',
        category: 'CAT',
        quantity: '3',
      },
      {
        code: 4,
        name: 'name4',
        category: 'CAT',
        quantity: '4',
      },
      {
        code: 5,
        name: 'name5',
        category: 'CAT',
        quantity: '5',
      },
      {
        code: 6,
        name: 'name6',
        category: 'CAT',
        quantity: '6',
      },
      {
        code: 7,
        name: 'name7',
        category: 'CAT',
        quantity: '7',
      },
      {
        code: 8,
        name: 'name8',
        category: 'CAT',
        quantity: '8',
      },
      {
        code: 9,
        name: 'name9',
        category: 'CAT',
        quantity: '9',
      },
      {
        code: 10,
        name: 'name10',
        category: 'CAT',
        quantity: '10',
      }
    ];
    
  }

  onClick() {
    console.log('Button clicked!');
  }
}
