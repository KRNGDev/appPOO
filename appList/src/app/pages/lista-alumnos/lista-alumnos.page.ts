import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonItem,IonAvatar,IonNote, IonSelect,IonList,IonLabel,IonSelectOption, IonContent,IonMenuButton,IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search, searchOutline,closeCircle, checkmarkCircle } from 'ionicons/icons';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
  standalone: true,
  imports: [ IonAvatar,IonNote, IonList,IonSelect, IonSelectOption, IonLabel,   IonItem, RouterLink, RouterLinkActive, IonContent,IonMenuButton , IonIcon,  IonButtons,  IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  
})
export class ListaAlumnosPage implements OnInit{
  titulo: string = '';
  selectedOrder: string = 'ascendente';
  alumnos: Alumno[]= [ ];
  

  constructor(private alumnoService: AlumnoService, private activatedRoute: ActivatedRoute) { 
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
        this.alumnos.sort((a, b) => Number(b.mca_pago) - Number(a.mca_pago));
        break;
      case 'noPagado':
        this.alumnos.sort((a, b) => Number(a.mca_pago) - Number(b.mca_pago));
        break;
    }
  }

  ngOnInit(): void {
      this.alumnos = this.alumnoService.getAlumnos();
      this.titulo = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
