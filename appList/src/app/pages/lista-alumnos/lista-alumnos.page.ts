import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonAvatar, IonNote, IonSelect, IonList, IonLabel, IonSelectOption, IonContent, IonMenuButton, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, IonCard, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, logoUsd, cashOutline, playCircle, radio, search, searchOutline, closeOutline, checkmarkOutline, arrowBackOutline } from 'ionicons/icons';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Clase } from 'src/app/interface/clase';
import { Profesor } from 'src/app/interface/profesor';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.page.html',
  styleUrls: ['./lista-alumnos.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCard, IonAvatar, IonNote, IonList, IonSelect, IonSelectOption, IonLabel, IonItem, RouterLink, RouterLinkActive, IonContent, IonMenuButton, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class ListaAlumnosPage implements OnInit {
  id_disciplina: number|undefined;
  selectedOrder: string = 'ascendente';
  private clase: Clase = {} as Clase;
  private profesor: Profesor={} as Profesor;
  alumnos: Alumno[] = [];


  constructor(private location: Location, private alumnoService: AlumnoService, private activatedRoute: ActivatedRoute) {
    addIcons({ arrowBackOutline, checkmarkOutline, logoUsd, cashOutline, closeOutline, searchOutline, playCircle, radio, library, search });
    this.sortList();
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

  pagAtras() {
    this.location.back();
  }

  ngOnInit(): void {
    this.profesor = this.alumnoService.getProfesores().filter(profesor => profesor.id === this.alumnoService.id_usuario)[0];
     
    const clases = this.alumnoService.getClases().filter(clase => clase.id_disciplina === this.profesor.id_disciplina);
    const alumnosDeClases = clases.flatMap(clase => this.alumnoService.getAlumnos().filter(alumno => alumno.codigo_clase === clase.codigo));
    this.alumnos = alumnosDeClases;    
    this.sortList();
  }
    

  getClase() {
    return this.clase;
  }

}
