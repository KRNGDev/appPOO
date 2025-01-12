import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonItem, IonAvatar, IonNote, IonSelect, IonList, IonLabel, IonSelectOption, IonContent, IonMenuButton, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, IonCard, IonCardSubtitle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library, logoUsd, cashOutline, playCircle, radio, search, searchOutline, closeOutline, checkmarkOutline, arrowBackOutline } from 'ionicons/icons';
import { Alumno } from 'src/app/interface/alumno';
import { ModalFichaComponent } from 'src/app/componente/modal-ficha/modal-ficha.component';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Clase } from 'src/app/interface/clase';


@Component({
  selector: 'app-listado-alumno-clase',
  templateUrl: './listado-alumno-clase.page.html',
  styleUrls: ['./listado-alumno-clase.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle,  IonAvatar, IonNote, IonList, IonSelect, IonSelectOption, IonLabel, IonItem, RouterLink, RouterLinkActive, IonContent, IonMenuButton, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]

})
export class ListadoAlumnoClasePage implements OnInit {
  codigo_clase!:string;
  selectedOrder: string = 'ascendente';
  private clase: Clase = {} as Clase;
  alumnos: Alumno[] = [];


  constructor(
    private modalCtrl: ModalController,
    private location: Location,
    private alumnoService: AlumnoService,
    private activatedRoute: ActivatedRoute) {
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
  async fichaAlumno(id_alumno: number) {
    const modal = await this.modalCtrl.create({
      component: ModalFichaComponent,
      componentProps: {
        id_alumno: id_alumno
      },
    });

    modal.present();

  }

  ngOnInit(): void {   
    this.codigo_clase=this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.alumnos = this.alumnoService.getAlumnos().filter(alumno => alumno.codigo_clase === this.codigo_clase);
    this.clase = this.alumnoService.getClases().filter(clase => clase.codigo === this.codigo_clase)[0];
    this.sortList();
    console.log(this.codigo_clase);
  }

  getClase() {
    return this.clase;
  }

}
