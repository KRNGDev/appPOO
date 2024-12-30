import { Component,inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonIcon, IonContent, IonHeader,IonToolbar,IonButtons, IonMenuButton, IonTitle} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-estadistcas',
  templateUrl: './estadistcas.page.html',
  styleUrls: ['./estadistcas.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonIcon, IonContent, IonButtons,IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstadistcasPage implements OnInit {
  

  constructor() {
    addIcons({arrowBackOutline});
   }

  ngOnInit() {
   
  }

}
