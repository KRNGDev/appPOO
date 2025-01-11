
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonAvatar, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline,schoolSharp, barChartSharp,peopleSharp,homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';
import { AlumnoService } from './service/alumnoService/alumno.service';
import { Profesor } from './interface/profesor';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonAvatar, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  private profesor :Profesor={} as Profesor;
  
  public appPages = [   
    { title: 'Home', url: '/home/Home', icon: 'home' },
    { title: 'Estadisticas', url: '/estadistcas', icon: 'bar-chart' },
    { title: 'Alumnos', url: '/lista-alumnos', icon: 'people' },
    { title: 'Registro', url: '/registro', icon: 'archive' },
    { title: 'Cursos', url: '/lista-alumnos/Cursos', icon: 'school' },
    
  ];
  

  constructor(private datosService: AlumnoService) {
    addIcons({ mailOutline,schoolSharp ,barChartSharp, peopleSharp, homeOutline, homeSharp , mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
   
  }
  ngOnInit(){
        this.profesor = this.datosService.getProfesores().filter(profesor => profesor.id === this.datosService.id_usuario)[0];

  }
  getProfesor(){
    return this.profesor;
  }


}
