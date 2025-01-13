import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  ActionSheetController,
  IonList,
  IonCardSubtitle,
  IonItem,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonCard,
  IonLabel,
  IonAvatar,
  IonButtons,
  IonIcon,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  trophyOutline,
  listOutline,
  arrowBackOutline,
  cashSharp,
  callOutline,
  mailOutline,
  personOutline,
  calendarOutline,
  locationOutline,
  schoolOutline,
  timeOutline,
  cashOutline,
  closeCircle,
  createSharp,
  happyOutline
} from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { Alumno } from 'src/app/interface/alumno';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { ModalFormPagoComponent } from 'src/app/componente/modal-form-pago/modal-form-pago.component';
import { ModalListPagoComponent } from 'src/app/componente/modal-list-pago/modal-list-pago.component';
import { Grados } from 'src/app/interface/grados';

@Component({
  selector: 'app-modal-ficha',
  templateUrl: './modal-ficha.component.html',
  styleUrls: ['./modal-ficha.component.scss'],
  standalone: true,
  imports: [IonButton,
    IonContent,
    IonList,
    GraficaCircularComponent,
    IonCardSubtitle,
    IonItem,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonCard,
    IonLabel,
    IonAvatar,
    IonIcon,
    IonButtons,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule]
})
export class ModalFichaComponent implements OnInit {
  @Input() id_alumno!: number;
  private alumno: Alumno | undefined;
  presentingElement!: HTMLElement | null;
  private grado: Grados = {} as Grados;

  constructor(
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private location: Location,
    private alumnoService: AlumnoService
  ) {
    addIcons({
      createSharp,
      happyOutline,
      arrowBackOutline,
      trophyOutline,
      listOutline,
      cashSharp,
      closeCircle,
      calendarOutline,
      timeOutline,
      schoolOutline,
      callOutline,
      mailOutline,
      locationOutline,
      cashOutline,
      personOutline,
    });


  }

  private initialize() {
    this.asignar();
    this.pagosDelMes();
    this.grado = this.alumnoService.getGrados().filter(grado => grado.id_alumno == this.alumno?.id)[0];
  }

  async formPago() {
    const modal = await this.modalCtrl.create({
      component: ModalFormPagoComponent,
      componentProps: {
        id_alumno: this.alumno?.id,
      },
    });

    await modal.present();
    const { role } = await modal.onWillDismiss();
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

    await modal.present();
  }

  async actionSheetPagos() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Formulario de Pago',
          icon: 'cash-outline',
          handler: () => this.formPago(),
        },
        {
          text: 'Lista de Pagos',
          icon: 'list-outline',
          handler: () => this.listPago(),
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
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
          },
        },
        {
          text: `Email: ${this.getAlumno()?.email}`,
          icon: 'mail-outline',
          handler: () => {
            window.location.href = `mailto:${this.getAlumno()?.email}`;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async actionSheetOpciones() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      buttons: [
        {
          text: `Editar Alumno`,
          icon: 'create-sharp',
          handler: () => {
           
          },
        },
        {
          text: `Eliminar contacto`,
          icon: 'close-circle',
          handler: () => {
           
          },
        },
        
      ],
    });
    await actionSheet.present();
  }

  private asignar() {
    this.alumno = this.alumnoService
      .getAlumnos()
      .find((alumno) => alumno.id === this.id_alumno);
    console.log(this.alumno);
  }

  pagAtras() {
    this.location.back();
  }

  private pagosDelMes() {
    const mesActual = new Date().getMonth();
    const anoActual = new Date().getFullYear();
    const pagosDelMes = this.alumnoService
      .getPagos()
      .filter((pago) => {
        const pagoDate = new Date(pago.fecha);
        return (
          pago.id_alumno === this.id_alumno &&
          pagoDate.getMonth() === mesActual &&
          pagoDate.getFullYear() === anoActual
        );
      });

    if (this.alumno) {
      this.alumno.mca_pago = pagosDelMes.length > 0;
    }
  }

  ultimoPago(id: number): string {
    const pagos = this.alumnoService.getPagos();
    const pago = pagos
      .filter((pago) => pago.id_alumno === id)
      .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    const ultimoPago = pago[0];
    return ultimoPago ? ultimoPago.fecha : 'No hay pagos';
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  getAlumno() {
    return this.alumno;
  }
  getGrado() {
    return this.grado;
  }

  updateAsistencia(event: any) {
    if (this.alumno) {
      this.alumno.asistencia = event;
    }
  }

  ngOnInit() {
    console.log(this.id_alumno);
    this.initialize();
  }


}
