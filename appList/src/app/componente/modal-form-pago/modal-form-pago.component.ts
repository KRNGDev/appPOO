import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, ActionSheetController, IonSelect, IonSelectOption, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel,  IonInput } from "@ionic/angular/standalone";
import { Pago } from 'src/app/interface/pago';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';

@Component({
  selector: 'app-modal-form-pago',
  templateUrl: './modal-form-pago.component.html',
  styleUrls: ['./modal-form-pago.component.scss'],
  standalone: true,
  imports:[IonModal, FormsModule,IonSelect, IonSelectOption, IonItem, IonInput, IonLabel,  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,CommonModule, IonContent ]
})
export class ModalFormPagoComponent  implements OnInit {
  @Input() id_alumno!: number;
  pago: Pago = {} as Pago;
  presentingElement!: HTMLElement | null;
  today: string |undefined;
  pagado:boolean = false;


  constructor(private modalCtrl: ModalController, private actionSheetCtrl: ActionSheetController, private datosService: AlumnoService) { }

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.today = new Date().toISOString().split('T')[0];
  }
  canDismiss = async () => {
    if (this.pagado) {
     
      return true;
    }
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
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.pago, 'confirm');
  }


  submitPago( pago: Pago) { 
    pago.id_alumno = this.id_alumno;
    pago.id = this.datosService.getPagos().length + 1;

    this.datosService.setPagos( pago);
    this.pagado = true;
    this.confirm();
    
  }
}
