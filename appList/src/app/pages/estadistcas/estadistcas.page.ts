import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard,IonInput,IonSelectOption,IonSelect,IonItem,IonContent, IonHeader,IonToolbar,IonButtons, IonMenuButton, IonTitle} from '@ionic/angular/standalone';
import { GraficaLinealComponent } from 'src/app/componente/grafica-lineal/grafica-lineal.component';
import { GraficaBarrasComponent } from 'src/app/componente/grafica-barras/grafica-barras.component';
import { GraficaAreaComponent } from 'src/app/componente/grafica-area/grafica-area.component';

@Component({
  selector: 'app-estadistcas',
  templateUrl: './estadistcas.page.html',
  styleUrls: ['./estadistcas.page.scss'],
  standalone: true,
  imports: [IonMenuButton, GraficaAreaComponent, GraficaBarrasComponent, GraficaLinealComponent, IonCard, IonInput,  IonSelectOption, IonSelect,  IonItem, IonContent, IonButtons,IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstadistcasPage implements OnInit {
  public mostrando:string="graficaBarras";
  today: string |undefined;

  constructor() {
    
   }
 
   mostrar(event:any):void{
    this.mostrando=event.detail.value;
    
   }
   
  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    console.log(this.today);
  }

}
