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
import { Profesor } from 'src/app/interface/profesor';


@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss'],
  standalone: true,
  imports: [IonCard, 
    IonList,
    IonIcon,
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
export class FormCursoComponent implements OnInit {
  curso: Curso = {} as Curso;
  clases: Clase[]=[];
  usuario:Profesor={}as Profesor;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private datosService: AlumnoService,
    private router: Router) { 
      addIcons({addSharp,bookOutline});
    }

  ngOnInit() {

  this.usuario=this.datosService.usuario;
   }

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
      id_disciplina: this.usuario.id_disciplina,
      codigo_curso: ''
    } as Clase);
  }
  borrarClase(i:number){
    this.clases.splice(i, 1);
  }

  submit(curso: Curso,clases: Clase[]) {   
    curso.id_disciplina=this.usuario.id_disciplina;
    curso.codigo="K"+this.datosService.getCursos().filter(curso=>curso.id_disciplina===this.usuario.id_disciplina).length;
    clases.forEach(clase=>clase.codigo_curso=curso.codigo);
    this.datosService.setCursos(curso);
    this.datosService.setClases(clases)
    this.router.navigate(['/listado-cursos/'+this.usuario.id_disciplina]);
    console.log(curso);
    console.log(clases);
    this.cancel();
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }


}
