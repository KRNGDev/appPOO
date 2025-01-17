import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, ActionSheetController, IonInput, IonList, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonButtons, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophyOutline,listOutline, arrowBackOutline, cashSharp, callOutline, mailOutline, personOutline, calendarOutline, locationOutline, schoolOutline, timeOutline, cashOutline, closeCircle } from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { ModalFormPagoComponent } from 'src/app/componente/modal-form-pago/modal-form-pago.component';
import { ModalListPagoComponent } from 'src/app/componente/modal-list-pago/modal-list-pago.component';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.page.html',
  styleUrls: ['./ficha-alumno.page.scss'],
  standalone: true,
  imports: [IonModal, IonButton, ModalListPagoComponent, ModalFormPagoComponent, IonContent, IonInput, IonList, GraficaCircularComponent, IonCardSubtitle, IonItem, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonLabel, IonAvatar, IonChip, IonIcon, IonButtons, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})


export class FichaAlumnoPage implements OnInit {
  public id!: string;
  private activatedRoute = inject(ActivatedRoute);
  private alumno: Alumno | undefined;
  presentingElement!: HTMLElement | null;


  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController, private location: Location, private alumnoService: AlumnoService) {
    addIcons({ arrowBackOutline, trophyOutline, listOutline, cashSharp, closeCircle, calendarOutline, timeOutline, schoolOutline, callOutline, mailOutline, locationOutline, cashOutline, personOutline });
    this.asignar();
  }
  async formPago() {
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
  async listPago() {
    const modal = await this.modalCtrl.create({
      component: ModalListPagoComponent,
      componentProps: {
        id_alumno: this.alumno?.id,
      },
    });

    modal.present();

  }

  async actionSheetPagos() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Formulario de Pago',
          icon: 'cash-outline',
          handler: () => {
            this.formPago();
          }
        },
        {
          text: 'Lista de Pagos',
          icon: 'list-outline',
          handler: () => {
            this.listPago();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async actionSheetContacto() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: `Teléfono: ${this.getAlumno()?.telefono}`,
          icon: 'call-outline',
          handler: () => {
            window.location.href = `tel:${this.getAlumno()?.telefono}`;
          }
        },
        {
          text: `Email: ${this.getAlumno()?.email}`,
          icon: 'mail-outline',
          handler: () => {
            window.location.href = `mailto:${this.getAlumno()?.email}`;
          }
        }
      ]
    });
    await actionSheet.present();
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
      return pago.id_alumno === parseInt(this.id) && pagoDate.getMonth() === mesActual && pagoDate.getFullYear() === anoActual;
    });

    if (pagosDelMes.length === 0 && this.alumno) {
      this.alumno.mca_pago = false;
    } else if (pagosDelMes.length > 0 && this.alumno) {
      this.alumno.mca_pago = true;
    }
  }

  ultimoPago(id: number): string {
    const pagos = this.alumnoService.getPagos();
    const pago = pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()).filter(pago => pago.id_alumno === id);
    const ultimoPago = pago[pago.length - 1];
    if (!ultimoPago) {
      return 'No hay pagos';
    } else {
      return ultimoPago.fecha;
    }

  }

  getAlumno() {
    return this.alumno;
  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.asignar();
    this.pagosDelMes();
  }


}
