import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { documentSharp } from 'ionicons/icons';
import {
  ModalController,
  IonIcon,
  IonNote,
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,  
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Pago } from 'src/app/interface/pago';


@Component({
  selector: 'app-modal-list-pago',
  templateUrl: './modal-list-pago.component.html',
  styleUrls: ['./modal-list-pago.component.scss'],
  imports: [
    CommonModule,
    IonSelect,
    IonSelectOption,
    IonAvatar,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonNote,   
    IonTitle,
    IonToolbar,
  ],
})
export class ModalListPagoComponent  implements OnInit {
  
  @Input() id_alumno!: number;
  pagos:Pago[] = [];
  presentingElement!: HTMLElement | null;  
  selectedOrder: string = 'descendente';

  constructor(private modalCtrl: ModalController, private alumnoService: AlumnoService) {
      addIcons({ documentSharp });
  }

  onOrderChange(event: any): void {
    this.selectedOrder = event.detail.value; 
    this.sortList(); 
  }
  
  sortList() {
    switch (this.selectedOrder) {
      case 'ascendente':
        this.pagos.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        break;
      case 'descendente':
        this.pagos.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
        break;
      
    }
  }


   getPagos() {
    console.log(this.id_alumno);
    this.pagos=this.alumnoService.getPagos().filter(pago => pago.id_alumno === this.id_alumno);
    console.log(this.pagos);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.getPagos();

  }

}
