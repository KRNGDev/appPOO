import { Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import{NgApexchartsModule} from  'ng-apexcharts';


import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type circuleOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};
@Component({
  selector: 'app-grafica-circular',
  templateUrl: './grafica-circular.component.html',
  styleUrls: ['./grafica-circular.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule]
})
export class GraficaCircularComponent implements OnChanges {
 @ViewChild("chart") chart: ChartComponent = new ChartComponent;
 @Input() asistencia: number= 0;
 color:string[] = [ ];

  public circleOptions: circuleOptions;
  constructor() {    
    const asistenciaValida = Math.max(0, this.asistencia || 0);
    this.circleOptions={
      series: [asistenciaValida],
      chart: {
        height: 110,
        type: "radialBar",
        offsetY: 0,
        offsetX: 0,
        width: 110,
        
      },
      colors: this.color,
      
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            size: "40%"
          },
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, 
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2
            }
          },
          dataLabels: {
            name: {
              show: true,
              fontSize:"15px",
              color: "#333",
              offsetY: 40,
            },
            value: {
              offsetY: -10,
              fontSize: "20px"
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 1,
        
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      labels: ["Asistiencia"]
    };
    
   }
   private cambiarColor(): string[] {
    console.log(this.asistencia);
    return this.asistencia >= 50 ? ["#20E647"] : ["#E40000"];
  }
   ngOnChanges(changes: SimpleChanges): void {
    if (changes['asistencia']) {      
      this.circleOptions.series = [this.asistencia];
      this.color = this.cambiarColor();
      this.circleOptions.colors = this.color;
      console.log(this.color);
    }
  }

}
