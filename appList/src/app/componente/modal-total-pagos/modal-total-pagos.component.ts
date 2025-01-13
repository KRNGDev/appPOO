import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { documentSharp } from 'ionicons/icons';
import {
  ModalController,
  IonCardSubtitle,
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
import { Alumno } from 'src/app/interface/alumno';


@Component({
  selector: 'app-modal-total-pagos',
  templateUrl: './modal-total-pagos.component.html',
  styleUrls: ['./modal-total-pagos.component.scss'],
   imports: [
      CommonModule,
      IonCardSubtitle,
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
export class ModalTotalPagosComponent  implements OnInit { 
  @Input() id_disciplina!: number;
  pagos:Pago[] = [];
  alumnos:Alumno[]=[];
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
inicializador(){
  this.alumnos = this.alumnoService.getAlumnos();
}

   getPagos() {
    console.log(this.id_disciplina)
    this.pagos=this.alumnoService.getPagos().filter(pago => pago.id_disciplina=== this.id_disciplina);
    console.log(this.pagos);
  }

  
  getNombreAlumno(id: number): string {
    const alumno = this.alumnos.find(alumno => alumno.id === id);
    return alumno ? alumno.name+' '+alumno.apellido : 'Unknown';

  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.getPagos();
    this.inicializador();

  }

}
