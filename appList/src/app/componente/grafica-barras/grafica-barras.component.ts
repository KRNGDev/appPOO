import { Component, OnInit, ViewChild } from '@angular/core';
import{ChartComponent, ApexPlotOptions, ApexChart, NgApexchartsModule} from  'ng-apexcharts';


export type barraOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  colors: string[];
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class GraficaBarrasComponent  implements OnInit {
@ViewChild("chart") chart: ChartComponent = new ChartComponent;
  public barrasOptions: barraOptions;

  constructor() {
    this.barrasOptions={
      series: [
        {
          name: "basic",
          data: [30, 50, 70, 90, 20, 100, 80, 30, 50, 70, 90, 20]
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      
      title: {
        text: "Asistencia mes",
        align: "left"
      },
      colors: [
        "#d4526e",
        "#13d8aa",
        "#A5978B",
        "#2b908f",
        "#f9a3a4",
        "#90ee7e",
        "#f48024",
        "#69d2e7"
      ],
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: false
        }
      },
      dataLabels: {
        enabled: false,        
      },
      xaxis: {
        categories: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre",
          
        ],
        labels: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: true
        }
      },
    }
   }

  ngOnInit() {}

}
