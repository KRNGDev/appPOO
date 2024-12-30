import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonItem,IonAvatar,IonNote, IonCard,IonSelect,IonList,IonLabel,IonSelectOption,IonInput,IonButton, IonContent,IonMenuButton,IonIcon, IonBackButton,IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search, searchOutline,closeCircle, checkmarkCircle } from 'ionicons/icons';
import{ListadoComponent} from 'src/app/componente/listado/listado.component';

import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
  standalone: true,
  imports: [ ListadoComponent, IonAvatar,IonNote, IonCard,  IonList,IonSelect, IonSelectOption, IonLabel, IonButton, IonInput, IonItem, RouterLink, RouterLinkActive, IonContent,IonMenuButton , IonIcon, IonBackButton, IonButtons,  IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaAlumnosPage implements OnInit{
  selectedOrder: string = 'ascendente';
  alumnos: Alumno[]= [ ];

  constructor(private alumnoService: AlumnoService) { 
    addIcons({checkmarkCircle, closeCircle,searchOutline,playCircle,radio,library,search});
  }
  

  onOrderChange(event: any): void {
    this.selectedOrder = event.detail.value; 
    this.sortList(); 
  }
  
  sortList() {
    switch (this.selectedOrder) {
      case 'ascendente':
        this.alumnos.sort((a, b) => a.asistencia - b.asistencia);
        break;
      case 'descendente':
        this.alumnos.sort((a, b) => b.asistencia - a.asistencia);
        break;
      case 'pagado':
        this.alumnos.sort((a, b) => Number(b.pago) - Number(a.pago));
        break;
      case 'noPagado':
        this.alumnos.sort((a, b) => Number(a.pago) - Number(b.pago));
        break;
    }
  }

  ngOnInit(): void {
      this.alumnos = this.alumnoService.getAlumnos();
  }

}
