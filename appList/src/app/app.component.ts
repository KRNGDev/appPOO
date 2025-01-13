
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonFooter,IonAvatar, IonApp, IonSplitPane, IonTitle, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { exitOutline, mailOutline,schoolSharp, barChartSharp,peopleSharp,homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { AlumnoService } from './service/alumnoService/alumno.service';
import { Profesor } from './interface/profesor';
import { App } from '@capacitor/app';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonFooter, IonAvatar, IonTitle, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  private profesor :Profesor={} as Profesor;
  
  public appPages = [   
    { title: '', url: '', icon: '' },
     
    ];
 

  constructor(private datosService: AlumnoService) {
    addIcons({ mailOutline,exitOutline, schoolSharp ,barChartSharp, peopleSharp, homeOutline, homeSharp , mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
    this.profesor = this.datosService.getProfesores().filter(profesor => profesor.id === this.datosService.id_usuario)[0];
    this.appPages = [
      { title: 'Home', url: '/home/Home', icon: 'home' },
      { title: 'Cursos', url: '/listado-cursos/' + (this.profesor ? this.profesor.id_disciplina : ''), icon: 'school' },
      { title: 'Alumnos', url: '/lista-alumnos', icon: 'people' },
      { title: 'Registro', url: '/registro', icon: 'archive' },
      { title: 'Estadisticas', url: '/estadistcas', icon: 'bar-chart' },
    ];
  }
  ngOnInit(){
       

  }
  getProfesor(){
    return this.profesor;
  }
  
  salirApp(){
    App.exitApp();
  }


}
