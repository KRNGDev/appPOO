import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonMenuButton, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonButtons, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
  standalone: true,
  imports: [IonButtons, IonSelect, IonSelectOption, IonButton,IonMenuButton, IonInput, IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegistroAlumnoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
