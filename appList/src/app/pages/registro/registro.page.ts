import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listCircle } from 'ionicons/icons';
import { ModalFormUsuarioComponent } from 'src/app/componente/modal-form-usuario/modal-form-usuario.component';
import { FormCursoComponent } from 'src/app/componente/Modal/form-curso/form-curso.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    RouterLink,
    RouterLinkActive,
    IonIcon,
    IonItem,
    IonList,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule]
})
export class RegistroPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) {
    addIcons({ listCircle });
  }

  ngOnInit() {
  }

   async formAlumno() {
      const modal = await this.modalCtrl.create({
        component: ModalFormUsuarioComponent,
       
      });
  
      modal.present();
  
    }
    async formCurso() {
      const modal = await this.modalCtrl.create({
        component: FormCursoComponent,
       
      });
  
      modal.present();
  
    }

}
