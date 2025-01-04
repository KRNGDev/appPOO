
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonAvatar, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline,schoolSharp, barChartSharp,peopleSharp,homeOutline, homeSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [RouterLink, IonAvatar, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home/Home', icon: 'home' },
    { title: 'Estadisticas', url: '/estadistcas', icon: 'bar-chart' },
    { title: 'Alumnos', url: '/lista-alumnos/Alumnos', icon: 'people' },
    { title: 'Registro', url: '/registro', icon: 'archive' },
    { title: 'Cursos', url: '/lista-alumnos/Cursos', icon: 'school' },
    
  ];
  
  constructor() {
    addIcons({ mailOutline,schoolSharp ,barChartSharp, peopleSharp, homeOutline, homeSharp , mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp });
  }
}
