import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, ActionSheetController, IonInput, IonList, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonButtons, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, callOutline, mailOutline, personOutline, calendarOutline, locationOutline, schoolOutline, timeOutline, cashOutline } from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { ModalFormPagoComponent } from 'src/app/componente/modal-form-pago/modal-form-pago.component';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.page.html',
  styleUrls: ['./ficha-alumno.page.scss'],
  standalone: true,
  imports: [IonModal, IonButton, ModalFormPagoComponent, IonContent, IonInput, IonList, GraficaCircularComponent, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class FichaAlumnoPage implements OnInit {
  public id!: string;
  private activatedRoute = inject(ActivatedRoute);
  private alumno: Alumno | undefined;
  presentingElement!: HTMLElement | null;


  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController, private location: Location, private alumnoService: AlumnoService) {
    addIcons({ arrowBackOutline, calendarOutline, locationOutline, schoolOutline, timeOutline, cashOutline, callOutline, mailOutline, personOutline });
    this.asignar();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalFormPagoComponent,
      
      componentProps: {
        id_alumno: this.alumno?.id,
      },
    });
    
     modal.present();
     const { data, role } = await modal.onWillDismiss();
     if (role === 'confirm') {
      this.pagosDelMes();
    }
  }

  asignar() {
    this.alumno = this.alumnoService.getAlumnos().find((alumno) => alumno.id === parseInt(this.id));
    console.log(this.alumno);
  }
  pagAtras() {
    this.location.back();
  }
  pagosDelMes() {
    const mesActual = new Date().getMonth();
    const anoActual = new Date().getFullYear();
    const pagosDelMes = this.alumnoService.getPagos().filter(pago => {
      const pagoDate = new Date(pago.fecha);
      return pago.id_alumno === parseInt(this.id) && pagoDate.getMonth() === mesActual&& pagoDate.getFullYear() === anoActual;
    });
    console.log(pagosDelMes);
    if(pagosDelMes.length === 0 && this.alumno){ 
      this.alumno.mca_pago = false;
    } else if(pagosDelMes.length > 0 && this.alumno){
      this.alumno.mca_pago = true;
    }
  }
  /*pagado() {
    console.log(this.id);
    this.alumnoService.setPagos(parseInt(this.id));
  }*/

  getAlumno() {
    return this.alumno;
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.asignar();
   this.pagosDelMes();
  }

  
}
