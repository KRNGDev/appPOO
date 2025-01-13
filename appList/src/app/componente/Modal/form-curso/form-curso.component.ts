import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  ActionSheetController,
  IonItemDivider,
  IonIcon,
  IonList,
  IonSelect,
  IonSelectOption,
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput, IonCard } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addOutline, addSharp, bookOutline } from 'ionicons/icons';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Alumno } from 'src/app/interface/alumno';
import { Router } from '@angular/router';
import { Curso } from 'src/app/interface/curso';
import { Clase } from 'src/app/interface/clase';


@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
  standalone: true,
  imports: [IonCard, 
    IonList,
    IonIcon,
    FormsModule,
    IonSelect,
    IonSelectOption,
    IonItem,
    IonInput,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    CommonModule,
    IonContent]
})
export class FormCursoComponent implements OnInit {
  curso: Curso = {} as Curso;
  clases: Clase[]=[];

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private datosService: AlumnoService,
    private router: Router) { 
      addIcons({addSharp,bookOutline});
    }

  ngOnInit() { }

  canDismiss = async () => {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Quieres cerrar?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.cancel();
          }
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });
    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };

  addClase(){
    this.clases.push({
      codigo: '',
      nombre: '',
      horario: '',
      duracion: 0,
      id_disciplina: 0,
      codigo_curso: ''
    } as Clase);
  }
  borrarClase(i:number){
    this.clases.splice(i, 1);
  }

  submit(curso: Curso) {   
   // this.datosService.setAlumnos(alumno);
    this.router.navigate(['/lista-alumnos']);
    this.cancel();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
