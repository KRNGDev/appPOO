import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonItem, IonMenuButton, ModalController,  IonAvatar, IonNote, IonSelect, IonList, IonLabel, IonSelectOption, IonContent,  IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar,  IonCardSubtitle, } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { addIcons } from 'ionicons';
import { library, logoUsd, cashOutline, playCircle, radio, search, searchOutline, closeOutline, checkmarkOutline, arrowBackOutline } from 'ionicons/icons';
import { Curso } from 'src/app/interface/curso';
import { Alumno } from 'src/app/interface/alumno';
import { Clase } from 'src/app/interface/clase';
import { Profesor } from 'src/app/interface/profesor';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-cursos',
  templateUrl: './listado-cursos.page.html',
  styleUrls: ['./listado-cursos.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle,  IonAvatar, IonMenuButton, IonList, IonSelect, IonSelectOption, IonLabel, IonItem,   IonContent, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,]
})
export class ListadoCursosPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  id_disciplina: number|undefined;   
  selectedOrder: string = 'descendente';    
  cursos: Curso[] = [];


  constructor(
    private modalCtrl: ModalController,
    private location: Location,
    private alumnoService: AlumnoService,) {
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
        this.cursos.sort((a, b) => a.anioFin - b.anioFin);
        break;
      case 'descendente':
        this.cursos.sort((a, b) => b.anioFin - a.anioFin);
        break;
     
    }
  }

  private obtencionDatos(){
    const dato=  this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.id_disciplina=parseInt(dato);
   this.cursos=this.alumnoService.getCursos().filter(curso=>curso.id_disciplina===this.id_disciplina);
    
  }

  ngOnInit(): void {
    this.obtencionDatos();   
    this.sortList();
  }
    

  async fichaCurso() {
    const modal = await this.modalCtrl.create({
      componentProps: {
      
      },
      component: null
    });

    modal.present();

  }

}
