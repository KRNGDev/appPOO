import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  ActionSheetController,
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
  IonInput
} from "@ionic/angular/standalone";
import { Pago } from 'src/app/interface/pago';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Alumno } from 'src/app/interface/alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-form-usuario',
  templateUrl: './modal-form-usuario.component.html',
  styleUrls: ['./modal-form-usuario.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
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

export class ModalFormUsuarioComponent implements OnInit {
  alumno:Alumno={}as Alumno;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private datosService: AlumnoService,
    private router: Router) { }

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

  submit(alumno:Alumno){
    alumno.id=this.datosService.getAlumnos().length+1;
    alumno.mca_pago=false;
    alumno.asistencia=0;
    alumno.codigo_clase='KENLM';
    alumno.imagen = 'https://ionicframework.com/docs/img/demos/avatar.svg';
    console.log(alumno);
    this.datosService.setAlumnos(alumno);
    this.router.navigate(['/lista-alumnos']);
    this.cancel();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
