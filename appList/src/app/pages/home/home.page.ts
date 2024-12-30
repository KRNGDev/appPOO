import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import{ListadoComponent} from 'src/app/componente/listado/listado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar,IonItem,IonCard ,IonThumbnail,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonIcon,IonNote, IonList,IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library,  playCircle, radio, search, pin,listCircle, arrowForwardOutline, share, trash, calendarOutline } from 'ionicons/icons';
import{NgApexchartsModule} from  'ng-apexcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexPlotOptions ,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexFill,
  ApexGrid
} from "ng-apexcharts";
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
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
export type circuleOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ListadoComponent, IonAvatar, RouterLink, RouterLinkActive, IonContent,GraficaCircularComponent,NgApexchartsModule, IonItem,IonCard ,IonThumbnail,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonIcon,IonNote, IonList,IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  @ViewChild("chart") chart: ChartComponent = new ChartComponent;
  public chartOptions: ChartOptions;
  public barrasOptions: barraOptions;
  public circleOptions: circuleOptions;


  constructor() {
    addIcons({calendarOutline,listCircle,arrowForwardOutline,library,playCircle,radio,search,pin,share,trash});
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 30]
        }
      ],
      chart: {
        height: 200,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Ingresos mes",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
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
    this.circleOptions={
      series: [70],
      chart: {
        height: 120,
        type: "radialBar",
        offsetY: 0,
        offsetX: -90,
      },
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
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91]
        }
      },
      labels: ["Asistiencia"]
    };
    

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
