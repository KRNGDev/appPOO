import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons,IonMenuButton,IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listCircle } from 'ionicons/icons';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonLabel,  RouterLink, RouterLinkActive, IonIcon,  IonItem, IonList, IonButtons,IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroPage implements OnInit {

  constructor() { 
    addIcons({listCircle});
  }

  ngOnInit() {
  }

}
