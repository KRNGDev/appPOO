import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import{ListadoComponent} from 'src/app/componente/listado/listado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalController, IonAvatar,IonItem,IonCard ,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonIcon,IonNote, IonList,IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library,  playCircle, radio, search, pin,listCircle, arrowForwardOutline, share, trash, calendarOutline } from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { ModalTotalPagosComponent } from 'src/app/componente/modal-total-pagos/modal-total-pagos.component';
import { ModalListAlumnosComponent } from 'src/app/componente/modal-list-alumnos/modal-list-alumnos.component';
import { GraficaBarrasComponent } from 'src/app/componente/grafica-barras/grafica-barras.component';
import { GraficaLinealComponent } from 'src/app/componente/grafica-lineal/grafica-lineal.component';
import { AlumnoService } from 'src/app/service/alumnoService/alumno.service';
import { Disciplina } from 'src/app/interface/disciplina';
import { Curso } from 'src/app/interface/curso';
import { Clase } from 'src/app/interface/clase';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ListadoComponent, GraficaLinealComponent, GraficaBarrasComponent, IonAvatar, RouterLink, RouterLinkActive, IonContent,GraficaCircularComponent, IonItem,IonCard ,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonIcon,IonNote, IonList,IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
 
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  private curso :Curso={} as Curso;
   clases: Clase[]=[];
  private disciplina: Disciplina={} as Disciplina;
  


  constructor(private datosService: AlumnoService, private modalCtrl: ModalController) {
    addIcons({calendarOutline,listCircle,arrowForwardOutline,library,playCircle,radio,search,pin,share,trash});
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.disciplina = this.datosService.getDisciplinas().filter(disciplina => disciplina.id === this.datosService.id_usuario)[0];
    this.curso = this.datosService.getCursos().filter(curso => curso.id_disciplina === this.disciplina.id)[0];
    this.clases = this.datosService.getClases().filter(clase => clase.codigo_curso === this.curso.codigo);
  }
  getCurso(){
    return this.curso;
  }

   async listAlumno(codigo_clase: string) {
      const modal = await this.modalCtrl.create({
        component: ModalListAlumnosComponent,
        componentProps: {
          codigo_clase: codigo_clase
        },
      });
  
      modal.present();
  
    }
    async listTotalPagos(id_disciplina:number) {
      const modal = await this.modalCtrl.create({
        component: ModalTotalPagosComponent,
        componentProps: {
          id_disciplina: id_disciplina
        },
       
      });
  
      modal.present();
  
    }
 
  getDisciplina(){
    return this.disciplina;
  }
}
