import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';
import{ListadoComponent} from 'src/app/componente/listado/listado.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAvatar,IonItem,IonCard ,IonCardContent,IonCardHeader,IonCardSubtitle,IonCardTitle,IonIcon,IonNote, IonList,IonLabel, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { library,  playCircle, radio, search, pin,listCircle, arrowForwardOutline, share, trash, calendarOutline } from 'ionicons/icons';
import { GraficaCircularComponent } from 'src/app/componente/grafica-circular/grafica-circular.component';
import { GraficaBarrasComponent } from 'src/app/componente/grafica-barras/grafica-barras.component';
import { GraficaLinealComponent } from 'src/app/componente/grafica-lineal/grafica-lineal.component';
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
  


  constructor() {
    addIcons({calendarOutline,listCircle,arrowForwardOutline,library,playCircle,radio,search,pin,share,trash});
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
